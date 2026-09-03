import Link from "next/link";
import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quantum Energy Beds Blog 2026 | Science of PEMF, Red Light & Terahertz Therapy",
  description: "Expert articles on quantum energy technology, PEMF therapy benefits, red light healing science, terahertz waves, and biohacking. Learn how multi-modal wellness works.",
  keywords: ["quantum energy beds blog", "PEMF therapy benefits", "red light therapy research", "terahertz wave science", "energy healing articles", "multi-modal wellness"],
  openGraph: {
    title: "Quantum Energy Beds Blog 2026 | Science of PEMF, Red Light & Terahertz Therapy",
    description: "Expert articles on PEMF therapy, red light healing, terahertz waves, and quantum wellness science.",
    url: "https://www.quantumenergybeds.com/blog",
    type: "website",
  },
};

export default function Blog() {
  const posts = [
    {
      title: "Autophagy and Quantum Wellness: How Cellular Cleansing Powers Longevity",
      excerpt: "Discover how autophagy—your body's cellular recycling system—combines with quantum energy technology to enhance longevity, detoxification, and cellular renewal.",
      date: "July 7, 2026",
      slug: "autophagy-cellular-cleansing",
      image: "/images/autophagy-cellular-cleansing.jpg"
    },
    {
      title: "The Science of Grounding and Earthing: How Quantum Energy Beds Connect You to Earth's Healing Frequencies",
      excerpt: "Discover the science behind grounding and earthing, and how quantum energy bed technology amplifies these natural healing principles for enhanced wellness, better sleep, and reduced inflammation.",
      date: "July 5, 2026",
      slug: "grounding-earthing-quantum-wellness",
      image: "/images/blog/grounding-earthing.jpg"
    },
    {
      title: "Nitric Oxide and Quantum Wellness: The Molecule of Life and Energy Flow",
      excerpt: "Discover how nitric oxide production enhances circulation, cellular energy, and overall wellness—and how quantum energy bed technology stimulates this vital molecule for optimal health.",
      date: "July 3, 2026",
      slug: "nitric-oxide-quantum-wellness-circulation",
      image: "/images/blog/nitric-oxide-quantum-wellness.jpg"
    },
    {
      title: "Biohacking Your Mitochondria: How Quantum Energy Technology Enhances Cellular Powerhouses",
      excerpt: "Discover how to optimize your cellular power plants with quantum energy technology. Learn how red light therapy, PEMF, and thermal therapy boost mitochondrial function and ATP production.",
      date: "July 1, 2026",
      slug: "biohacking-mitochondria-cellular-energy",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&h=400&fit=crop"
    },
    {
      title: "Thermal Therapy Innovations: From Ancient Sweat Lodges to Modern Quantum Wellness",
      excerpt: "Explore the fascinating evolution of thermal therapy from ancient healing practices to cutting-edge quantum wellness technology. Discover how heat heals and the science behind modern thermal innovations.",
      date: "June 30, 2026",
      slug: "thermal-therapy-innovations-history",
      image: "/images/blog/thermal-therapy.jpg"
    },
    {
      title: "The Synergy of Multi-Modal Therapy: Why Combining Healing Technologies Amplifies Results",
      excerpt: "Discover how combining PEMF, red light therapy, infrared heat, and terahertz waves creates synergistic wellness effects greater than individual therapies alone.",
      date: "June 23, 2026",
      slug: "multi-modal-therapy-synergy",
      image: "/images/blog/multi-modal-therapy-synergy.jpg"
    },
    {
      title: "Photobiomodulation for Athletic Recovery: Red Light Therapy for Peak Performance",
      excerpt: "Discover how photobiomodulation therapy accelerates athletic recovery, reduces muscle soreness, and enhances sports performance through the power of red and near-infrared light.",
      date: "June 21, 2026",
      slug: "photobiomodulation-athletic-recovery-performance",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop"
    },
    {
      title: "The Science of Infrared Therapy: How Heat Heals at the Cellular Level",
      excerpt: "Discover the science behind infrared therapy and how it promotes healing at the cellular level. Learn about far-infrared technology, health benefits, and quantum wellness.",
      date: "June 15, 2026",
      slug: "infrared-therapy-cellular-healing",
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600&h=400&fit=crop"
    },
    {
      title: "Terahertz Wave Technology: The Next Frontier in Quantum Wellness",
      excerpt: "Discover how terahertz waves work at the cellular level to enhance wellness, boost energy, and support natural healing through the power of frequency resonance.",
      date: "June 15, 2026",
      slug: "terahertz-waves-quantum-wellness",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop"
    },
    {
      title: "The Science of Circadian Rhythms: How Light Shapes Your Health and Wellness",
      excerpt: "Discover how circadian rhythms influence your health, sleep quality, and overall wellness. Learn how light therapy and quantum wellness technology can help restore your body's natural rhythms.",
      date: "June 13, 2026",
      slug: "circadian-rhythms-light-wellness",
      image: "/images/circadian-rhythm-wellness.jpg"
    },
    {
      title: "The Science of Energy Medicine: Bridging Ancient Wisdom with Modern Quantum Wellness",
      excerpt: "Explore how modern quantum wellness technology validates ancient energy healing practices, from Traditional Chinese Medicine to biofield science, and discover the scientific evidence supporting energy-based therapies.",
      date: "June 11, 2026",
      slug: "energy-medicine-science-quantum-healing",
      image: "/images/energy-medicine-science.jpg"
    },
    {
      title: "The Science of Vibrational Healing: How Frequency and Energy Transform Your Health",
      excerpt: "Discover how vibrational healing, sound frequencies, and energy medicine work at the cellular level to support wellness, reduce stress, and promote natural healing.",
      date: "June 9, 2026",
      slug: "vibrational-healing-frequency-energy",
      image: "/images/vibrational-healing-custom.jpg"
    },
    {
      title: "Cellular Energy and ATP Production: How Light Therapy Powers Your Body at the Molecular Level",
      excerpt: "Discover how red and near-infrared light therapy enhances cellular energy production, boosts ATP synthesis, and supports mitochondrial health for optimal wellness.",
      date: "June 7, 2026",
      slug: "cellular-energy-atp-light-therapy",
      image: "/images/cellular-atp-photo.jpg"
    },
    {
      title: "The Future of Home Wellness: Why Multi-Modal Technology Matters",
      excerpt: "Discover why combining multiple therapeutic technologies in one device represents the next evolution in personal wellness.",
      date: "June 4, 2026",
      slug: "future-home-wellness-multi-modal",
      image: "/home-wellness-v4.jpg"
    },
    {
      title: "Understanding PEMF Therapy: Electromagnetic Wellness Explained",
      excerpt: "Learn how Pulsed Electromagnetic Field therapy works and why it's becoming a cornerstone of modern wellness routines.",
      date: "June 2, 2026",
      slug: "pemf-therapy-electromagnetic-wellness",
      image: "/pemf-therapy-v4.png"
    },
    {
      title: "The Science of Negative Ions: Nature's Air Purifiers",
      excerpt: "Explore how negative ions can improve air quality, boost mood, and support overall respiratory wellness.",
      date: "May 30, 2026",
      slug: "science-negative-ions-air-purifiers",
      image: "/negative-ions-v2.jpg"
    },
    {
      title: "Jade and Tourmaline: Ancient Stones Meet Modern Technology",
      excerpt: "Discover the historical use of healing stones and how they're integrated into contemporary wellness devices.",
      date: "May 28, 2026",
      slug: "jade-tourmaline-ancient-stones-modern",
      image: "/jade-stones-v4.jpg"
    },
    {
      title: "Graphene Heating: The Future of Thermal Therapy",
      excerpt: "Learn about graphene's unique properties and why it's revolutionizing heat-based wellness treatments.",
      date: "May 26, 2026",
      slug: "graphene-heating-thermal-therapy",
      image: "/graphene-heating-v4.jpg"
    },
    {
      title: "Blue Light Therapy: Beyond Seasonal Affective Disorder",
      excerpt: "Explore the benefits of blue light therapy for skin health, mood regulation, and circadian rhythm support.",
      date: "May 24, 2026",
      slug: "blue-light-therapy-benefits",
      image: "/blue-light-v4.jpg"
    },
    {
      title: "The Role of Far Infrared in Athletic Recovery",
      excerpt: "How professional athletes and fitness enthusiasts are using far infrared technology to speed recovery times.",
      date: "May 22, 2026",
      slug: "far-infrared-athletic-recovery",
      image: "/red-light-sports-v4.jpg"
    },
    {
      title: "Creating a Wellness Sanctuary at Home",
      excerpt: "Tips for designing a dedicated space in your home for quantum energy sessions and daily wellness practices.",
      date: "May 20, 2026",
      slug: "wellness-sanctuary-home-design",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop"
    },
    {
      title: "Understanding Bioavailability: Maximizing Nutrient Absorption",
      excerpt: "How quantum wellness technology can support your body's ability to absorb and utilize nutrients effectively.",
      date: "May 18, 2026",
      slug: "bioavailability-nutrient-absorption",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop"
    },
    {
      title: "The Connection Between Stress and Cellular Health",
      excerpt: "Explore the science behind how chronic stress affects your cells and how technology can help restore balance.",
      date: "May 16, 2026",
      slug: "stress-cellular-health-connection",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop"
    },
    {
      title: "Chromotherapy in Practice: Choosing the Right Colors",
      excerpt: "A practical guide to selecting chromotherapy colors based on your specific wellness goals and needs.",
      date: "May 14, 2026",
      slug: "chromotherapy-practical-guide",
      image: "https://images.unsplash.com/photo-1502691876148-a84978e59af8?w=600&h=400&fit=crop"
    },
    {
      title: "Sound Therapy and Brainwave Entrainment",
      excerpt: "Discover how specific sound frequencies can influence brainwave patterns and promote deep relaxation.",
      date: "May 12, 2026",
      slug: "sound-therapy-brainwave-entrainment",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&h=400&fit=crop"
    },
    {
      title: "The Business Case for Wellness Technology",
      excerpt: "Why spas, gyms, and wellness centers are investing in quantum energy technology to attract and retain clients.",
      date: "May 10, 2026",
      slug: "business-case-wellness-technology",
      image: "/energy-bed-hero.jpg"
    },
    {
      title: "Detoxification Myths and Facts",
      excerpt: "Separating scientific evidence from marketing claims when it comes to detoxification and body cleansing.",
      date: "May 8, 2026",
      slug: "detoxification-myths-facts",
      image: "/detox-smoothie-v2.jpg"
    },
    {
      title: "Optimizing Your Sleep Environment",
      excerpt: "Beyond the bedroom: how temperature, light, and electromagnetic fields affect your sleep quality.",
      date: "May 6, 2026",
      slug: "optimizing-sleep-environment",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&h=400&fit=crop"
    },
    {
      title: "The History of Light Therapy: From Ancient Times to Today",
      excerpt: "Trace the evolution of light-based healing from ancient civilizations to modern quantum wellness devices.",
      date: "May 4, 2026",
      slug: "history-light-therapy",
      image: "/light-therapy-v4.jpg"
    },
    {
      title: "Understanding Inflammation: The Silent Health Disruptor",
      excerpt: "Learn about chronic inflammation's impact on health and how multi-modal therapy can provide support.",
      date: "May 2, 2026",
      slug: "understanding-inflammation-health",
      image: "/inflammation-v4.jpg"
    },
    {
      title: "EMF Protection: Balancing Technology and Wellness",
      excerpt: "How to protect yourself from harmful electromagnetic frequencies while still benefiting from therapeutic technologies.",
      date: "April 30, 2026",
      slug: "emf-protection-technology-wellness",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop"
    },
    {
      title: "The Mind-Body Connection in Quantum Wellness",
      excerpt: "Exploring the intersection of mental intention, mindfulness, and physical wellness technology.",
      date: "April 28, 2026",
      slug: "mind-body-connection-quantum",
      image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=600&h=400&fit=crop"
    },
    {
      title: "Seasonal Wellness: Adapting Your Routine Year-Round",
      excerpt: "How to adjust your quantum energy sessions and wellness practices for different seasons and environmental changes.",
      date: "April 26, 2026",
      slug: "seasonal-wellness-year-round",
      image: "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?w=600&h=400&fit=crop"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navigation />

      {/* Hero with Background Image */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0">
          <Image 
            src="/quantum-healing.jpg" 
            alt="Quantum Wellness Blog" 
            fill 
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50/95 via-slate-50/85 to-slate-50/70"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-900">
              Quantum Wellness{" "}
              <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-xl text-slate-600">
              Insights, research, and tips for optimal health
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 border-y border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article key={index} className="group rounded-2xl overflow-hidden border border-slate-200 bg-white hover:shadow-xl hover:shadow-blue-500/10 transition-all">
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm font-medium text-blue-600 mb-2">{post.date}</p>
                  <h2 className="text-xl font-semibold text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 mb-4 line-clamp-3 text-sm">
                    {post.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${post.slug}/`}
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
