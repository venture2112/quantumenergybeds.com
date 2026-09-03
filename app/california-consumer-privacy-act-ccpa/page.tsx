import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function CCPA() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="bg-white py-[75px]">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-[42px] font-extrabold text-[#1e293b] mb-8">California Consumer Privacy Act (CCPA)</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg font-semibold text-[#334155] mb-6">
              Last updated: June 2, 2026
            </p>

            <h2 className="text-[28px] font-extrabold text-[#1e293b] mb-4 mt-8">Your California Privacy Rights</h2>
            <p className="text-base font-semibold text-[#334155] mb-6">
              The California Consumer Privacy Act (CCPA) provides California residents with specific rights regarding their personal information. This section describes your CCPA rights and explains how to exercise those rights.
            </p>

            <h2 className="text-[28px] font-extrabold text-[#1e293b] mb-4 mt-8">Right to Know</h2>
            <p className="text-base font-semibold text-[#334155] mb-6">
              You have the right to request that we disclose certain information to you about our collection and use of your personal information over the past 12 months. Once we receive and confirm your verifiable consumer request, we will disclose to you:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base font-semibold text-[#334155] mb-6">
              <li>The categories of personal information we collected about you</li>
              <li>The categories of sources for the personal information we collected about you</li>
              <li>Our business or commercial purpose for collecting that personal information</li>
              <li>The categories of third parties with whom we share that personal information</li>
              <li>The specific pieces of personal information we collected about you</li>
            </ul>

            <h2 className="text-[28px] font-extrabold text-[#1e293b] mb-4 mt-8">Right to Delete</h2>
            <p className="text-base font-semibold text-[#334155] mb-6">
              You have the right to request that we delete any of your personal information that we collected from you and retained, subject to certain exceptions. Once we receive and confirm your verifiable consumer request, we will delete your personal information from our records, unless an exception applies.
            </p>

            <h2 className="text-[28px] font-extrabold text-[#1e293b] mb-4 mt-8">Right to Opt-Out</h2>
            <p className="text-base font-semibold text-[#334155] mb-6">
              You have the right to opt-out of the sale of your personal information. However, Quantum Energy Beds does not sell personal information to third parties.
            </p>

            <h2 className="text-[28px] font-extrabold text-[#1e293b] mb-4 mt-8">Right to Non-Discrimination</h2>
            <p className="text-base font-semibold text-[#334155] mb-6">
              We will not discriminate against you for exercising any of your CCPA rights. Unless permitted by the CCPA, we will not:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base font-semibold text-[#334155] mb-6">
              <li>Deny you goods or services</li>
              <li>Charge you different prices or rates for goods or services</li>
              <li>Provide you a different level or quality of goods or services</li>
              <li>Suggest that you may receive a different price or rate for goods or services</li>
            </ul>

            <h2 className="text-[28px] font-extrabold text-[#1e293b] mb-4 mt-8">Exercising Your Rights</h2>
            <p className="text-base font-semibold text-[#334155] mb-6">
              To exercise the rights described above, please submit a verifiable consumer request to us by:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base font-semibold text-[#334155] mb-6">
              <li>Emailing us at info@quantumenergybeds.com</li>
              <li>Calling us at 888-372-8632</li>
            </ul>
            <p className="text-base font-semibold text-[#334155] mb-6">
              Only you, or someone legally authorized to act on your behalf, may make a verifiable consumer request related to your personal information.
            </p>

            <h2 className="text-[28px] font-extrabold text-[#1e293b] mb-4 mt-8">Response Timing</h2>
            <p className="text-base font-semibold text-[#334155] mb-6">
              We endeavor to respond to a verifiable consumer request within 45 days of its receipt. If we require more time, we will inform you of the reason and extension period in writing.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
