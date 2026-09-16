import { NextRequest, NextResponse } from "next/server";
import {
  fireGlobalControlTag,
  upsertGlobalControlContact,
} from "../../lib/globalControl";

const CONTACT_FORM_TAG_ID = "6aa9ea024c80625f7250237e";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = String(body.email || "").trim();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
    }

    const fullName = String(body.name || "").trim();
    const nameParts = fullName.split(/\s+/).filter(Boolean);
    const firstName = String(body.first_name || nameParts[0] || "").trim();
    const lastName = String(
      body.last_name || (nameParts.length > 1 ? nameParts.slice(1).join(" ") : ""),
    ).trim();
    const submittedAt = new Date().toISOString();

    await upsertGlobalControlContact({
      email,
      firstName,
      lastName,
      customFields: {
        source: String(body.source || "Quantum Energy Beds Contact Form"),
        phone: String(body.phone || ""),
        interest: String(body.interest || ""),
        message: String(body.message || ""),
        contactFormSubmitted: submittedAt,
      },
    });

    await fireGlobalControlTag(email, CONTACT_FORM_TAG_ID);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form Global Control error:", error);
    return NextResponse.json({ error: "Unable to sync contact" }, { status: 500 });
  }
}
