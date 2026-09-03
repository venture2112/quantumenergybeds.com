import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="bg-white py-[75px]">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-[42px] font-extrabold text-[#1e293b] mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg font-semibold text-[#334155] mb-6">
              Last updated: June 2, 2026
            </p>

            <h2 className="text-[28px] font-extrabold text-[#1e293b] mb-4 mt-8">Introduction</h2>
            <p className="text-base font-semibold text-[#334155] mb-6">
              Quantum Energy Beds (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="text-[28px] font-extrabold text-[#1e293b] mb-4 mt-8">Information We Collect</h2>
            <p className="text-base font-semibold text-[#334155] mb-4">
              We may collect the following types of information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base font-semibold text-[#334155] mb-6">
              <li><strong>Personal Information:</strong> Name, email address, phone number, and mailing address when you contact us or book a session.</li>
              <li><strong>Health Information:</strong> Basic health information you provide to ensure our services are safe for you.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, and pages visited.</li>
              <li><strong>Cookies:</strong> We use cookies to enhance your browsing experience and analyze website traffic.</li>
            </ul>

            <h2 className="text-[28px] font-extrabold text-[#1e293b] mb-4 mt-8">How We Use Your Information</h2>
            <p className="text-base font-semibold text-[#334155] mb-4">
              We use your information to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base font-semibold text-[#334155] mb-6">
              <li>Provide and maintain our services</li>
              <li>Process your bookings and payments</li>
              <li>Communicate with you about appointments, promotions, and updates</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-[28px] font-extrabold text-[#1e293b] mb-4 mt-8">Information Sharing</h2>
            <p className="text-base font-semibold text-[#334155] mb-6">
              We do not sell or rent your personal information to third parties. We may share your information with service providers who assist us in operating our business, or when required by law.
            </p>

            <h2 className="text-[28px] font-extrabold text-[#1e293b] mb-4 mt-8">Your Rights</h2>
            <p className="text-base font-semibold text-[#334155] mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base font-semibold text-[#334155] mb-6">
              <li>Access your personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
            </ul>

            <h2 className="text-[28px] font-extrabold text-[#1e293b] mb-4 mt-8">Contact Us</h2>
            <p className="text-base font-semibold text-[#334155] mb-6">
              If you have any questions about this Privacy Policy, please contact us at info@quantumenergybeds.com or call 888-372-8632.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
