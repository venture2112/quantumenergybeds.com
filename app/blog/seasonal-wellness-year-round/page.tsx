import Link from "next/link";
import Image from "next/image";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Seasonal Wellness: Maintaining Health Year-Round | Quantum Energy Beds",
  description: "Learn how to adapt your wellness routine to each season and maintain optimal health throughout the year.",
};

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navigation />

      {/* Hero Image */}
      <div className="relative h-[400px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?w=1200&h=400&fit=crop"
          alt="Seasonal nature wellness"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent"></div>
      </div>

      <article className="pb-20 -mt-20 relative z-10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-blue-600 font-semibold">April 26, 2026</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Seasonal Wellness: Maintaining Health Year-Round
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-slate-600 mb-8">
              Our bodies and minds respond to the changing seasons in profound ways. Understanding these natural rhythms and adapting our wellness practices accordingly can help us maintain optimal health throughout the year.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Spring: Renewal and Detoxification</h2>
            <p>
              Spring represents new beginnings in nature and offers an opportunity for personal renewal. As daylight increases and temperatures rise, focus on lightening your diet, increasing outdoor activity, and supporting your body's natural detoxification processes. Fresh greens and seasonal vegetables support liver function and energy.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Summer: Energy and Activity</h2>
            <p>
              Summer's abundant energy supports increased physical activity and social connection. Take advantage of longer days for outdoor exercise and vitamin D synthesis. Stay hydrated, protect your skin from excessive sun exposure, and maintain consistent sleep schedules despite the extended daylight.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Fall: Transition and Preparation</h2>
            <p>
              As days shorten and temperatures cool, shift focus to immune support and preparation for winter. Incorporate warming foods, maintain regular exercise routines, and begin establishing indoor wellness practices. Fall is an ideal time to establish consistent routines before winter's challenges.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Winter: Restoration and Reflection</h2>
            <p>
              Winter naturally encourages rest and introspection. Shorter days may affect mood and energy levels for some people. Prioritize sleep, maintain social connections, and consider light therapy to compensate for reduced natural light exposure. Indoor wellness technologies become especially valuable during this season.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Year-Round Consistency</h2>
            <p>
              While seasonal adjustments are valuable, certain wellness practices remain important throughout the year. Regular movement, adequate sleep, stress management, and proper nutrition form the foundation of health regardless of season. The Quantum Energy Bed provides consistent therapeutic support year-round, complementing seasonal wellness practices.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <p className="font-semibold text-blue-900">Looking for consistent wellness support?</p>
              <p className="text-blue-800 mt-2">
                <Link href="/contact/" className="underline">Contact us</Link> to learn how the Quantum Energy Bed can support your wellness goals in every season.
              </p>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
