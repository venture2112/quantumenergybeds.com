import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function DMCA() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="bg-white py-[75px]">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-[42px] font-extrabold text-[#1e293b] mb-8">DMCA Notice</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg font-semibold text-[#334155] mb-6">
              Last updated: June 2, 2026
            </p>

            <h2 className="text-[28px] font-extrabold text-[#1e293b] mb-4 mt-8">Digital Millennium Copyright Act (DMCA) Policy</h2>
            <p className="text-base font-semibold text-[#334155] mb-6">
              Quantum Energy Beds respects the intellectual property rights of others and expects users of our website to do the same. In accordance with the Digital Millennium Copyright Act of 1998, we will respond promptly to claims of copyright infringement committed using our website.
            </p>

            <h2 className="text-[28px] font-extrabold text-[#1e293b] mb-4 mt-8">Reporting Copyright Infringement</h2>
            <p className="text-base font-semibold text-[#334155] mb-4">
              If you believe that your copyrighted work has been copied in a way that constitutes copyright infringement and is accessible on this site, please notify us by sending a written notice that includes the following information:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-base font-semibold text-[#334155] mb-6">
              <li>A physical or electronic signature of the copyright owner or a person authorized to act on their behalf.</li>
              <li>Identification of the copyrighted work claimed to have been infringed.</li>
              <li>Identification of the material that is claimed to be infringing and where it is located on the site.</li>
              <li>Your contact information, including address, telephone number, and email address.</li>
              <li>A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or law.</li>
              <li>A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the copyright owner.</li>
            </ol>

            <h2 className="text-[28px] font-extrabold text-[#1e293b] mb-4 mt-8">Contact Information</h2>
            <p className="text-base font-semibold text-[#334155] mb-6">
              DMCA notices should be sent to:<br /><br />
              Email: info@quantumenergybeds.com<br />
              Phone: 888-372-8632
            </p>

            <h2 className="text-[28px] font-extrabold text-[#1e293b] mb-4 mt-8">Counter-Notification</h2>
            <p className="text-base font-semibold text-[#334155] mb-6">
              If you believe that your content was removed or disabled by mistake or misidentification, you may file a counter-notification containing the following information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base font-semibold text-[#334155] mb-6">
              <li>Your physical or electronic signature</li>
              <li>Identification of the content that has been removed or disabled</li>
              <li>A statement under penalty of perjury that you have a good faith belief that the content was removed or disabled as a result of mistake or misidentification</li>
              <li>Your name, address, telephone number, and email address</li>
              <li>A statement that you consent to the jurisdiction of the federal court in your district</li>
            </ul>

            <h2 className="text-[28px] font-extrabold text-[#1e293b] mb-4 mt-8">Repeat Infringers</h2>
            <p className="text-base font-semibold text-[#334155] mb-6">
              It is our policy to terminate the accounts of repeat infringers in appropriate circumstances.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
