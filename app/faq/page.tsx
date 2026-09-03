import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quantum Energy Bed FAQ 2026 | Pricing, Safety & How It Works",
  description: "Got questions about Quantum Energy Beds? Find answers about pricing ($14,900), safety, session length, shipping, and how this 12-in-1 healing technology works. Free shipping included.",
  keywords: ["quantum energy bed FAQ", "quantum bed price", "is quantum bed safe", "quantum bed session length", "quantum energy bed reviews"],
  openGraph: {
    title: "Quantum Energy Bed FAQ 2026 | Pricing, Safety & How It Works",
    description: "Answers to all your questions about pricing, safety, setup, and how Quantum Energy Beds work.",
    url: "https://www.quantumenergybeds.com/faq",
    type: "website",
  },
};

const faqData = [
  {
    question: "What is a Quantum Energy Bed?",
    answer: "The Quantum Energy Bed is an advanced wellness system that combines multiple therapeutic technologies including far infrared heat, vibrational therapy, negative ions, chromotherapy, and magnetic energy to promote relaxation, detoxification, and overall wellness."
  },
  {
    question: "How long is a typical session?",
    answer: "A typical session lasts between 30-45 minutes. Most users start with 30-minute sessions and can extend as they become more comfortable with the experience."
  },
  {
    question: "Is it safe for everyone?",
    answer: "The Quantum Energy Bed is generally safe for most people. However, we recommend consulting with your healthcare provider if you are pregnant, have a pacemaker, or have any serious medical conditions."
  },
  {
    question: "How often should I use it?",
    answer: "For optimal results, we recommend 2-3 sessions per week. However, even one session per week can provide significant benefits."
  },
  {
    question: "What should I wear?",
    answer: "We recommend wearing comfortable, loose-fitting clothing made from natural fibers like cotton. You'll remain fully clothed during the session."
  },
  {
    question: "Will I sweat?",
    answer: "Yes, the far infrared heat will likely cause you to sweat, which is part of the detoxification process. We recommend drinking plenty of water before and after your session."
  },
  {
    question: "What benefits can I expect?",
    answer: "Many clients report improved sleep, reduced pain and inflammation, increased energy, better mood, enhanced mental clarity, and an overall sense of well-being."
  },
  {
    question: "How quickly can I get my Quantum Energy Bed?",
    answer: "If your chosen model is in stock, you can expect delivery within 7-10 business days. For made-to-order units, the typical lead time is 30-45 days. We'll keep you updated throughout the process and coordinate delivery to ensure a smooth arrival."
  },
  {
    question: "What about shipping and delivery?",
    answer: "We include free standard delivery to your door for all Quantum Energy Bed purchases. For added convenience, we also offer optional white glove service where our team handles the setup and placement in your home or business. Financing customers enjoy the same delivery options, making it easy to get started with your wellness investment."
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes, we offer a 14-day refund policy under certain conditions. Products must be returned in excellent condition with all original packaging and components. Please note that a 15% restocking fee applies to cover return shipping and restocking costs. We want you to be completely satisfied with your investment in wellness."
  }
];

export default function FAQ() {
  const faqs = [
    {
      question: "What is a Quantum Energy Bed?",
      answer: "The Quantum Energy Bed is an advanced wellness system that combines multiple therapeutic technologies including far infrared heat, vibrational therapy, negative ions, chromotherapy, and magnetic energy to promote relaxation, detoxification, and overall wellness."
    },
    {
      question: "How long is a typical session?",
      answer: "A typical session lasts between 30-45 minutes. Most users start with 30-minute sessions and can extend as they become more comfortable with the experience."
    },
    {
      question: "Is it safe for everyone?",
      answer: "The Quantum Energy Bed is generally safe for most people. However, we recommend consulting with your healthcare provider if you are pregnant, have a pacemaker, or have any serious medical conditions."
    },
    {
      question: "How often should I use it?",
      answer: "For optimal results, we recommend 2-3 sessions per week. However, even one session per week can provide significant benefits."
    },
    {
      question: "What should I wear?",
      answer: "We recommend wearing comfortable, loose-fitting clothing made from natural fibers like cotton. You'll remain fully clothed during the session."
    },
    {
      question: "Will I sweat?",
      answer: "Yes, the far infrared heat will likely cause you to sweat, which is part of the detoxification process. We recommend drinking plenty of water before and after your session."
    },
    {
      question: "What benefits can I expect?",
      answer: "Many clients report improved sleep, reduced pain and inflammation, increased energy, better mood, enhanced mental clarity, and an overall sense of well-being."
    },
    {
      question: "How quickly can I get my Quantum Energy Bed?",
      answer: "If your chosen model is in stock, you can expect delivery within 7-10 business days. For made-to-order units, the typical lead time is 30-45 days. We'll keep you updated throughout the process and coordinate delivery to ensure a smooth arrival."
    },
    {
      question: "What about shipping and delivery?",
      answer: "We include free standard delivery to your door for all Quantum Energy Bed purchases. For added convenience, we also offer optional white glove service where our team handles the setup and placement in your home or business. Financing customers enjoy the same delivery options, making it easy to get started with your wellness investment."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 14-day refund policy under certain conditions. Products must be returned in excellent condition with all original packaging and components. Please note that a 15% restocking fee applies to cover return shipping and restocking costs. We want you to be completely satisfied with your investment in wellness."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          }),
        }}
      />
      <Navigation />

      {/* Hero with Background Image */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0">
          <Image 
            src="/energy-bed-hero.jpg" 
            alt="Natural health and wellness" 
            fill 
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50/95 via-slate-50/85 to-slate-50/70"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-900">
              Frequently Asked{" "}
              <span className="text-gradient">Questions</span>
            </h1>
            <p className="text-xl text-slate-600">
              Everything you need to know about Quantum Energy Beds
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Grid */}
      <section className="py-20 border-y border-slate-200 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-blue-300 transition-colors"
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-start gap-3">
                  <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    Q
                  </span>
                  {faq.question}
                </h3>
                <p className="text-slate-600 pl-11">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">Still have questions?</p>
            <a 
              href="tel:888-372-8632" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/25"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us: 888-372-8632
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
