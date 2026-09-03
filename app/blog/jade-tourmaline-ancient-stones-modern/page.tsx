import Link from "next/link";
import Image from "next/image";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Jade and Tourmaline: Ancient Stones Meet Modern Wellness | Quantum Energy Beds",
  description: "Discover the remarkable properties of jade and tourmaline and how these ancient stones enhance modern therapeutic technology.",
};

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navigation />

      {/* Hero Image */}
      <div className="relative h-[400px] w-full">
        <Image
          src="/jade-stones-v3.jpg"
          alt="Jade and healing crystals"
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
              Jade and Tourmaline: Ancient Stones Meet Modern Wellness
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-slate-600 mb-8">
              For thousands of years, civilizations around the world have treasured jade and tourmaline for their beauty and purported healing properties. Today, modern science is revealing why these ancient stones remain relevant in cutting-edge wellness technology.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">The Legacy of Jade</h2>
            <p>
              In Chinese culture, jade has been revered for over 7,000 years as a symbol of purity, health, and longevity. Ancient practitioners believed jade could balance the body's energy and promote healing. Modern research supports some of these traditional beliefs, showing that jade has remarkable thermal properties that make it ideal for therapeutic applications.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Tourmaline's Natural Power</h2>
            <p>
              Tourmaline is a unique mineral that naturally generates negative ions and far infrared rays when heated or put under pressure. This pyroelectric and piezoelectric phenomenon makes tourmaline extraordinarily valuable for wellness applications. The stone essentially becomes a natural therapeutic device, emitting beneficial energy without any external power source.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Synergistic Benefits in Modern Devices</h2>
            <p>
              When combined in therapeutic devices, jade and tourmaline create a powerful synergy:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Jade's excellent heat conductivity ensures even, gentle warmth distribution</li>
              <li>Tourmaline generates negative ions that purify the surrounding air</li>
              <li>Both stones emit far infrared rays that penetrate deep into tissues</li>
              <li>The combination supports relaxation and stress reduction</li>
              <li>Natural mineral properties require no artificial additives</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">Ancient Wisdom, Modern Science</h2>
            <p>
              The integration of jade and tourmaline into devices like the Quantum Energy Bed represents a beautiful marriage of ancient wisdom and modern technology. These stones bring natural, time-tested benefits to contemporary wellness routines, proving that sometimes the oldest solutions are still the best.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <p className="font-semibold text-blue-900">Experience the power of ancient stones.</p>
              <p className="text-blue-800 mt-2">
                <Link href="/contact/" className="underline">Contact us</Link> to learn more about jade and tourmaline therapy.
              </p>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
