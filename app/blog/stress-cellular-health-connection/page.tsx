import Link from "next/link";
import Image from "next/image";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export const metadata = {
  title: "The Stress-Cellular Health Connection | Quantum Energy Beds",
  description: "Understand how chronic stress impacts your cells and how therapeutic interventions can help restore balance.",
};

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navigation />

      {/* Hero Image */}
      <div className="relative h-[400px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&h=400&fit=crop"
          alt="Meditation and stress relief"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent"></div>
      </div>

      <article className="pb-20 -mt-20 relative z-10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-blue-600 font-semibold">May 23, 2026</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              The Stress-Cellular Health Connection
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-slate-600 mb-8">
              We all know stress feels bad, but its impact goes far beyond mood and mental state. At the cellular level, chronic stress triggers a cascade of biological responses that can undermine health in profound ways. Understanding this connection is the first step toward effective intervention.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">How Stress Affects Cells</h2>
            <p>
              When you're stressed, your body releases cortisol and other stress hormones. While these chemicals are helpful in short bursts, chronic elevation creates problems at the cellular level. Oxidative stress increases, inflammation rises, and cellular repair processes are disrupted.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">The Cellular Toll of Chronic Stress</h2>
            <p>
              Long-term stress manifests in measurable cellular changes:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Shortened telomeres (cellular aging markers)</li>
              <li>Reduced mitochondrial function and energy production</li>
              <li>Impaired immune cell activity</li>
              <li>Increased free radical damage</li>
              <li>Disrupted cellular communication pathways</li>
              <li>Compromised detoxification processes</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">Breaking the Cycle</h2>
            <p>
              The good news is that cellular stress responses can be modulated. Deep relaxation triggers the parasympathetic nervous system—your body's "rest and digest" mode—which counteracts stress hormones and supports cellular repair. Regular therapeutic interventions can help maintain this balance.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Therapeutic Support for Cellular Health</h2>
            <p>
              Multi-modal therapies that combine heat, light, and relaxation create conditions favorable for cellular recovery. The deep relaxation induced by the Quantum Energy Bed helps shift your body from stress mode to repair mode, giving your cells the environment they need to function optimally.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <p className="font-semibold text-blue-900">Support your cells, support your health.</p>
              <p className="text-blue-800 mt-2">
                <Link href="/contact/" className="underline">Contact us</Link> to learn about stress-reducing therapeutic options.
              </p>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
