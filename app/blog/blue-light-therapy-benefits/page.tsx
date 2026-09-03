import Link from "next/link";
import Image from "next/image";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Blue Light Therapy: Benefits Beyond Skin Deep | Quantum Energy Beds",
  description: "Explore the science behind blue light therapy and its surprising benefits for mood, energy, and overall wellness.",
};

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navigation />

      {/* Hero Image */}
      <div className="relative h-[400px] w-full">
        <Image
          src="/blue-light-v3.jpg"
          alt="Blue light therapy"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent"></div>
      </div>

      <article className="pb-20 -mt-20 relative z-10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-blue-600 font-semibold">May 27, 2026</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Blue Light Therapy: Benefits Beyond Skin Deep
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-slate-600 mb-8">
              While blue light has gotten a bad reputation for disrupting sleep when emitted by screens, therapeutic blue light offers remarkable benefits when used intentionally. From improving mood to supporting skin health, blue light therapy is a powerful wellness tool.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Understanding Blue Light</h2>
            <p>
              Blue light is part of the visible light spectrum with wavelengths between 400-495 nanometers. It's the same type of light that makes the sky appear blue. In therapeutic applications, specific wavelengths of blue light are harnessed to trigger beneficial biological responses.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Mood and Energy Enhancement</h2>
            <p>
              Blue light plays a crucial role in regulating our circadian rhythm and mood. Exposure to therapeutic blue light can:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Boost alertness and cognitive function</li>
              <li>Help combat seasonal affective disorder (SAD)</li>
              <li>Increase serotonin production</li>
              <li>Improve daytime energy levels</li>
              <li>Support healthy sleep-wake cycles when used appropriately</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">Skin Health Applications</h2>
            <p>
              Blue light therapy has been extensively studied for dermatological applications. It's particularly effective for addressing acne, as the light penetrates the skin and targets acne-causing bacteria. Research also suggests benefits for reducing inflammation and supporting overall skin clarity.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Integration with Multi-Modal Therapy</h2>
            <p>
              When combined with other therapeutic modalities in devices like the Quantum Energy Bed, blue light therapy becomes part of a comprehensive wellness approach. The synergistic effects of multiple light wavelengths, heat, and other therapies create results greater than any single treatment alone.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <p className="font-semibold text-blue-900">Illuminate your wellness journey.</p>
              <p className="text-blue-800 mt-2">
                <Link href="/contact/" className="underline">Contact us</Link> to learn about blue light therapy options.
              </p>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
