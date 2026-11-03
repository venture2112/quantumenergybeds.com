import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const CONTACT_TAG_ID = "6aa9ea024c80625f7250237e";

export async function POST(request: NextRequest) {
  let input: Record<string, unknown>;
  try {
    input = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const value = (key: string) => typeof input[key] === "string" ? (input[key] as string).trim().slice(0, 4000) : "";
  const email = value("email").slice(0, 254);
  if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 });
  }
  if (value("_honey")) return NextResponse.json({ ok: true });
  const webhook = process.env.GC_CONTACT_WEBHOOK_URL;
  const secret = process.env.GC_CONTACT_WEBHOOK_SECRET;
  if (!webhook || !secret) {
    console.error("GC contact webhook is not configured");
    return NextResponse.json({ error: "Contact service unavailable" }, { status: 503 });
  }
  let url: URL;
  try {
    url = new URL(webhook);
    if (url.protocol !== "https:") throw new Error("HTTPS required");
  } catch {
    return NextResponse.json({ error: "Contact service unavailable" }, { status: 503 });
  }
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": `Bearer ${secret}` },
      body: JSON.stringify({
        email,
        firstName: value("first_name").slice(0, 200),
        lastName: value("last_name").slice(0, 200),
        phone: value("phone").slice(0, 100),
        interest: value("interest").slice(0, 200),
        message: value("message"),
        source: value("source").slice(0, 200),
        tagIds: [CONTACT_TAG_ID],
      }),
      signal: AbortSignal.timeout(10000),
      cache: "no-store",
    });
    if (!response.ok) throw new Error(`GC upstream status ${response.status}`);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("GC contact delivery failed", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json({ error: "Unable to deliver contact" }, { status: 502 });
  }
}
