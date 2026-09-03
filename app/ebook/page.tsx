import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import type { Metadata } from "next";
import EbookForm from "./EbookForm";

export const metadata: Metadata = {
  title: "Free Ebook: The Bio Wellness Energy Bed Guide | 9 Healing Technologies Explained",
  description: "Download our free 41-page comprehensive guide to the Bio Wellness Energy Bed. Learn about bioresonance, PEMF therapy, vibrational healing, chromotherapy, far infrared, and 4 ready-to-use wellness protocols backed by 27 research citations.",
  keywords: ["Bio Wellness Energy Bed ebook", "free wellness guide", "PEMF therapy guide", "bioresonance therapy", "quantum healing PDF", "chromotherapy guide", "far infrared therapy", "vibrational healing"],
  openGraph: {
    title: "Free Ebook: The Complete Guide to Quantum Energy Wellness",
    description: "Download our free comprehensive guide to quantum energy wellness and healing technologies.",
    url: "https://www.quantumenergybeds.com/ebook",
    type: "website",
  },
};

export default function EbookPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-100/30 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-full">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                Free Download
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-slate-900">The Complete Guide to</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                  Quantum Energy Wellness
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                Discover the science behind the Bio Wellness Energy Bed's 9 integrated healing technologies. This comprehensive 41-page guide reveals how bioresonance, PEMF therapy, vibrational healing, chromotherapy, far infrared, and more work together to optimize your health naturally — backed by 27 peer-reviewed research citations from Harvard, Mayo Clinic, and leading wellness journals.
              </p>

              <div className="space-y-4">
                <h3 className="font-semibold text-slate-900">Inside this 41-page comprehensive guide:</h3>
                <ul className="space-y-3">
                  {[
                    "Bioresonance Therapy: How electromagnetic frequency analysis balances your body's energy",
                    "Vibrational Therapy: Mechanical frequencies for tissue stimulation and deep relaxation",
                    "PEMF Therapy: Cellular electromagnetic support backed by Harvard research",
                    "Chromotherapy: Color light frequencies for mood and emotional balance",
                    "Far Infrared Therapy: Deep tissue warming that penetrates 1.5-4 inches",
                    "Acoustic Resonance: Sound frequencies, binaural beats, and brainwave entrainment",
                    "Magnetic Field Therapy: Static and pulsed fields for circulation support",
                    "Thermal Therapy: Zone-controlled heat for muscle relaxation and recovery",
                    "Negative Ion Therapy: Fresh-air ionization for mood and air quality",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <h4 className="font-semibold text-blue-900 mb-3">Plus: 4 Ready-to-Use Wellness Protocols</h4>
                <ul className="space-y-2 text-slate-700">
                  <li>• <strong>Deep Relaxation Protocol</strong> — 30-45 min stress reduction with blue/violet light + theta frequencies</li>
                  <li>• <strong>Energy & Vitality Protocol</strong> — 20-30 min energy boost with red/orange light + PEMF</li>
                  <li>• <strong>Recovery Protocol</strong> — 40-60 min post-activity regeneration</li>
                  <li>• <strong>Sleep Preparation Protocol</strong> — 20-30 min bedtime routine for deeper sleep</li>
                </ul>
              </div>
            </div>

            {/* Right Form */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl opacity-20 blur-2xl" />
              <div className="relative bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-slate-100">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Get Your Free Copy</h2>
                  <p className="text-slate-600">Enter your email to download the complete guide</p>
                </div>

                <EbookForm />

                <p className="text-xs text-slate-500 text-center mt-6">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-slate-600 mb-8">Trusted by wellness professionals and health enthusiasts</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">2,500+</div>
              <div className="text-sm text-slate-500">Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">4.9/5</div>
              <div className="text-sm text-slate-500">Reader Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">41 Pages</div>
              <div className="text-sm text-slate-500">Of Expert Content</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">27</div>
              <div className="text-sm text-slate-500">Research Citations</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
