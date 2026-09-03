import Link from "next/link";
import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quantum Energy Bed Review 2026 | 12-in-1 Healing Technology Explained",
  description: "In-depth review of Quantum Energy Bed's 12 modalities: red light therapy, PEMF, terahertz waves, far infrared heat & more. $14,900 with free shipping. See why it's the top-rated wellness pod.",
  keywords: ["quantum energy bed review", "quantum bed features", "red light therapy bed", "PEMF therapy device", "terahertz wave therapy", "far infrared heat therapy", "wellness pod comparison"],
  openGraph: {
    title: "Quantum Energy Bed Review 2026 | 12-in-1 Healing Technology",
    description: "Complete breakdown of the 12 modalities that make this the top-rated wellness pod.",
    url: "https://www.quantumenergybeds.com/quantum-bed-info",
    type: "article",
  },
};

export default function QuantumBedInfo() {
  const features = [
    {
      title: "Red Light Therapy",
      description: "Red light (620-700 nm) penetrates shallower layers, stimulating collagen production, improving skin health, accelerating wound healing, and boosting mitochondrial energy production (ATP)."
    },
    {
      title: "PEMF Therapy",
      description: "Pulsed Electromagnetic Field therapy uses low-frequency electromagnetic pulses to enhance cellular repair, reduce inflammation, improve circulation, and support the body's natural healing processes."
    },
    {
      title: "Terahertz Waves",
      description: "Terahertz frequency waves stimulate cellular resonance and energy flow, promoting cellular regeneration, enhancing metabolic function, and supporting overall vitality at the quantum level."
    },
    {
      title: "Blue Light Therapy",
      description: "Blue light (400-500 nm) affects the skin's surface with antimicrobial properties that combat acne-causing bacteria, promote skin clarity, and regulate mood and sleep by influencing circadian rhythms."
    },
    {
      title: "Graphene Heating",
      description: "Uses graphene's exceptional thermal conductivity to generate efficient, uniform far-infrared heat that enhances circulation, reduces inflammation, relaxes muscles, and promotes detoxification."
    },
    {
      title: "Vibrational Therapy",
      description: "Applies specific frequencies to stimulate the body's cells and tissues, enhancing cellular resonance, improving energy flow, reducing tension, alleviating pain, and supporting emotional balance."
    },
    {
      title: "Negative Ions",
      description: "Negatively charged particles that promote healing by neutralizing free radicals, improving air quality, enhancing mood, reducing stress, and boosting energy by increasing serotonin levels."
    },
    {
      title: "Chromotherapy",
      description: "Uses specific colors of light to balance the body's energy and promote healing. Each color's wavelength influences physiological and emotional responses, enhancing mood and reducing stress."
    },
    {
      title: "Gyromagnetic Therapy",
      description: "Uses rotating magnetic fields to stimulate cellular activity and enhance healing, improving circulation, reducing inflammation, and promoting tissue repair by aligning cellular processes."
    },
    {
      title: "Frequency Therapy",
      description: "Immerse yourself in pure 528 Hz (the 'love' or 'miracle' frequency), 432 Hz (nature's heartbeat) or frequency of your choice via premium Bluetooth speakers to lower cortisol, boost calm and focus, and support cellular harmony."
    },
    {
      title: "Jade and Crystals",
      description: "The jade and crystal mat delivers deep-penetrating far-infrared heat that eases muscle tension, reduces pain and inflammation, boosts circulation, and promotes profound relaxation and detoxification."
    },
    {
      title: "Far Infrared Heat",
      description: "Generates far infrared thermal heat that unlocks cells and penetrates deep into the mitochondria, promoting blood circulation, detoxification, lymphatic cleansing, pain relief, and deep relaxation."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Quantum Energy Bed",
            "image": "https://www.quantumenergybeds.com/quantum-energy-bed.jpg",
            "description": "Advanced multi-modal wellness pod combining 12 therapeutic technologies including red light therapy, PEMF, terahertz waves, far infrared heat, and more for whole-body healing.",
            "brand": {
              "@type": "Brand",
              "name": "Quantum Energy Beds"
            },
            "offers": {
              "@type": "Offer",
              "url": "https://www.quantumenergybeds.com/quantum-bed-info",
              "price": "14900.00",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "shippingDetails": {
                "@type": "OfferShippingDetails",
                "shippingRate": {
                  "@type": "MonetaryAmount",
                  "value": "0",
                  "currency": "USD"
                },
                "shippingDestination": {
                  "@type": "DefinedRegion",
                  "addressCountry": "US"
                }
              }
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "156"
            }
          }),
        }}
      />
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0">
          <Image 
            src="/quantum-healing.jpg" 
            alt="Quantum Healing Technology" 
            fill 
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50/95 via-slate-50/80 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-white/70 backdrop-blur-sm mb-8">
              <span className="text-sm text-slate-600">Technology</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-900">
              Quantum Energy Bed{" "}
              <span className="text-gradient">Technology</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Discover the science behind our revolutionary wellness system that combines 
              twelve powerful modalities into one transformative experience. Use one modality 
              at a time, any combination, or activate all twelve simultaneously for maximum benefit.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 border-y border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group p-8 rounded-2xl border border-slate-200 bg-white hover:bg-blue-50/50 hover:border-blue-300 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl mb-4 shadow-lg shadow-blue-500/25">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customizable Experience */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Flexibility</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-slate-900">
              Your Session, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Your Way</span>
            </h2>
            <p className="text-slate-600 text-lg">
              Every body is different. Every need is unique. The Quantum Energy Bed adapts to you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">1️⃣</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Single Modality</h3>
              <p className="text-slate-600">
                Focus on one specific therapy. Perfect for targeted relief — PEMF for recovery, 
                Red Light for skin, or Frequency Therapy for deep relaxation.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🔀</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Custom Combination</h3>
              <p className="text-slate-600">
                Mix and match modalities to create your perfect session. Combine Terahertz Waves 
                with Vibrational Therapy, or pair Chromotherapy with Negative Ions.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">All Twelve at Once</h3>
              <p className="text-slate-600">
                Activate every modality simultaneously for the ultimate quantum wellness experience. 
                Maximum synergy, maximum results, maximum transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 relative bg-slate-100/50">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-transparent to-cyan-50/50"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
                How It <span className="text-gradient">Works</span>
              </h2>
              <p className="text-slate-600 text-lg mb-8">
                When you lie on the Quantum Energy Bed, you're enveloped in a synergistic 
                field of wellness energies that work at the cellular level.
              </p>
              <ul className="space-y-4">
                {[
                  "Stimulates ATP production for increased cellular energy",
                  "Enhances blood flow and nutrient delivery to tissues",
                  "Supports the body's natural detoxification pathways",
                  "Reduces oxidative stress and inflammation",
                  "Promotes deep relaxation and stress relief"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl border border-slate-200 bg-white flex items-center justify-center shadow-lg overflow-hidden">
                <Image 
                  src="/showroom.png" 
                  alt="Quantum Energy Bed" 
                  width={500} 
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Applications</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-slate-900">
              Who Benefits from <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Quantum Wellness</span>
            </h2>
            <p className="text-slate-600 text-lg">
              From professional athletes to wellness enthusiasts, the Quantum Energy Bed serves diverse needs across multiple settings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-lg font-bold mb-2 text-slate-900">Home Users</h3>
              <p className="text-slate-600 text-sm">Personal wellness, recovery, stress relief, and family health optimization.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all">
              <div className="text-4xl mb-4">💆</div>
              <h3 className="text-lg font-bold mb-2 text-slate-900">Spas & Wellness Centers</h3>
              <p className="text-slate-600 text-sm">Premium service offering, client retention, and new revenue streams.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-lg font-bold mb-2 text-slate-900">Gyms & Fitness Centers</h3>
              <p className="text-slate-600 text-sm">Post-workout recovery, member retention, and competitive differentiation.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-lg font-bold mb-2 text-slate-900">Medical & Healthcare</h3>
              <p className="text-slate-600 text-sm">Complementary therapy, patient wellness programs, and recovery support.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all">
              <div className="text-4xl mb-4">🧘</div>
              <h3 className="text-lg font-bold mb-2 text-slate-900">Yoga Studios</h3>
              <p className="text-slate-600 text-sm">Enhance meditation, deepen relaxation, and attract wellness-focused clients.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all">
              <div className="text-4xl mb-4">🏨</div>
              <h3 className="text-lg font-bold mb-2 text-slate-900">Hotels & Resorts</h3>
              <p className="text-slate-600 text-sm">Luxury amenity, guest satisfaction, and premium upsell opportunity.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all">
              <div className="text-4xl mb-4">🏃</div>
              <h3 className="text-lg font-bold mb-2 text-slate-900">Sports Teams</h3>
              <p className="text-slate-600 text-sm">Athletic recovery, injury prevention, and performance optimization.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all">
              <div className="text-4xl mb-4">👔</div>
              <h3 className="text-lg font-bold mb-2 text-slate-900">Corporate Wellness</h3>
              <p className="text-slate-600 text-sm">Employee benefits, stress reduction, and productivity enhancement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ebook CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-white text-sm font-semibold mb-4">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
                </svg>
                FREE DOWNLOAD
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Want to Learn More About These Technologies?
              </h2>
              <p className="text-white/90 text-lg max-w-2xl">
                Get our free 41-page guide with detailed explanations of all 12 modalities, research citations, and wellness protocols.
              </p>
            </div>
            <Link 
              href="/ebook/" 
              className="flex-shrink-0 px-8 py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-slate-100 transition-all hover:scale-105 shadow-lg"
            >
              Download Free Ebook →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-slate-200 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
            Bring Quantum Wellness to Your Business or Home
          </h2>
          <p className="text-slate-600 text-lg mb-10">
            Request a quote and discover how the Quantum Energy Bed can transform your wellness offerings or personal health.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contact/" 
              className="inline-block px-8 py-4 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/25"
            >
              Get a Quote
            </Link>
            <Link 
              href="/ebook/" 
              className="inline-block px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-full hover:from-amber-600 hover:to-orange-600 transition-colors shadow-lg"
            >
              📖 Get Free Ebook
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
