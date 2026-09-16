const GC_API_URL = "https://api.globalcontrol.io/api/ai";

function getApiKey() {
  const apiKey = process.env.GC_API_KEY;

  if (!apiKey) {
    throw new Error("GC_API_KEY not configured");
  }

  return apiKey;
}

async function upsertGlobalControlContact({
  email,
  firstName = "",
  lastName = "",
  customFields = {},
}) {
  const apiKey = getApiKey();
  const headers = {
    "X-API-KEY": apiKey,
    "Content-Type": "application/json",
  };

  const createResponse = await fetch(`${GC_API_URL}/contacts`, {
    method: "POST",
    headers,
    body: JSON.stringify({ email, firstName, lastName, customFields }),
  });

  if (createResponse.ok) {
    return;
  }

  if (createResponse.status !== 409) {
    throw new Error(`Global Control contact creation failed (${createResponse.status})`);
  }

  const searchResponse = await fetch(
    `${GC_API_URL}/contacts?search=${encodeURIComponent(email)}`,
    { headers: { "X-API-KEY": apiKey } },
  );

  if (!searchResponse.ok) {
    throw new Error(`Global Control contact search failed (${searchResponse.status})`);
  }

  const searchData = await searchResponse.json();
  const contacts = searchData.data?.contacts || searchData.contacts || [];
  const contact = contacts[0];

  if (!contact) {
    throw new Error("Existing Global Control contact could not be found");
  }

  const contactId = contact._id || contact.id;
  const updateResponse = await fetch(`${GC_API_URL}/contacts/${contactId}`, {
    method: "PUT",
    headers,
    body: JSON.stringify({
      email,
      firstName: firstName || contact.firstName || "",
      lastName: lastName || contact.lastName || "",
      customFields: {
        ...contact.customFields,
        ...customFields,
      },
    }),
  });

  if (!updateResponse.ok) {
    throw new Error(`Global Control contact update failed (${updateResponse.status})`);
  }
}

async function fireGlobalControlTag(email, tagId) {
  const apiKey = getApiKey();
  const response = await fetch(`${GC_API_URL}/tags/fire-tag/${tagId}`, {
    method: "POST",
    headers: {
      "X-API-KEY": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    throw new Error(`Global Control tag firing failed (${response.status})`);
  }
}

module.exports = {
  fireGlobalControlTag,
  upsertGlobalControlContact,
};
