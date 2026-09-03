import Link from "next/link";
import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ROICalculator from "./ROICalculator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quantum Energy Beds for Business | Spa Revenue & ROI Calculator 2026",
  description: "Add Quantum Energy Beds to your spa, wellness center, or gym. Generate $50-100 per session. See ROI calculations, pricing, and how businesses are growing revenue with this 12-in-1 healing pod.",
  keywords: ["quantum energy beds business", "spa revenue ideas", "wellness center equipment", "quantum bed ROI", "gym recovery equipment", "wellness pod business"],
  openGraph: {
    title: "Quantum Energy Beds for Business | Spa Revenue & ROI Calculator",
    description: "Generate $50-100 per session. See how spas and wellness centers are growing revenue.",
    url: "https://www.quantumenergybeds.com/businesses",
    type: "website",
  },
};

export default function Businesses() {
  const businessTypes = [
    {
      icon: "🏢",
      title: "Wellness Centers",
      desc: "Differentiate your center with cutting-edge quantum wellness technology that attracts high-value clients seeking advanced healing solutions."
    },
    {
      icon: "💆",
      title: "Spas & Resorts",
      desc: "Elevate your guest experience with a premium, exclusive offering that commands premium pricing and creates unforgettable wellness journeys."
    },
    {
      icon: "🏥",
      title: "Healthcare Providers",
      desc: "Integrate complementary quantum therapy to support patient recovery, pain management, and overall wellness alongside traditional treatments."
    },
    {
      icon: "💪",
      title: "Gyms & Fitness Centers",
      desc: "Help members recover faster, reduce soreness, and optimize performance with advanced recovery technology that keeps them coming back."
    },
    {
      icon: "🧘",
      title: "Yoga & Meditation Studios",
      desc: "Deepen your clients' practice by combining quantum energy with mindfulness for enhanced relaxation and spiritual connection."
    },
    {
      icon: "🏨",
      title: "Hotels & Hospitality",
      desc: "Offer guests a unique wellness amenity that sets your property apart and drives positive reviews and repeat bookings."
    }
  ];

  const benefits = [
    {
      title: "Revenue Growth",
      desc: "Add a high-margin service that generates $3,000-$15,000+ monthly per unit with minimal ongoing costs.",
      icon: "📈"
    },
    {
      title: "Client Retention",
      desc: "Quantum wellness creates loyal customers who return regularly for sessions, increasing lifetime value.",
      icon: "🔄"
    },
    {
      title: "Competitive Edge",
      desc: "Stand out from competitors with technology that 99% of wellness businesses don't yet offer.",
      icon: "🏆"
    },
    {
      title: "Easy Integration",
      desc: "Plug-and-play setup with minimal space requirements and no special electrical work needed.",
      icon: "⚡"
    }
  ];

  const partnershipFeatures = [
    {
      title: "Simple Setup",
      desc: "Plug-and-play operation with intuitive controls. No complex training required—your team will be up and running in minutes."
    },
    {
      title: "Ongoing Support",
      desc: "Direct access to our team for questions, troubleshooting, and guidance whenever you need it."
    },
    {
      title: "Financing Options",
      desc: "Multiple financing solutions available to make the investment manageable for any business size."
    },
    {
      title: "Warranty & Service",
      desc: "1-year comprehensive warranty with extended service plans available for peace of mind."
    },
    {
      title: "Delivery Included",
      desc: "Free delivery to your door. Optional white glove service available for setup assistance."
    },
    {
      title: "Business Guidance",
      desc: "Tips on pricing strategies, package creation, and maximizing ROI from your quantum wellness investment."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/showroom.png" 
            alt="Quantum Energy Beds for Business" 
            fill 
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50/95 via-slate-50/85 to-slate-50/70"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-full mb-6">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                Business Partnership Program
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-slate-900">
                Transform Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Business</span>
              </h1>
              <p className="text-xl text-slate-700 mb-8 leading-relaxed">
                Add quantum wellness technology to your spa, gym, wellness center, or healthcare practice. 
                Attract new clients, increase revenue, and differentiate your business with cutting-edge healing technology.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/contact/" 
                  className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all hover:scale-105 shadow-lg shadow-blue-600/25"
                >
                  Request Business Info
                </Link>
                <Link 
                  href="/wellness-pod-products/" 
                  className="px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all bg-white/80"
                >
                  View Products
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl opacity-20 blur-2xl"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-slate-100">
                  <h3 className="text-xl font-bold mb-6 text-slate-900 text-center">Revenue Potential</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-50 rounded-xl p-4 text-center">
                      <p className="text-2xl font-bold text-blue-600">$75-150</p>
                      <p className="text-xs text-slate-600">Per Session</p>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-4 text-center">
                      <p className="text-2xl font-bold text-blue-600">20-40</p>
                      <p className="text-xs text-slate-600">Sessions/Month</p>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-4 text-center">
                      <p className="text-2xl font-bold text-blue-600">$3K-15K</p>
                      <p className="text-xs text-slate-600">Monthly Revenue</p>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-4 text-center">
                      <p className="text-2xl font-bold text-blue-600">90%+</p>
                      <p className="text-xs text-slate-600">Client Satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ROICalculator />

      {/* Business Types */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Who We Serve</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-slate-900">
              Perfect For Your Business
            </h2>
            <p className="text-slate-600 text-lg">
              Quantum wellness technology enhances a wide range of businesses, from luxury spas to medical practices.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessTypes.map((biz, index) => (
              <div 
                key={index}
                className="group p-8 rounded-2xl border border-slate-200 bg-white hover:bg-blue-50/50 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{biz.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{biz.title}</h3>
                <p className="text-slate-600 leading-relaxed">{biz.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-cyan-300 font-semibold tracking-wider uppercase text-sm">Business Benefits</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Why Add Quantum Wellness?
            </h2>
            <p className="text-blue-100 text-lg">
              Quantum energy technology delivers measurable business results alongside transformative client outcomes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-blue-100 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Partnership Program</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-slate-900">
              Everything You Need to Succeed
            </h2>
            <p className="text-slate-600 text-lg">
              We provide support to ensure your quantum wellness offering thrives from day one.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnershipFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-bold mb-3 text-slate-900">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Getting Started Is Easy
            </h2>
            <p className="text-blue-100 text-lg">
              From initial inquiry to first client session, we're here to help.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Consultation", desc: "Discuss your business needs and goals" },
              { step: "2", title: "Selection", desc: "Choose the right product for your space" },
              { step: "3", title: "Delivery", desc: "Free delivery to your door (white glove optional)" },
              { step: "4", title: "Launch", desc: "Plug in and start offering quantum wellness" }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-blue-100 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            Ready to Transform Your Business?
          </h2>
          <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto">
            Join the growing network of wellness businesses offering quantum energy technology. 
            Contact us today to discuss how we can help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contact/" 
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all hover:scale-105 shadow-lg shadow-blue-600/25"
            >
              Schedule a Consultation
            </Link>
            <Link 
              href="/financing/" 
              className="px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all"
            >
              Explore Financing
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
