import Link from "next/link";
import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function QuantumHealth() {
  const benefits = [
    {
      icon: "⚡",
      title: "Cellular Energy Boost",
      desc: "Stimulates ATP production at the mitochondrial level for natural energy"
    },
    {
      icon: "🛡️",
      title: "Immune Support",
      desc: "Enhances immune cell function and reduces systemic inflammation"
    },
    {
      icon: "😴",
      title: "Deeper Sleep",
      desc: "Regulates circadian rhythms and promotes restorative rest"
    },
    {
      icon: "🧠",
      title: "Mental Clarity",
      desc: "Improves focus, reduces brain fog, and supports cognitive function"
    },
    {
      icon: "💪",
      title: "Faster Recovery",
      desc: "Accelerates muscle repair and reduces post-workout soreness"
    },
    {
      icon: "✨",
      title: "Stress Relief",
      desc: "Calms the nervous system and promotes parasympathetic response"
    }
  ];

  const sciencePoints = [
    {
      title: "Biophoton Communication",
      desc: "Every cell emits biophotons—light particles that facilitate intercellular communication. Research shows healthy cells emit coherent light, while damaged cells emit chaotic light. Quantum wellness helps restore cellular coherence.",
      stat: "100K+",
      statLabel: "Biophoton emissions per cell/sec"
    },
    {
      title: "Cellular Resonance",
      desc: "The human body has natural frequencies. When these frequencies are disrupted by stress, toxins, or EMFs, health declines. Quantum technology helps restore optimal cellular vibration and resonance.",
      stat: "7.83Hz",
      statLabel: "Earth's natural frequency (Schumann)"
    },
    {
      title: "Quantum Coherence",
      desc: "Quantum physics shows that particles can exist in multiple states simultaneously. The body maintains health through quantum coherence—organized energy states. Disruption leads to disease; restoration leads to wellness.",
      stat: "37.2T",
      statLabel: "Cells working in harmony"
    }
  ];

  const comparisons = [
    { traditional: "Treats symptoms", quantum: "Addresses root energy imbalances" },
    { traditional: "Chemical interventions", quantum: "Natural energy restoration" },
    { traditional: "Isolated body parts", quantum: "Whole-body coherence" },
    { traditional: "Reactive care", quantum: "Proactive wellness optimization" },
    { traditional: "External dependency", quantum: "Activates self-wellness" }
  ];

  const faqs = [
    {
      q: "Is quantum wellness scientifically proven?",
      a: "Yes. Quantum biology is an established field with decades of research. Studies on PEMF therapy, red light therapy, and biophoton communication are published in peer-reviewed journals. The technologies in our Wellness Pod are backed by clinical research."
    },
    {
      q: "How is this different from regular massage or sauna?",
      a: "Traditional wellness treats the physical body. Quantum wellness works at the energetic and cellular level—restoring biophoton coherence, optimizing cellular frequencies, and creating a quantum field that supports deep healing. It's complementary to traditional methods but addresses wellness at a more fundamental level."
    },
    {
      q: "How soon will I feel results?",
      a: "Many users report feeling relaxed and energized after their first session. Deeper benefits like improved sleep, reduced inflammation, and enhanced recovery typically manifest within 2-4 weeks of regular use."
    },
    {
      q: "Is it safe for everyone?",
      a: "The Quantum Energy Bed uses natural, non-invasive technologies that are generally safe for most people. However, those with pacemakers, pregnancy, or specific medical conditions should consult their healthcare provider first."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/natural-health.jpg" 
            alt="Natural Health and Wellness" 
            fill 
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/80"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-full mb-6">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                Science-Backed Wellness
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-slate-900">
                Why Quantum Health Is the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Future of Wellness</span>
              </h1>
              <p className="text-xl text-slate-700 mb-8 leading-relaxed">
                Your body isn't just chemistry—it's energy. Quantum health taps into the 
                fundamental energy systems that regulate every cell, restoring balance 
                at the deepest level for transformative results.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/quantum-bed-info/" 
                  className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all hover:scale-105 shadow-lg shadow-blue-600/25"
                >
                  Explore the Technology
                </Link>
                <Link 
                  href="/contact/" 
                  className="px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all bg-white/80"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl opacity-20 blur-2xl" />
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-slate-100">
                  <div className="space-y-6">
                    {benefits.slice(0, 4).map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <div className="text-3xl">{benefit.icon}</div>
                        <div>
                          <h4 className="font-semibold text-slate-900">{benefit.title}</h4>
                          <p className="text-sm text-slate-600">{benefit.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-cyan-300 font-semibold tracking-wider uppercase text-sm">The Challenge</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
                Modern Life Is <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200">Disrupting</span> Your Energy
              </h2>
              <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                Every day, your body's natural energy systems are under assault. EMFs from phones and WiFi, 
                chronic stress, poor sleep, environmental toxins, and processed foods all disrupt the 
                delicate quantum coherence your cells need to function optimally.
              </p>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                The result? Fatigue, brain fog, inflammation, poor recovery, and accelerated aging. 
                Traditional wellness approaches treat symptoms. Quantum health restores the fundamental 
                energy balance that keeps you thriving.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["EMF Exposure", "Chronic Stress", "Poor Sleep", "Environmental Toxins"].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className="text-blue-100">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl rotate-3 opacity-20" />
              <div className="relative rounded-3xl overflow-hidden">
                <Image 
                  src="/healing-hands.jpg" 
                  alt="Energy disruption" 
                  width={600} 
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">The Benefits</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-slate-900">
              What Quantum Wellness <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Delivers</span>
            </h2>
            <p className="text-slate-600 text-lg">
              By restoring your body's natural energy coherence, quantum health technology delivers 
              benefits that ripple through every system in your body.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Science Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">The Science</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-slate-900">
              Understanding <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Quantum Biology</span>
            </h2>
            <p className="text-slate-600 text-lg">
              Quantum health isn't pseudoscience—it's based on established principles from quantum physics 
              and biology that explain how energy drives cellular function.
            </p>
          </div>

          <div className="space-y-12">
            {sciencePoints.map((point, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{point.title}</h3>
                    <p className="text-slate-600 text-lg leading-relaxed">{point.desc}</p>
                  </div>
                  <div className="text-center md:text-right">
                    <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                      {point.stat}
                    </div>
                    <div className="text-slate-500 mt-2">{point.statLabel}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
            Core Principles of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Quantum Health</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Everything is Energy", desc: "All matter is energy vibrating at different frequencies. Health is optimal frequency harmony." },
              { title: "Coherence is Health", desc: "Healthy cells emit coherent, organized light. Disease shows as chaotic energy patterns." },
              { title: "Information Carries Energy", desc: "The body receives and transmits information through electromagnetic fields and biophotons." },
              { title: "Environment Matters", desc: "External energy fields profoundly impact cellular function and overall wellness." }
            ].map((principle, index) => (
              <div key={index} className="p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:border-blue-300 hover:shadow-lg transition-all">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold mb-4">
                  {index + 1}
                </div>
                <h4 className="font-semibold mb-2 text-slate-900">{principle.title}</h4>
                <p className="text-slate-600 text-sm">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-cyan-300 font-semibold tracking-wider uppercase text-sm">The Difference</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Traditional vs. <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200">Quantum Wellness</span>
            </h2>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10">
                <h3 className="text-xl font-bold mb-6 text-blue-200">Traditional Approach</h3>
                <ul className="space-y-4">
                  {comparisons.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-blue-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-blue-100">{item.traditional}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 md:p-12 bg-gradient-to-br from-blue-600/20 to-cyan-500/20">
                <h3 className="text-xl font-bold mb-6 text-white">Quantum Approach</h3>
                <ul className="space-y-4">
                  {comparisons.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white">{item.quantum}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-slate-900">
              Common Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{faq.q}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-cyan-500">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience Quantum Wellness for Yourself
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            The best way to understand quantum health is to feel it. Book a session or 
            schedule a demo to experience the transformative power of energy-based wellness.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contact/" 
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-slate-100 transition-all hover:scale-105"
            >
              Contact Us
            </Link>
            <Link 
              href="/quantum-bed-info/" 
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
            >
              Learn About the Technology
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
