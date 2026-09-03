import Link from "next/link";
import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Retail() {
  const businessTypes = [
    {
      icon: "🏢",
      title: "Wellness Centers",
      desc: "Add cutting-edge technology to attract new clients seeking advanced wellness solutions."
    },
    {
      icon: "💆",
      title: "Spas & Resorts",
      desc: "Elevate your guest experience with a premium offering that sets you apart."
    },
    {
      icon: "🏥",
      title: "Healthcare Providers",
      desc: "Integrate complementary therapy to support patient recovery and wellness."
    },
    {
      icon: "💪",
      title: "Gyms & Fitness",
      desc: "Help members recover faster and perform better with advanced recovery tech."
    },
    {
      icon: "🏠",
      title: "Home Users",
      desc: "Enjoy quantum wellness in the comfort of your own home, anytime."
    },
    {
      icon: "🚀",
      title: "Entrepreneurs",
      desc: "Start your own quantum wellness business with our comprehensive support."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navigation />

      {/* Hero with Background Image */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/showroom.png" 
            alt="Quantum Energy Beds Showroom" 
            fill 
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50/95 via-slate-50/85 to-slate-50/70"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-white/70 backdrop-blur-sm mb-6">
              <span className="text-sm text-slate-600">Business Opportunities</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-900">
              Partner With{" "}
              <span className="text-gradient">Quantum Energy Bed</span>
            </h1>
            <p className="text-xl text-slate-600">
              Bring revolutionary wellness technology to your business or community
            </p>
          </div>
        </div>
      </section>

      {/* Business Types */}
      <section className="py-20 border-y border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessTypes.map((biz, index) => (
              <div 
                key={index}
                className="group p-8 rounded-2xl border border-slate-200 bg-white hover:bg-blue-50/50 hover:border-blue-300 transition-all duration-500"
              >
                <div className="text-4xl mb-4">{biz.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-slate-900">{biz.title}</h3>
                <p className="text-slate-600">{biz.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-32 relative bg-slate-100/50">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-transparent to-cyan-50/50"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900">
                Why Partner With Us?
              </h2>
              <ul className="space-y-6">
                {[
                  "Competitive wholesale pricing",
                  "Comprehensive training & support",
                  "Marketing materials & guidance",
                  "Warranty & maintenance programs",
                  "Financing options available"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl p-12 text-center border border-blue-200">
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Ready to Learn More?</h3>
              <p className="text-slate-600 mb-8">
                Get detailed information about partnership opportunities
              </p>
              <Link 
                href="/contact/" 
                className="inline-block px-8 py-4 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/25"
              >
                Request Information
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
