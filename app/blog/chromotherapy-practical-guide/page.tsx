import Link from "next/link";
import Image from "next/image";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Chromotherapy: A Practical Guide to Color Healing | Quantum Energy Beds",
  description: "Explore the principles of chromotherapy and how different colors can influence your mood, energy, and wellbeing.",
};

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navigation />

      {/* Hero Image */}
      <div className="relative h-[400px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1502691876148-a84978e59af8?w=1200&h=400&fit=crop"
          alt="Colorful chromotherapy lights"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent"></div>
      </div>

      <article className="pb-20 -mt-20 relative z-10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-blue-600 font-semibold">May 22, 2026</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Chromotherapy: A Practical Guide to Color Healing
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-slate-600 mb-8">
              Colors surround us every day, influencing our emotions, energy levels, and even physical sensations. Chromotherapy—also known as color therapy—harnesses these effects intentionally, using specific colors to promote healing and balance.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">The Science of Color Influence</h2>
            <p>
              Different wavelengths of light affect us in different ways. Our eyes detect color, but light also penetrates the skin and influences cellular function. Each color carries a specific frequency that can trigger distinct biological and psychological responses.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Colors and Their Properties</h2>
            <p>
              Traditional chromotherapy assigns specific properties to different colors:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>Red:</strong> Stimulating, energizing, associated with vitality and circulation</li>
              <li><strong>Orange:</strong> Warming, uplifting, linked to creativity and emotional balance</li>
              <li><strong>Yellow:</strong> Brightening, clarifying, connected to mental activity and optimism</li>
              <li><strong>Green:</strong> Balancing, harmonizing, associated with growth and healing</li>
              <li><strong>Blue:</strong> Calming, cooling, linked to relaxation and communication</li>
              <li><strong>Indigo:</strong> Introspective, associated with intuition and deep calm</li>
              <li><strong>Violet:</strong> Spiritual, transformative, connected to higher consciousness</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">Practical Applications</h2>
            <p>
              You can incorporate chromotherapy into daily life through colored lighting, clothing choices, environmental design, and meditation practices. Many people find particular colors help with specific goals—blue for sleep, yellow for focus, green for stress relief.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Modern Chromotherapy Technology</h2>
            <p>
              Today's LED technology allows precise control over color wavelengths, making chromotherapy more accessible than ever. The Quantum Energy Bed includes chromotherapy capabilities, allowing users to select specific colors to complement their wellness sessions.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <p className="font-semibold text-blue-900">Experience chromotherapy integrated with advanced wellness technology</p>
              <p className="text-blue-800 mt-2">
                <Link href="/contact/" className="underline">Contact us</Link> to learn how the Quantum Energy Bed combines chromotherapy with other therapeutic modalities.
              </p>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
