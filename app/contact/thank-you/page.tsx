import Link from "next/link";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function ThankYou() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="bg-white py-[100px]">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-[42px] font-extrabold text-[#1e293b] mb-6">
            Thank You!
          </h1>
          <p className="text-xl font-semibold text-[#334155] mb-8">
            Your message has been sent successfully. We'll get back to you within 24 hours.
          </p>
          <Link 
            href="/" 
            className="inline-flex items-center px-[42px] py-3.5 bg-[#6B4EE6] text-white font-semibold text-base border-2 border-[#6B4EE6] transition-all duration-500 hover:bg-[#5a3fd1]"
          >
            Return to Home
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
