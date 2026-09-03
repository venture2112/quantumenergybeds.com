import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function CookiePrivacyPolicy() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="bg-white py-[75px]">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-[42px] font-extrabold text-[#1e293b] mb-8">Cookie Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg font-semibold text-[#334155] mb-6">
              Last updated: June 2, 2026
            </p>

            <h2 className="text-[28px] font-extrabold text-[#1e293b] mb-4 mt-8">What Are Cookies</h2>
            <p className="text-base font-semibold text-[#334155] mb-6">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.
            </p>

            <h2 className="text-[28px] font-extrabold text-[#1e293b] mb-4 mt-8">How We Use Cookies</h2>
            <p className="text-base font-semibold text-[#334155] mb-4">
              We use cookies for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base font-semibold text-[#334155] mb-6">
              <li><strong>Essential Cookies:</strong> Required for the website to function properly, such as maintaining your session.</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website by collecting anonymous information.</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences for a better browsing experience.</li>
              <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements and track their performance.</li>
            </ul>

            <h2 className="text-[28px] font-extrabold text-[#1e293b] mb-4 mt-8">Types of Cookies We Use</h2>
            <div className="space-y-4 mb-6">
              <div className="bg-[#F8F7FF] p-4 rounded-lg">
                <h3 className="text-lg font-extrabold text-[#1e293b] mb-2">Session Cookies</h3>
                <p className="text-base font-semibold text-[#334155]">
                  Temporary cookies that expire when you close your browser. They help us track your activity during a single session.
                </p>
              </div>
              <div className="bg-[#F8F7FF] p-4 rounded-lg">
                <h3 className="text-lg font-extrabold text-[#1e293b] mb-2">Persistent Cookies</h3>
                <p className="text-base font-semibold text-[#334155]">
                  Remain on your device for a set period or until you delete them. They help us recognize you on subsequent visits.
                </p>
              </div>
              <div className="bg-[#F8F7FF] p-4 rounded-lg">
                <h3 className="text-lg font-extrabold text-[#1e293b] mb-2">Third-Party Cookies</h3>
                <p className="text-base font-semibold text-[#334155]">
                  Set by our partners and service providers, such as analytics and advertising platforms.
                </p>
              </div>
            </div>

            <h2 className="text-[28px] font-extrabold text-[#1e293b] mb-4 mt-8">Managing Cookies</h2>
            <p className="text-base font-semibold text-[#334155] mb-6">
              Most web browsers allow you to control cookies through their settings. You can usually find these settings in the &quot;Options&quot; or &quot;Preferences&quot; menu of your browser. Please note that disabling certain cookies may affect the functionality of our website.
            </p>

            <h2 className="text-[28px] font-extrabold text-[#1e293b] mb-4 mt-8">Changes to This Policy</h2>
            <p className="text-base font-semibold text-[#334155] mb-6">
              We may update this Cookie Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
            </p>

            <h2 className="text-[28px] font-extrabold text-[#1e293b] mb-4 mt-8">Contact Us</h2>
            <p className="text-base font-semibold text-[#334155] mb-6">
              If you have any questions about our use of cookies, please contact us at info@quantumenergybeds.com.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
