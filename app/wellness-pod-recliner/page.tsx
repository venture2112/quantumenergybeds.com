import Link from "next/link";
import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function WellnessPodRecliner() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navigation />

      {/* Hero with Background Image */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0">
          <Image 
            src="/showroom.png" 
            alt="Wellness Pod Showroom" 
            fill 
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50/95 via-slate-50/85 to-slate-50/70"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-900">
              Wellness Pod{" "}
              <span className="text-gradient">Recliner</span>
            </h1>
            <p className="text-xl text-slate-600">
              Experience ultimate relaxation in our state-of-the-art wellness pod
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 border-y border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10">
              <Image 
                src="/quantum-healing.jpg" 
                alt="Quantum Healing Technology" 
                width={600} 
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                Your Personal Wellness Sanctuary
              </h2>
              <p className="text-slate-600 text-lg mb-6">
                The Wellness Pod Recliner combines cutting-edge technology with luxurious comfort 
                to create the ultimate relaxation experience. This innovative system brings together 
                multiple therapeutic modalities in a private, cocoon-like environment.
              </p>
              <p className="text-slate-600 text-lg mb-8">
                Whether you're seeking stress relief, pain management, or simply a moment of peace 
                in your busy day, the Wellness Pod delivers transformative results in just 30 minutes.
              </p>
            </div>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center text-slate-900">
            Features & Benefits
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Zero-Gravity Positioning", desc: "Recline into a weightless position that reduces pressure on your spine" },
              { title: "Full-Body Heat Therapy", desc: "Gentle far infrared heat penetrates deep into muscles and tissues" },
              { title: "Sound Therapy", desc: "Immersive audio with binaural beats and wellness frequencies" },
              { title: "Aromatherapy", desc: "Optional essential oil diffusion enhances your session" },
              { title: "LED Light Therapy", desc: "Chromotherapy lights help balance your energy and mood" },
              { title: "Privacy & Comfort", desc: "Enclosed design creates a personal sanctuary" },
            ].map((feature, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-blue-50/50 hover:border-blue-300 transition-all"
              >
                <h4 className="text-lg font-semibold mb-2 text-slate-900">{feature.title}</h4>
                <p className="text-slate-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Experience the Wellness Pod?
            </h3>
            <p className="text-blue-100 text-lg mb-8">
              Book your first session today and discover the future of relaxation
            </p>
            <Link 
              href="/contact/" 
              className="inline-block px-8 py-4 bg-white text-blue-600 font-medium rounded-full hover:bg-slate-100 transition-colors shadow-lg"
            >
              Schedule Now
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
