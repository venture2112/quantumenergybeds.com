const {
  fireGlobalControlTag,
  upsertGlobalControlContact,
} = require("../lib/globalControlServer");

const EBOOK_DOWNLOAD_TAG_ID = "6aa9ea034c80625f72502433";

module.exports = async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Method not allowed" });
  }

  try {
    const body = typeof request.body === "string" ? JSON.parse(request.body) : request.body || {};
    const email = String(body.email || "").trim();
    const firstName = String(body.firstName || "").trim();
    const lastName = String(body.lastName || "").trim();

    if (!email || !email.includes("@")) {
      return response.status(400).json({ error: "Valid email is required" });
    }

    // Fire the confirmed lead-source tag first. Global Control creates the
    // contact automatically when the email address is not already present.
    await fireGlobalControlTag(email, EBOOK_DOWNLOAD_TAG_ID);

    // Enrich the contact without blocking the ebook after the tag succeeds.
    try {
      await upsertGlobalControlContact({
        email,
        firstName,
        lastName,
        customFields: {
          source: "Ebook Download - Quantum Energy Beds",
          ebookRequested: new Date().toISOString(),
        },
      });
    } catch (contactError) {
      console.error("Ebook contact enrichment error (non-critical):", contactError);
    }

    return response.status(200).json({
      success: true,
      message: "Email captured successfully",
      downloadUrl: "/downloads/biowellness-energy-bed-guide.pdf",
    });
  } catch (error) {
    console.error("Ebook API error:", error);
    return response.status(500).json({ error: "Internal server error" });
  }
};
