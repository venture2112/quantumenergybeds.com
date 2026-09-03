import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Quantum Energy Beds",
  description: "Get in touch with the Quantum Energy Beds team. Contact us for questions about our multi-modal wellness technology, pricing ($14,900), or to schedule a consultation.",
  keywords: ["contact quantum energy beds", "quantum bed inquiry", "wellness technology contact", "quantum bed consultation"],
  openGraph: {
    title: "Contact Us | Quantum Energy Beds",
    description: "Get in touch with our team for questions about quantum wellness technology.",
    url: "https://www.quantumenergybeds.com/contact",
    type: "website",
  },
};

export default function Contact() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navigation />

      {/* Hero with Background Image */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0">
          <Image 
            src="/healing-hands.jpg" 
            alt="Healing hands" 
            fill 
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50/95 via-slate-50/85 to-slate-50/70"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-900">
              Get In <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-slate-600">
              Ready to start your quantum wellness journey? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 border-y border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-semibold mb-8 text-slate-900">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1 text-slate-900">Phone</h3>
                    <a href="tel:888-372-8632" className="text-blue-600 hover:text-blue-700 transition-colors">
                      888-372-8632
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1 text-slate-900">Email</h3>
                    <a href="mailto:info@quantumenergybeds.com" className="text-blue-600 hover:text-blue-700 transition-colors">
                      info@quantumenergybeds.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1 text-slate-900">Hours</h3>
                    <p className="text-slate-600">
                      Monday - Friday: 9am - 6pm<br />
                      Saturday: 10am - 4pm<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 rounded-2xl border border-slate-200 bg-white shadow-lg">
              <h2 className="text-2xl font-semibold mb-6 text-slate-900">Send a Message</h2>
              <form 
                action="https://formsubmit.co/info@quantumenergybeds.com" 
                method="POST"
                className="space-y-6"
              >
                <input type="hidden" name="_cc" value="hello@quanivo.com" />
                <input type="hidden" name="_subject" value="New Contact Form Submission - Quantum Energy Beds" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="https://www.quantumenergybeds.com/contact/thank-you/" />
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-slate-600 mb-2">First Name</label>
                    <input 
                      type="text" 
                      name="first_name"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-600 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      name="last_name"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-slate-600 mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-600 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-600 mb-2">I'm Interested In</label>
                  <select 
                    name="interest"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
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
                  <label className="block text-sm text-slate-600 mb-2">Message</label>
                  <textarea 
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-4 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/25"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
