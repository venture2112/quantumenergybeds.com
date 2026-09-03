import Link from "next/link";
import Image from "next/image";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Far Infrared Therapy for Athletic Recovery | Quantum Energy Beds",
  description: "Discover how far infrared therapy helps athletes recover faster, reduce muscle soreness, and enhance performance.",
};

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navigation />

      {/* Hero Image */}
      <div className="relative h-[400px] w-full">
        <Image
          src="/red-light-sports-v3.jpg"
          alt="Athlete recovery"
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
              Far Infrared Therapy for Athletic Recovery
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-slate-600 mb-8">
              Elite athletes and weekend warriors alike are discovering the recovery benefits of far infrared therapy. This natural, non-invasive treatment is becoming a staple in sports medicine for its ability to accelerate healing and reduce downtime between workouts.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">How Far Infrared Supports Recovery</h2>
            <p>
              Far infrared rays penetrate deep into muscle tissue, creating a gentle warming effect from the inside out. Unlike traditional heat that only warms the skin's surface, far infrared reaches depths of up to 1.5 inches, promoting circulation and cellular repair where it's needed most.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Proven Benefits for Athletes</h2>
            <p>
              Research and athlete testimonials highlight numerous benefits:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Reduced delayed onset muscle soreness (DOMS)</li>
              <li>Faster removal of metabolic waste products like lactic acid</li>
              <li>Improved flexibility and range of motion</li>
              <li>Accelerated healing of minor strains and injuries</li>
              <li>Decreased inflammation in overworked muscles and joints</li>
              <li>Better sleep quality for enhanced recovery</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">Pre and Post-Workout Applications</h2>
            <p>
              Far infrared therapy is versatile enough to use both before and after exercise. Pre-workout sessions help warm up muscles and increase flexibility, reducing injury risk. Post-workout treatments jumpstart the recovery process, helping you bounce back faster for your next training session.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">A Natural Performance Edge</h2>
            <p>
              Unlike some recovery methods that rely on chemicals or invasive procedures, far infrared therapy works with your body's natural processes. The Quantum Energy Bed delivers therapeutic far infrared through natural jade and tourmaline stones, providing athletes with a clean, effective recovery tool.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <p className="font-semibold text-blue-900">Recover like the pros.</p>
              <p className="text-blue-800 mt-2">
                <Link href="/contact/" className="underline">Contact us</Link> to learn how far infrared therapy can enhance your athletic performance.
              </p>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
