import Link from "next/link";
import Image from "next/image";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export const metadata = {
  title: "The Science of Negative Ions and Air Purification | Quantum Energy Beds",
  description: "Explore how negative ions work to purify air, improve mood, and create a healthier indoor environment.",
};

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navigation />

      {/* Hero Image */}
      <div className="relative h-[400px] w-full">
        <Image
          src="/negative-ions-v2.jpg"
          alt="Waterfall with negative ions"
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
              The Science of Negative Ions and Air Purification
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-slate-600 mb-8">
              Have you ever noticed how refreshed you feel after a thunderstorm or a day at the beach? That invigorating sensation comes from negative ions—nature's own air purifiers that are increasingly being incorporated into wellness technology.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">What Are Negative Ions?</h2>
            <p>
              Negative ions are molecules that have gained one or more extra electrons, giving them a negative electrical charge. They're abundant in natural settings like waterfalls, forests, mountains, and ocean waves. In contrast, indoor environments—especially those with electronic devices and air conditioning—tend to have higher concentrations of positive ions.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">How Negative Ions Purify Air</h2>
            <p>
              The air purification mechanism of negative ions is elegantly simple. These charged particles attach to airborne pollutants like dust, pollen, pet dander, bacteria, and viruses. Once bonded, these particles become too heavy to remain airborne and fall to the ground, effectively removing them from the air you breathe.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Health and Wellness Benefits</h2>
            <p>
              Research suggests multiple benefits from negative ion exposure:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Reduced symptoms of seasonal allergies and respiratory issues</li>
              <li>Improved mood and decreased symptoms of depression</li>
              <li>Enhanced mental clarity and focus</li>
              <li>Better sleep quality</li>
              <li>Reduced airborne pathogens</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">Bringing Nature Indoors</h2>
            <p>
              Modern wellness devices like the Quantum Energy Bed incorporate negative ion generation technology, allowing you to enjoy these benefits in your own home. By combining negative ion therapy with other modalities, you create a comprehensive wellness environment that supports both physical and mental health.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <p className="font-semibold text-blue-900">Breathe better, feel better.</p>
              <p className="text-blue-800 mt-2">
                <Link href="/contact/" className="underline">Contact us</Link> to learn how negative ion technology can enhance your wellness routine.
              </p>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
