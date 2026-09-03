import Link from "next/link";
import Image from "next/image";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Understanding PEMF Therapy: Electromagnetic Wellness Explained | Quantum Energy Beds",
  description: "Learn how Pulsed Electromagnetic Field therapy works and why it's becoming a cornerstone of modern wellness routines.",
};

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navigation />

      {/* Hero Image */}
      <div className="relative h-[400px] w-full">
        <Image
          src="/pemf-therapy-v3.png"
          alt="PEMF electromagnetic therapy"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent"></div>
      </div>

      <article className="pb-20 -mt-20 relative z-10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Understanding PEMF Therapy: Electromagnetic Wellness Explained
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-slate-600 mb-8">
              Pulsed Electromagnetic Field (PEMF) therapy has gained significant attention in wellness circles, but what exactly is it? This article explores the science behind PEMF and its role in supporting cellular health.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">What is PEMF Therapy?</h2>
            <p>
              PEMF therapy uses low-frequency electromagnetic pulses to stimulate cellular activity. Every cell in your body naturally produces electromagnetic fields, and PEMF therapy works by enhancing these natural frequencies to support optimal cellular function.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">How Does PEMF Work?</h2>
            <p>
              At the cellular level, PEMF therapy influences the movement of ions across cell membranes. This process, known as ion exchange, is crucial for cellular energy production and communication. By supporting these natural processes, PEMF therapy may help cells function more efficiently.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Research and Applications</h2>
            <p>
              NASA has extensively researched PEMF technology for astronaut health, particularly to address the effects of long-term space travel on bone density and muscle mass. This research has helped validate PEMF's potential benefits for general wellness applications.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Integrating PEMF into Your Routine</h2>
            <p>
              Modern wellness devices like the Quantum Energy Bed incorporate PEMF technology alongside other modalities. This integration allows users to experience the benefits of electromagnetic therapy while also enjoying heat, light, and vibrational therapies in a single session.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <p className="font-semibold text-blue-900">Experience PEMF therapy at home</p>
              <p className="text-blue-800 mt-2">
                <Link href="/wellness-pod-products/" className="underline">Explore our products</Link> to find the perfect PEMF-enabled wellness solution for your needs.
              </p>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
