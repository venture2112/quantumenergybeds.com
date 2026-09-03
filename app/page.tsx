import Link from "next/link";
import Image from "next/image";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quantum Energy Beds 2026 | #1 Multi-Modal Wellness Pod for Home & Business",
  description: "Experience the future of wellness with Quantum Energy Beds. 12-in-1 technology: red light therapy, PEMF, terahertz waves, far infrared heat & more. $14,900 with free shipping.",
  keywords: ["quantum energy beds", "quantum wellness pod", "red light therapy bed", "PEMF therapy device", "terahertz wave therapy", "far infrared heat therapy", "multi-modal wellness"],
  openGraph: {
    title: "Quantum Energy Beds 2026 | #1 Multi-Modal Wellness Pod",
    description: "12-in-1 healing technology: red light therapy, PEMF, terahertz waves & more. $14,900 with free shipping.",
    url: "https://www.quantumenergybeds.com",
    type: "website",
  },
  alternates: {
    canonical: "https://www.quantumenergybeds.com",
  },
};

export default function Home() {
  const testimonials = [
    {
      name: "Jennifer R",
      text: "As a yoga studio owner, adding the Quantum Energy Bed has been a game-changer for my business. My clients love the recovery benefits, and it's become a significant revenue stream. The installation was seamless and the support has been excellent."
    },
    {
      name: "Michael T",
      text: "I purchased the Wellness Pod for my home after researching recovery options. After years of desk work, my chronic back tension has significantly decreased. My whole family uses it now. Worth every penny."
    },
    {
      name: "Amanda K",
      text: "We added two Quantum Energy Beds to our spa menu six months ago. Our clients can't get enough of them - we had to create a booking system because demand was so high. The ROI has exceeded our expectations."
    },
    {
      name: "Robert L",
      text: "I'm a gym owner in my 60s and staying active is important to me and my members. Since adding the Wellness Pod to our recovery area, member retention has improved and we've attracted new clients specifically for this technology."
    },
    {
      name: "Sarah P",
      text: "Running a wellness center means offering cutting-edge services. The Quantum Energy Bed delivers exactly that. Our clients report better sleep, less stress, and faster recovery. It's become our most talked-about offering."
    },
    {
      name: "David M",
      text: "As a former athlete turned performance coach, I've tried every recovery modality out there. The Quantum Energy Bed delivers results that rival anything I've experienced. I recommend it to all my clients - both facilities and individuals."
    }
  ];

  const features = [
    {
      icon: "🔴",
      title: "Red Light Therapy",
      desc: "Stimulates collagen production and accelerates wound healing"
    },
    {
      icon: "🧲",
      title: "PEMF Therapy",
      desc: "Pulsed Electromagnetic Field therapy enhances cellular repair and reduces inflammation"
    },
    {
      icon: "〰️",
      title: "Terahertz Waves",
      desc: "Terahertz frequency waves stimulate cellular resonance and energy flow"
    },
    {
      icon: "🔵",
      title: "Blue Light Therapy",
      desc: "Antimicrobial properties for skin clarity and circadian rhythm support"
    },
    {
      icon: "⚛️",
      title: "Graphene Heating",
      desc: "Advanced thermal conductivity for uniform heat distribution"
    },
    {
      icon: "📳",
      title: "Vibrational Therapy",
      desc: "Specific frequencies stimulate cells and improve energy flow"
    },
    {
      icon: "⚡",
      title: "Negative Ions",
      desc: "Neutralize free radicals and enhance mood"
    },
    {
      icon: "🌈",
      title: "Chromotherapy",
      desc: "Color light therapy to balance energy and promote healing"
    },
    {
      icon: "🧭",
      title: "Gyromagnetic Therapy",
      desc: "Rotating magnetic fields stimulate cellular activity and enhance energy flow"
    },
    {
      icon: "🎵",
      title: "Frequency Therapy",
      desc: "528 Hz (love frequency), 432 Hz (nature's heartbeat) via Bluetooth for cellular harmony"
    },
    {
      icon: "💎",
      title: "Jade and Crystals",
      desc: "Deep-penetrating heat for relaxation and detoxification"
    },
    {
      icon: "🌡️",
      title: "Far Infrared Heat",
      desc: "Deep thermal heat that promotes circulation and detoxification"
    }
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navigation />

      {/* Hero Section - Asymmetric Modern Layout */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-100/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-full">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                Premium Wellness Equipment
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                <span className="text-slate-900">Relax &</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Recharge</span>
                <br />
                <span className="text-slate-600 text-4xl md:text-5xl lg:text-6xl font-light">with Quantum Energy Bed</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed">
                The Quantum Energy Bed combines 12 powerful modalities: Red Light Therapy, PEMF Therapy, Terahertz Waves, Blue Light Therapy, Graphene Heating, Vibrational Therapy, Negative Ions, Chromotherapy, Gyromagnetic Therapy, Frequency Therapy, Jade & Crystals, and Far Infrared Heat. Perfect for homes, spas, wellness centers, gyms, and athletic facilities.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/contact/" 
                  className="px-8 py-4 bg-blue-800 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all hover:scale-105 hover:shadow-xl"
                >
                  Contact Us
                </Link>
                <Link 
                  href="/quantum-bed-info/" 
                  className="px-8 py-4 border-2 border-slate-200 text-slate-700 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all"
                >
                  Explore Technology
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-slate-900">12</div>
                  <div className="text-sm text-slate-500">Modalities</div>
                </div>
                <div className="w-px h-12 bg-slate-200" />
                <div>
                  <div className="text-3xl font-bold text-slate-900">30+</div>
                  <div className="text-sm text-slate-500">Min Sessions</div>
                </div>
                <div className="w-px h-12 bg-slate-200" />
                <div>
                  <div className="text-3xl font-bold text-slate-900">100%</div>
                  <div className="text-sm text-slate-500">Natural</div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl opacity-20 blur-2xl" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image 
                    src="/showroom.png" 
                    alt="Quantum Energy Bed" 
                    width={600} 
                    height={700}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Premium Quality</div>
                    <div className="text-sm text-slate-500">Wellness Technology</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Quantum Wellness - Split Layout */}
      <section className="py-24 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-cyan-300 font-semibold tracking-wider uppercase text-sm">The Science</span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Quantum Technology for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200">Modern Wellness</span>
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                Quantum wellness is a revolutionary approach to health and well-being. It takes a holistic view of the body, mind and spirit in order to create balance and harmony within each individual.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                At its core, quantum wellness is based on the idea that all matter has an energy that can be manipulated through understanding how this energy works on a fundamental level.
              </p>
              <Link 
                href="/quantum-health/" 
                className="inline-flex items-center gap-2 text-cyan-300 font-semibold hover:text-cyan-200 transition-colors"
              >
                Learn more about the science
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl rotate-3 opacity-20" />
              <div className="relative rounded-3xl overflow-hidden">
                <Image 
                  src="/healing-hands.jpg" 
                  alt="Quantum Technology" 
                  width={600} 
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Steps */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">The Process</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-slate-900">
              How Does It <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Work</span>
            </h2>
            <p className="text-slate-600 text-lg">
              The Quantum Energy Bed unites multiple potent modalities to generate a perpetual quantum field and biophotons for ultimate wellness.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                step: "01", 
                title: "Lie Down & Relax", 
                desc: "The user lies down in the comfortable, ergonomically designed bed pod as the session begins."
              },
              { 
                step: "02", 
                title: "Experience the Modalities", 
                desc: "Twelve powerful technologies work synergistically to create a healing quantum field around the body."
              },
              { 
                step: "03", 
                title: "Feel the Transformation", 
                desc: "Experience deep relaxation, reduced pain, improved sleep, and enhanced overall wellness."
              }
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-px bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
                <div className="relative bg-slate-50 rounded-2xl p-8 h-full border border-slate-100 group-hover:border-transparent transition-colors">
                  <div className="text-6xl font-bold text-slate-200 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ten Modalities - Bento Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Technologies</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-slate-900">
              Twelve Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Modalities</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-200"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Everyone Needs It - Full Width */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl transform rotate-3" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image 
                    src="/natural-health.jpg" 
                    alt="Why Everyone Needs Quantum Energy Bed" 
                    width={600} 
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">The Solution</span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900">
                Perfect For <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Any Setting</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                The Wellness Pod is ideal for homes, spas, wellness centers, gyms, athletic facilities, and healthcare practices. It provides an innovative solution to the challenge of modern lifestyles which prevent people from accessing essential resources.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                It combines heat, infrared, negative ion, and specialized magnetic energy to recreate natural resources and help the body reach total-body wellness and cellular repair.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                {["Homes", "Spas", "Wellness Centers", "Gyms", "Athletic Facilities"].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Carousel Style */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-800 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-cyan-300 font-semibold tracking-wider uppercase text-sm">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200">Customers Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-blue-100 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="font-semibold">{testimonial.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Modern Form */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-6">
              <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Get In Touch</span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900">
                Ready to Add Quantum Wellness to Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Business or Home</span>?
              </h2>
              <p className="text-slate-600 text-lg">
                Whether you're a wellness center, gym, spa, or homeowner, we'd love to discuss how the Quantum Energy Bed can work for you. Request a quote or ask questions - we're here to help.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Call Us</div>
                    <div className="font-semibold text-slate-900">888-372-8632</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Email Us</div>
                    <div className="font-semibold text-slate-900">info@quantumenergybeds.com</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 md:p-10">
              <form
                action="https://formsubmit.co/info@quantumenergybeds.com"
                method="POST"
                className="space-y-6"
              >
                <input type="hidden" name="_cc" value="hello@quanivo.com" />
                <input type="hidden" name="_subject" value="New Homepage Inquiry - Quantum Energy Beds" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="https://www.quantumenergybeds.com/contact/thank-you/" />
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all bg-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all bg-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all bg-white"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-slate-700 mb-2">
                    I'm Interested In
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all bg-white"
                  >
                    <option value="">Select an option...</option>
                    <option value="home">Home Use</option>
                    <option value="spa">Spa / Wellness Center</option>
                    <option value="gym">Gym / Fitness Center</option>
                    <option value="medical">Medical / Healthcare</option>
                    <option value="other">Other Business</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none bg-white"
                    placeholder="Tell us about your needs..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-blue-800 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all hover:shadow-lg"
                >
                  Request Information
                </button>
                <div className="text-center pt-2">
                  <span className="text-slate-500 text-sm">or</span>
                </div>
                <Link
                  href="/ebook/"
                  className="w-full px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all text-center block"
                >
                  📖 Download Free Ebook First
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Ebook CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-white text-sm font-semibold mb-4">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
                </svg>
                FREE 41-PAGE GUIDE
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Get The Complete Bio Wellness Energy Bed Guide
              </h2>
              <p className="text-white/90 text-lg max-w-2xl">
                Discover all 9 healing technologies, 4 ready-to-use wellness protocols, and 27 research citations from Harvard & Mayo Clinic. FREE instant download.
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

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Bring Quantum Wellness to Your Facility or Home
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their wellness offerings or personal health with our technology.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contact/" 
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-slate-100 transition-all hover:scale-105"
            >
              Contact Us
            </Link>
            <Link 
              href="/retail/" 
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
            >
              Business Opportunities
            </Link>
            <Link 
              href="/ebook/" 
              className="px-8 py-4 bg-amber-400 text-blue-900 font-bold rounded-xl hover:bg-amber-300 transition-all hover:scale-105 shadow-lg"
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
