import Link from "next/link";
import Image from "next/image";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Creating a Wellness Sanctuary at Home | Quantum Energy Beds",
  description: "Transform your living space into a personal wellness retreat with these design principles and technology recommendations.",
};

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navigation />

      {/* Hero Image */}
      <div className="relative h-[400px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=400&fit=crop"
          alt="Wellness sanctuary home"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent"></div>
      </div>

      <article className="pb-20 -mt-20 relative z-10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-blue-600 font-semibold">May 25, 2026</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Creating a Wellness Sanctuary at Home
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-slate-600 mb-8">
              In our fast-paced world, having a dedicated space for relaxation and rejuvenation isn't a luxury—it's a necessity. Creating a wellness sanctuary at home gives you a retreat where you can decompress, recharge, and prioritize your health on your own schedule.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Designing Your Space</h2>
            <p>
              Your wellness sanctuary doesn't require a massive renovation. Even a small corner can become a powerful retreat with the right approach. Consider these elements:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Natural light or warm, dimmable lighting options</li>
              <li>Calming colors like soft blues, greens, or earth tones</li>
              <li>Plants that purify air and add life to the space</li>
              <li>Comfortable seating or a dedicated wellness device</li>
              <li>Minimal clutter to promote mental clarity</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">The Role of Technology</h2>
            <p>
              Modern wellness technology can elevate your sanctuary from pleasant to transformative. Multi-modal devices like the Quantum Energy Bed combine multiple therapies—heat, light, sound, and vibration—into one elegant system that maximizes your wellness time.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Creating Rituals</h2>
            <p>
              A sanctuary is only as effective as the rituals you create within it. Establish consistent times for your wellness practice, whether it's morning meditation, post-work decompression, or a pre-bedtime relaxation routine. Consistency transforms occasional use into a lifestyle.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Multi-Sensory Experience</h2>
            <p>
              The most effective wellness spaces engage multiple senses. Consider aromatherapy with essential oils, calming soundscapes or white noise, comfortable textures, and temperature control. When all senses are nurtured simultaneously, the restorative effects multiply.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <p className="font-semibold text-blue-900">Start building your sanctuary today.</p>
              <p className="text-blue-800 mt-2">
                <Link href="/contact/" className="underline">Contact us</Link> to learn how the Quantum Energy Bed can anchor your home wellness retreat.
              </p>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
