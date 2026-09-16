import { NextRequest, NextResponse } from 'next/server';
import {
  fireGlobalControlTag,
  upsertGlobalControlContact,
} from '../../lib/globalControl';

const EBOOK_DOWNLOAD_TAG_ID = '6aa9ea034c80625f72502433';

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

    // Step 1: Create or update contact in Global Control
    await upsertGlobalControlContact({
      email,
      firstName,
      lastName,
      customFields: {
        source: 'Ebook Download - Quantum Energy Beds',
        ebookRequested: new Date().toISOString(),
      },
    });

    // Step 2: Fire the "Ebook Download" tag - ALWAYS fire for every submission
    try {
      await fireGlobalControlTag(email, EBOOK_DOWNLOAD_TAG_ID);
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
