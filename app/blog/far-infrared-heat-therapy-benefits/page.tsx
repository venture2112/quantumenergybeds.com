import Link from "next/link";
import Image from "next/image";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Far Infrared Heat Therapy: Benefits and Science | Quantum Energy Beds",
  description: "Discover the science behind far infrared heat therapy and its potential benefits for circulation, relaxation, and overall wellness.",
};

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navigation />

      {/* Hero Image */}
      <div className="relative h-[400px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&h=400&fit=crop"
          alt="Heat therapy sauna"
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
              Far Infrared Heat Therapy: Benefits and Science
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-slate-600 mb-8">
              Far infrared heat therapy has gained significant attention in wellness circles, and for good reason. This gentle, penetrating heat offers unique benefits that distinguish it from traditional heating methods, making it a valuable component of comprehensive wellness routines.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">What Makes Far Infrared Different?</h2>
            <p>
              Unlike conventional heat that warms the air around you, far infrared energy penetrates directly into tissues, warming the body from the inside out. This wavelength of light (typically 5-15 micrometers) matches the natural energy emitted by the human body, allowing for deep, efficient absorption.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Cardiovascular Benefits</h2>
            <p>
              Research has shown that far infrared therapy can improve circulation and cardiovascular function. The deep heat causes blood vessels to dilate, increasing blood flow and oxygen delivery to tissues. Some studies suggest regular use may help support healthy blood pressure and improve vascular function.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Pain Relief and Muscle Recovery</h2>
            <p>
              The penetrating heat helps relax muscles, reduce stiffness, and alleviate discomfort. Athletes and active individuals often use far infrared therapy to support muscle recovery after exercise. The improved circulation helps deliver nutrients to tissues and remove metabolic waste products.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Stress Reduction and Relaxation</h2>
            <p>
              The gentle warmth of far infrared therapy promotes deep relaxation. As muscles release tension and circulation improves, the parasympathetic nervous system activates, creating a state of calm and reducing stress hormones. Many users report improved sleep quality after regular sessions.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Detoxification Support</h2>
            <p>
              Far infrared heat induces sweating at lower temperatures than traditional saunas, making it more comfortable for extended sessions. Research suggests that infrared-induced sweating may help eliminate certain environmental toxins and heavy metals more effectively than conventional sweating.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Integration with Multi-Modal Therapy</h2>
            <p>
              The Quantum Energy Bed combines far infrared heat with other therapeutic modalities, creating synergistic effects. When paired with light therapy, PEMF, and negative ions, far infrared becomes part of a comprehensive wellness system that addresses multiple aspects of health simultaneously.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <p className="font-semibold text-blue-900">Experience the benefits of far infrared therapy</p>
              <p className="text-blue-800 mt-2">
                <Link href="/contact/" className="underline">Contact us</Link> to learn how the Quantum Energy Bed incorporates far infrared technology into a complete wellness experience.
              </p>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
