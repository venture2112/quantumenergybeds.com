import { NextRequest, NextResponse } from 'next/server';

// Global Control API configuration
const GC_API_KEY = process.env.GC_API_KEY;
const GC_API_URL = 'https://api.globalcontrol.io/api/ai';

export async function POST(request: NextRequest) {
  try {
    const { email, firstName = '', lastName = '' } = await request.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    // Check if API key is configured
    if (!GC_API_KEY) {
      console.error('GC_API_KEY not configured');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Step 1: Create or update contact in Global Control
    const contactResponse = await fetch(`${GC_API_URL}/contacts`, {
      method: 'POST',
      headers: {
        'X-API-KEY': GC_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        firstName,
        lastName,
        customFields: {
          source: 'Ebook Download - Quantum Energy Beds',
          ebookRequested: new Date().toISOString(),
        },
      }),
    });

    if (!contactResponse.ok) {
      const errorData = await contactResponse.json().catch(() => ({}));
      console.error('Global Control contact creation failed:', errorData);
      
      // If contact already exists, try to update it
      if (contactResponse.status === 409) {
        // Search for existing contact
        const searchResponse = await fetch(
          `${GC_API_URL}/contacts?search=${encodeURIComponent(email)}`,
          {
            headers: {
              'X-API-KEY': GC_API_KEY,
            },
          }
        );
        
        if (searchResponse.ok) {
          const searchData = await searchResponse.json();
          // API returns { type: 'response', data: { contacts: [...] } }
          const contacts = searchData.data?.contacts || searchData.contacts || [];
          if (contacts.length > 0) {
            const contactId = contacts[0]._id || contacts[0].id;
            
            // Update existing contact
            const updateResponse = await fetch(`${GC_API_URL}/contacts/${contactId}`, {
              method: 'PUT',
              headers: {
                'X-API-KEY': GC_API_KEY,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                email,
                firstName: firstName || contacts[0].firstName,
                lastName: lastName || contacts[0].lastName,
                customFields: {
                  ...contacts[0].customFields,
                  source: 'Ebook Download - Quantum Energy Beds',
                  ebookRequested: new Date().toISOString(),
                },
              }),
            });
            
            if (!updateResponse.ok) {
              throw new Error('Failed to update existing contact');
            }
          }
        }
      } else {
        throw new Error('Failed to create contact in Global Control');
      }
    }

    // Step 2: Fire the "Ebook Download" tag - ALWAYS fire for every submission
    try {
      // Get all tags to find the ebook tag
      const tagsResponse = await fetch(`${GC_API_URL}/tags`, {
        headers: {
          'X-API-KEY': GC_API_KEY,
        },
      });

      if (tagsResponse.ok) {
        const tagsData = await tagsResponse.json();
        // API returns { type: 'response', data: [...] }
        const tags = tagsData.data || tagsData.tags || [];
        // Look for QEB tag specifically, fallback to ebook tags
        const ebookTag = tags.find(
          (tag: any) => tag.name === 'QEB' || tag.name.toLowerCase().includes('qeb')
        ) || tags.find(
          (tag: any) => tag.name.toLowerCase().includes('ebook') || tag.name.toLowerCase().includes('quantum energy beds ebook')
        );

        if (ebookTag) {
          // Fire the tag - API expects 'email', tag has _id not id
          const tagFireResponse = await fetch(`${GC_API_URL}/tags/fire-tag/${ebookTag._id || ebookTag.id}`, {
            method: 'POST',
            headers: {
              'X-API-KEY': GC_API_KEY,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
          });
          
          if (!tagFireResponse.ok) {
            console.error('Failed to fire tag:', await tagFireResponse.text());
          } else {
            console.log('Tag fired successfully for email:', email);
          }
        } else {
          console.error('QEB tag not found in Global Control');
        }
      }
    } catch (tagError) {
      // Non-critical error - log but don't fail the request
      console.error('Tag firing error (non-critical):', tagError);
    }

    return NextResponse.json({
      success: true,
      message: 'Email captured successfully',
      downloadUrl: '/downloads/biowellness-energy-bed-guide.pdf',
    });

  } catch (error) {
    console.error('Ebook API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
