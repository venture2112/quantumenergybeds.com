import Link from "next/link";
import Image from "next/image";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export const metadata = {
  title: "The History of Light Therapy: From Ancient Wisdom to Modern Science | Quantum Energy Beds",
  description: "Explore the fascinating journey of light therapy from ancient civilizations to cutting-edge photobiomodulation technology.",
};

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navigation />

      {/* Hero Image */}
      <div className="relative h-[400px] w-full">
        <Image
          src="/light-therapy-v3.jpg"
          alt="Sunlight therapy"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent"></div>
      </div>

      <article className="pb-20 -mt-20 relative z-10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-blue-600 font-semibold">May 28, 2026</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              The History of Light Therapy: From Ancient Wisdom to Modern Science
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-slate-600 mb-8">
              Humans have recognized the healing power of light for thousands of years. From ancient sun temples to modern LED technology, the journey of light therapy reflects humanity's enduring quest to harness nature's most fundamental energy source for health and wellness.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Ancient Light Healing Practices</h2>
            <p>
              Ancient civilizations across the globe incorporated light into their healing practices. Egyptian temples were designed to capture sunlight for therapeutic purposes. Greek physicians prescribed sunbathing for various ailments. Traditional Chinese medicine and Ayurveda both recognized the vital energy of sunlight for health maintenance.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">The Birth of Modern Phototherapy</h2>
            <p>
              The scientific study of light therapy began in earnest in the late 19th century. Niels Finsen, a Danish physician, won the Nobel Prize in 1903 for his work treating lupus vulgaris with concentrated light radiation. His research established the foundation for modern phototherapy.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">The Discovery of Photobiomodulation</h2>
            <p>
              In 1967, Hungarian scientist Endre Mester accidentally discovered that low-level laser light could stimulate hair growth and wound healing in mice. This serendipitous finding launched the field of photobiomodulation—using specific wavelengths of light to stimulate cellular processes.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">LED Revolution</h2>
            <p>
              The development of LEDs in the late 20th century transformed light therapy. LEDs offered safe, affordable, and precise wavelength control that wasn't possible with lasers or traditional light sources. This innovation made light therapy accessible to consumers and practitioners worldwide.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Today's Light Therapy Landscape</h2>
            <p>
              Modern light therapy encompasses multiple wavelengths and applications. Red and near-infrared light target cellular energy production. Blue light addresses skin concerns and circadian rhythms. Full-spectrum light combats seasonal affective disorder. The Quantum Energy Bed integrates multiple light therapies, representing the culmination of centuries of light healing wisdom combined with cutting-edge technology.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <p className="font-semibold text-blue-900">Experience the evolution of light therapy</p>
              <p className="text-blue-800 mt-2">
                <Link href="/contact/" className="underline">Contact us</Link> to learn how the Quantum Energy Bed brings together the best of light therapy history and modern science.
              </p>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
