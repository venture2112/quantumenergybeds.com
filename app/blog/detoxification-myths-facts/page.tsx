import Link from "next/link";
import Image from "next/image";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Detoxification: Separating Myths from Facts | Quantum Energy Beds",
  description: "Learn the science behind detoxification, what really works, and how to support your body's natural cleansing processes.",
};

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navigation />

      {/* Hero Image */}
      <div className="relative h-[400px] w-full">
        <Image
          src="/detox-smoothie-v2.jpg"
          alt="Detox and wellness"
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
              Detoxification: Separating Myths from Facts
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-slate-600 mb-8">
              Detoxification has become a buzzword in wellness circles, often surrounded by hype and misinformation. Let's explore what detoxification really means, how your body naturally handles toxins, and what you can do to support this vital process.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Understanding Natural Detoxification</h2>
            <p>
              Your body is equipped with sophisticated detoxification systems. The liver, kidneys, lungs, skin, and lymphatic system work continuously to process and eliminate waste products and toxins. This natural process happens 24/7 without any special products or protocols.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Common Detox Myths</h2>
            <p>
              Many popular detox claims don't hold up to scientific scrutiny:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Myth: You need special products to detox</li>
              <li>Myth: Detoxing leads to rapid, permanent weight loss</li>
              <li>Myth: Toxins build up and need periodic cleansing</li>
              <li>Myth: Extreme fasting or juicing is necessary for detox</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">Evidence-Based Detox Support</h2>
            <p>
              While your body detoxifies naturally, certain practices can support these processes:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Staying well-hydrated to support kidney function</li>
              <li>Eating a nutrient-rich diet with plenty of antioxidants</li>
              <li>Getting adequate sleep for cellular repair</li>
              <li>Regular physical activity to support lymphatic circulation</li>
              <li>Reducing exposure to environmental toxins</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">How Far Infrared Therapy Supports Detox</h2>
            <p>
              Far infrared heat therapy promotes sweating, which is one way your body eliminates certain compounds. Research suggests that infrared-induced sweating may help eliminate heavy metals and other environmental toxins more effectively than traditional sweating. The deep heat also supports circulation and cellular function.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">A Balanced Approach</h2>
            <p>
              Rather than extreme detox protocols, focus on consistent habits that support your body's natural processes. The Quantum Energy Bed's far infrared and thermal therapies can be valuable components of a comprehensive wellness routine that supports your body's innate detoxification capabilities.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <p className="font-semibold text-blue-900">Want to learn more about supporting your body's natural processes?</p>
              <p className="text-blue-800 mt-2">
                <Link href="/contact/" className="underline">Contact us</Link> to discover how the Quantum Energy Bed can complement your wellness routine.
              </p>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
