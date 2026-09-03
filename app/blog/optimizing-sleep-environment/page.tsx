import Link from "next/link";
import Image from "next/image";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Optimizing Your Sleep Environment for Better Rest | Quantum Energy Beds",
  description: "Discover practical strategies to create the ideal sleep environment and improve your sleep quality naturally.",
};

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navigation />

      {/* Hero Image */}
      <div className="relative h-[400px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200&h=400&fit=crop"
          alt="Peaceful bedroom sleep"
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
              Optimizing Your Sleep Environment for Better Rest
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-slate-600 mb-8">
              Quality sleep is foundational to health, yet many people struggle to get the rest they need. While sleep disorders require professional attention, optimizing your sleep environment can significantly improve sleep quality for most people.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">The Importance of Darkness</h2>
            <p>
              Light exposure, especially blue light, suppresses melatonin production and disrupts circadian rhythms. Create a dark sleep environment by using blackout curtains, removing electronic devices with LED indicators, and considering a sleep mask. Even small amounts of light can affect sleep quality.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Temperature Matters</h2>
            <p>
              The ideal sleep temperature is between 60-67°F (15-19°C). Your body temperature naturally drops during sleep, and a cool room facilitates this process. Consider breathable bedding materials and adjust your thermostat or use fans to maintain optimal temperature.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Sound and Silence</h2>
            <p>
              While complete silence works for some, others benefit from consistent background noise that masks disruptive sounds. White noise machines, fans, or nature sounds can create an acoustic environment conducive to sleep. Alternatively, earplugs can block unwanted noise.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">The Role of Electromagnetic Fields</h2>
            <p>
              Some people are sensitive to electromagnetic fields (EMFs) from electronic devices. Creating an EMF-free sleep zone by removing devices from the bedroom or turning off Wi-Fi at night may improve sleep for sensitive individuals.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Evening Rituals and Relaxation</h2>
            <p>
              Preparing your body for sleep is as important as preparing your environment. Establish a consistent bedtime routine that includes relaxation practices. The Quantum Energy Bed's gentle heat and light therapies can be incorporated into an evening wellness routine to promote relaxation before sleep.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <p className="font-semibold text-blue-900">Want to enhance your sleep and wellness routine?</p>
              <p className="text-blue-800 mt-2">
                <Link href="/contact/" className="underline">Contact us</Link> to learn how the Quantum Energy Bed can support your overall wellness and relaxation.
              </p>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
