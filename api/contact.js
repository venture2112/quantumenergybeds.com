const {
  fireGlobalControlTag,
  upsertGlobalControlContact,
} = require("../lib/globalControlServer");

const CONTACT_FORM_TAG_ID = "6aa9ea024c80625f7250237e";

module.exports = async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Method not allowed" });
  }

  try {
    const body = typeof request.body === "string" ? JSON.parse(request.body) : request.body || {};
    const email = String(body.email || "").trim();

    if (!email || !email.includes("@")) {
      return response.status(400).json({ error: "Valid email is required" });
    }

    const fullName = String(body.name || "").trim();
    const nameParts = fullName.split(/\s+/).filter(Boolean);
    const firstName = String(body.first_name || nameParts[0] || "").trim();
    const lastName = String(
      body.last_name || (nameParts.length > 1 ? nameParts.slice(1).join(" ") : ""),
    ).trim();

    // Fire the confirmed lead-source tag first. Global Control creates the
    // contact automatically when the email address is not already present.
    await fireGlobalControlTag(email, CONTACT_FORM_TAG_ID);

    // Enrich the contact without risking the lead-source tag if the contact
    // record uses a different custom-field schema.
    try {
      await upsertGlobalControlContact({
        email,
        firstName,
        lastName,
        customFields: {
          source: String(body.source || "Quantum Energy Beds Contact Form"),
          phone: String(body.phone || ""),
          interest: String(body.interest || ""),
          message: String(body.message || ""),
          contactFormSubmitted: new Date().toISOString(),
        },
      });
    } catch (contactError) {
      console.error("Contact enrichment error (non-critical):", contactError);
    }

    return response.status(200).json({ success: true });
  } catch (error) {
    console.error("Contact form Global Control error:", error);
    return response.status(500).json({ error: "Unable to sync contact" });
  }
};
