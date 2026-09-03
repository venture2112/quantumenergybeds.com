import Link from "next/link";
import Image from "next/image";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Sound Therapy and Brainwave Entrainment: Science and Practice | Quantum Energy Beds",
  description: "Explore how sound frequencies can influence brain states and promote relaxation, focus, and overall wellness.",
};

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navigation />

      {/* Hero Image */}
      <div className="relative h-[400px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1200&h=400&fit=crop"
          alt="Sound therapy meditation"
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
              Sound Therapy and Brainwave Entrainment: Science and Practice
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-slate-600 mb-8">
              Sound has been used for healing and transformation across cultures for thousands of years. Modern science is now validating what ancient practitioners knew intuitively: specific sound frequencies can profoundly affect our mental and physical states.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Understanding Brainwave States</h2>
            <p>
              Our brains produce electrical activity at different frequencies, commonly categorized as beta (active thinking), alpha (relaxed awareness), theta (deep relaxation/meditation), and delta (deep sleep). Each state serves different functions and supports different activities.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">What is Brainwave Entrainment?</h2>
            <p>
              Brainwave entrainment is the process of using rhythmic stimuli—such as sound pulses or beats—to guide brain activity toward desired frequencies. When exposed to consistent rhythmic patterns, the brain naturally synchronizes with those frequencies, a phenomenon known as the frequency following response.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Types of Sound Therapy</h2>
            <p>
              Various sound-based approaches offer different benefits:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Binaural beats: Different frequencies in each ear create perceived pulse</li>
              <li>Isochronic tones: Distinct, evenly spaced pulses for entrainment</li>
              <li>Solfeggio frequencies: Ancient scale believed to have healing properties</li>
              <li>Vibroacoustic therapy: Low-frequency sound delivered through physical contact</li>
              <li>Singing bowls and gongs: Traditional instruments for sound healing</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">Research and Applications</h2>
            <p>
              Studies have shown promising results for sound therapy in reducing anxiety, improving sleep, enhancing focus, and supporting pain management. While more research is needed, many people report significant benefits from regular sound therapy practice.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Integrating Sound with Other Therapies</h2>
            <p>
              Sound therapy becomes even more powerful when combined with other wellness modalities. The Quantum Energy Bed integrates vibrational therapy with heat, light, and electromagnetic therapies for a comprehensive multi-sensory wellness experience.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <p className="font-semibold text-blue-900">Interested in experiencing vibrational therapy?</p>
              <p className="text-blue-800 mt-2">
                <Link href="/contact/" className="underline">Contact us</Link> to learn about the Quantum Energy Bed's integrated sound and vibration features.
              </p>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
