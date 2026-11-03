import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const GC_API_URL = "https://api.globalcontrol.io/api/ai";
const CONTACT_TAG_ID = "6aa9ea024c80625f7250237e";

type GCEnvelope<T> =
  | { type: "response"; data: T }
  | { type: "error"; error?: { message?: string; status?: number } };

type GCContact = {
  email: string;
  firstName?: string;
  lastName?: string;
  name?: string;
  phone?: string;
  tags?: string[];
};

function text(input: Record<string, unknown>, key: string, max = 4000) {
  return typeof input[key] === "string" ? (input[key] as string).trim().slice(0, max) : "";
}

function jsonError(message: string, status: number) {
  return NextResponse.json({ ok: false, error: message }, { status });
}

export async function POST(request: NextRequest) {
  let input: Record<string, unknown>;
  try {
    input = await request.json();
  } catch {
    return jsonError("Invalid request", 400);
  }

  const email = text(input, "email", 254).toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return jsonError("Valid email required", 400);
  }
  if (text(input, "_honey")) return NextResponse.json({ ok: true });

  const apiKey = process.env.GC_API_KEY;
  if (!apiKey) {
    console.error("GC_API_KEY is not configured");
    return jsonError("Contact service unavailable", 503);
  }

  const submittedName = text(input, "name", 200);
  let firstName = text(input, "first_name", 100);
  let lastName = text(input, "last_name", 100);
  if (!firstName && !lastName && submittedName) {
    const parts = submittedName.split(/\s+/);
    firstName = parts.shift() ?? "";
    lastName = parts.join(" ");
  }
  let phone = text(input, "phone", 100);

  try {
    const searchUrl = new URL(`${GC_API_URL}/contacts`);
    searchUrl.searchParams.set("search", email);
    searchUrl.searchParams.set("limit", "100");
    searchUrl.searchParams.set("withCounts", "false");

    const lookupResponse = await fetch(searchUrl, {
      headers: { "X-API-KEY": apiKey },
      signal: AbortSignal.timeout(10000),
      cache: "no-store",
    });
    const lookup = (await lookupResponse.json()) as GCEnvelope<{ contacts?: GCContact[] }>;
    if (lookup.type !== "response") {
      console.error("GC contact lookup failed", lookup.type === "error" ? lookup.error?.message : "Invalid response");
      return jsonError("Unable to verify contact details. Please try again.", 502);
    }

    const existing = lookup.data.contacts?.find((contact) => contact.email?.toLowerCase() === email);
    if (existing) {
      firstName ||= existing.firstName ?? "";
      lastName ||= existing.lastName ?? "";
      phone ||= existing.phone ?? "";
    }

    const payload = {
      email,
      firstName,
      lastName,
      phone,
      tagIds: [CONTACT_TAG_ID],
      activityType: "FORM_SUBMITTED",
      activityDescription: "Submitted the Quantum Energy Beds contact form",
      activityUrl: request.headers.get("referer") ?? "https://quantumenergybeds.com",
      activityData: {
        source: text(input, "source", 200),
        interest: text(input, "interest", 200),
        message: text(input, "message"),
      },
    };

    const response = await fetch(`${GC_API_URL}/tags/fire`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": apiKey,
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10000),
      cache: "no-store",
    });
    let result: GCEnvelope<{ tagIds?: string[] }> | null = null;
    if (response.status !== 201) {
      try {
        result = (await response.json()) as GCEnvelope<{ tagIds?: string[] }>;
      } catch {
        result = null;
      }
    }
    let tagConfirmed = response.status === 201 || result?.type === "response";

    // Verify through the contact record itself if the fire response omits tag IDs.
    if (!tagConfirmed) {
      const verifyUrl = new URL(`${GC_API_URL}/contacts`);
      verifyUrl.searchParams.set("search", email);
      verifyUrl.searchParams.set("limit", "100");
      verifyUrl.searchParams.set("withCounts", "false");

      const verifyResponse = await fetch(verifyUrl, {
        headers: { "X-API-KEY": apiKey },
        signal: AbortSignal.timeout(10000),
        cache: "no-store",
      });
      const verified = (await verifyResponse.json()) as GCEnvelope<{ contacts?: GCContact[] }>;
      const verifiedContact =
        verified.type === "response"
          ? verified.data.contacts?.find((contact) => contact.email?.toLowerCase() === email)
          : undefined;
      tagConfirmed = verifiedContact?.tags?.includes(CONTACT_TAG_ID) === true;
    }

    if (!tagConfirmed) {
      const reason = result?.type === "error" ? result.error?.message : "Tag membership was not confirmed";
      console.error("GC contact delivery failed", reason ?? "Invalid response");
      return jsonError("Unable to deliver your message. Please try again.", 502);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("GC contact delivery failed", error instanceof Error ? error.message : "Unknown error");
    return jsonError("Contact service temporarily unavailable. Please try again.", 502);
  }
}
