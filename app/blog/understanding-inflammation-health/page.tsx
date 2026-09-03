import Link from "next/link";
import Image from "next/image";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Understanding Inflammation: The Hidden Health Factor | Quantum Energy Beds",
  description: "Learn about the role of inflammation in health and disease, and discover natural approaches to maintaining healthy inflammatory responses.",
};

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navigation />

      {/* Hero Image */}
      <div className="relative h-[400px] w-full">
        <Image
          src="/inflammation-v3.jpg"
          alt="Health and wellness"
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
              Understanding Inflammation: The Hidden Health Factor
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-slate-600 mb-8">
              Inflammation has become a buzzword in health circles, often portrayed as something to be eliminated entirely. But the reality is more nuanced—inflammation is a crucial biological process that becomes problematic only when it becomes chronic or excessive.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">The Dual Nature of Inflammation</h2>
            <p>
              Acute inflammation is your body's natural defense mechanism. When you cut your finger or catch a cold, inflammation rushes immune cells to the affected area, promoting healing and fighting infection. Without inflammation, wounds wouldn't heal and infections would run rampant.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">When Inflammation Goes Wrong</h2>
            <p>
              Problems arise when inflammation becomes chronic—a persistent, low-grade inflammatory state that can silently damage tissues over time. Chronic inflammation has been linked to numerous health conditions, including cardiovascular disease, diabetes, arthritis, and even depression.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Causes of Chronic Inflammation</h2>
            <p>
              Modern lifestyles contribute to chronic inflammation through multiple pathways:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Poor diet high in processed foods and refined sugars</li>
              <li>Chronic stress and inadequate sleep</li>
              <li>Sedentary lifestyle and lack of movement</li>
              <li>Environmental toxin exposure</li>
              <li>Imbalanced gut microbiome</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">Natural Approaches to Balance</h2>
            <p>
              Supporting healthy inflammatory responses involves lifestyle modifications: anti-inflammatory nutrition, regular exercise, stress management, quality sleep, and reducing toxin exposure. Certain therapies, including far infrared heat and light therapy, have shown promise in supporting healthy inflammatory responses.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">The Role of Thermal Therapy</h2>
            <p>
              Research suggests that controlled heat exposure through far infrared therapy may help modulate inflammatory responses. The deep penetrating heat improves circulation, supports cellular function, and may help the body maintain healthy inflammatory balance. The Quantum Energy Bed incorporates far infrared technology as part of its comprehensive wellness approach.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <p className="font-semibold text-blue-900">Want to learn more about supporting your wellness naturally?</p>
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
