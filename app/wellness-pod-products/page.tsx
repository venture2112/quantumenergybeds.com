import Link from "next/link";
import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function WellnessPodProducts() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/showroom.png" 
            alt="Wellness Pod Products" 
            fill 
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/80"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-full mb-6">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                Professional Grade Equipment
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-slate-900">
                Quantum Wellness{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Products</span>
              </h1>
              <p className="text-xl text-slate-700 mb-8 leading-relaxed">
                Transform your wellness business or home with our professional-grade quantum energy beds and recliners. 
                Experience the future of holistic healing with cutting-edge technology.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#energy-bed"
                  className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all hover:scale-105 shadow-lg shadow-blue-600/25"
                >
                  View Energy Bed
                </a>
                <a 
                  href="#energy-recliner"
                  className="px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all bg-white/80"
                >
                  View Recliner
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl opacity-20 blur-2xl"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
                  <Image 
                    src="/energy-bed-hero.jpg" 
                    alt="Quantum Energy Bed" 
                    width={600} 
                    height={450}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product 1: Energy Bed */}
      <section id="energy-bed" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 font-semibold rounded-full text-sm mb-6">
                Flagship Product
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                Quantum Energy Bed
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                The Quantum Energy Bed is our premier wellness system, combining ten therapeutic 
                modalities in one luxurious, full-body experience. Designed for spas, wellness 
                centers, and discerning home users who demand the best in quantum wellness technology.
              </p>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                This professional-grade system delivers transformative results through advanced 
                energy wellness technologies, providing your clients with an unparalleled wellness 
                journey that keeps them coming back.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <p className="font-semibold text-slate-900">12 Modalities</p>
                  <p className="text-sm text-slate-600">Integrated therapies</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <p className="font-semibold text-slate-900">Full Body</p>
                  <p className="text-sm text-slate-600">Complete coverage</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <p className="font-semibold text-slate-900">Medium Space</p>
                  <p className="text-sm text-slate-600">Fits most rooms</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <p className="font-semibold text-slate-900">20-45 Min Sessions</p>
                  <p className="text-sm text-slate-600">Flexible timing</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/20">
                <Image 
                  src="/energy-bed-clean.jpg" 
                  alt="Quantum Energy Bed" 
                  width={600} 
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Energy Bed Specs */}
          <div className="mt-20">
            <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center text-slate-900">
              Energy Bed Specifications
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <h4 className="text-xl font-bold mb-6 text-slate-900">Technical Specs</h4>
                <ul className="space-y-4">
                  <li className="flex justify-between border-b border-slate-200 pb-3">
                    <span className="text-slate-600">Dimensions</span>
                    <span className="font-semibold text-slate-900">7.54' L x 2.85' W x 3.94' H</span>
                  </li>
                  <li className="flex justify-between border-b border-slate-200 pb-3">
                    <span className="text-slate-600">Weight</span>
                    <span className="font-semibold text-slate-900">~250 lbs</span>
                  </li>
                  <li className="flex justify-between border-b border-slate-200 pb-3">
                    <span className="text-slate-600">Power</span>
                    <span className="font-semibold text-slate-900">Plug & Play (US)</span>
                  </li>
                  <li className="flex justify-between border-b border-slate-200 pb-3">
                    <span className="text-slate-600">Max User Weight</span>
                    <span className="font-semibold text-slate-900">350 lbs</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-slate-600">Warranty</span>
                    <span className="font-semibold text-slate-900">1 Year</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-slate-600">Sanitization</span>
                    <span className="font-semibold text-slate-900">Auto Ozone Cleaner</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-slate-600">Control</span>
                    <span className="font-semibold text-slate-900">AI Voice + Touch Display</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <h4 className="text-xl font-bold mb-6 text-slate-900">12 Integrated Modalities</h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Red Light Therapy",
                    "PEMF Therapy",
                    "Terahertz Waves",
                    "Blue Light Therapy",
                    "Graphene Heating",
                    "Vibrational Therapy",
                    "Negative Ions",
                    "Chromotherapy",
                    "Gyromagnetic Therapy",
                    "Frequency Therapy",
                    "Jade & Crystals",
                    "Far Infrared Heat"
                  ].map((modality, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-700 text-sm">{modality}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product 2: Energy Recliner */}
      <section id="energy-recliner" className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/20">
                <Image 
                  src="/energy-recliner-hero.jpg" 
                  alt="Quantum Energy Recliner" 
                  width={600} 
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div>
              <span className="inline-block px-4 py-2 bg-cyan-100 text-cyan-700 font-semibold rounded-full text-sm mb-6">
                Compact Solution
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                Quantum Energy Recliner
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                The Quantum Energy Recliner brings the power of quantum wellness to a compact, 
                space-efficient design. Perfect for smaller wellness studios, chiropractic offices, 
                or home users who want professional-grade therapy without the footprint.
              </p>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Despite its smaller size, the recliner delivers the same core therapeutic benefits 
                as our full bed, making it an excellent entry point into quantum wellness or a 
                smart addition to an existing wellness practice.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <p className="font-semibold text-slate-900">Space-Saving</p>
                  <p className="text-sm text-slate-600">Compact footprint</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <p className="font-semibold text-slate-900">11 Modalities</p>
                  <p className="text-sm text-slate-600">Integrated therapies</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <p className="font-semibold text-slate-900">Touch Display</p>
                  <p className="text-sm text-slate-600">Easy controls</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <p className="font-semibold text-slate-900">20-45 Min Sessions</p>
                  <p className="text-sm text-slate-600">Flexible timing</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recliner Specs */}
          <div className="mt-20">
            <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center text-slate-900">
              Energy Recliner Specifications
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-slate-200">
                <h4 className="text-xl font-bold mb-6 text-slate-900">Technical Specs</h4>
                <ul className="space-y-4">
                  <li className="flex justify-between border-b border-slate-200 pb-3">
                    <span className="text-slate-600">Dimensions</span>
                    <span className="font-semibold text-slate-900">5.25' L x 2.49' W x 4.27' H</span>
                  </li>
                  <li className="flex justify-between border-b border-slate-200 pb-3">
                    <span className="text-slate-600">Weight</span>
                    <span className="font-semibold text-slate-900">~125 lbs</span>
                  </li>
                  <li className="flex justify-between border-b border-slate-200 pb-3">
                    <span className="text-slate-600">Power</span>
                    <span className="font-semibold text-slate-900">Plug & Play (US)</span>
                  </li>
                  <li className="flex justify-between border-b border-slate-200 pb-3">
                    <span className="text-slate-600">Max User Weight</span>
                    <span className="font-semibold text-slate-900">300 lbs</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-slate-600">Warranty</span>
                    <span className="font-semibold text-slate-900">1 Year</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-slate-600">Sanitization</span>
                    <span className="font-semibold text-slate-900">Auto Ozone Cleaner</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-slate-200">
                <h4 className="text-xl font-bold mb-6 text-slate-900">11 Integrated Modalities</h4>
                <p className="text-slate-600 mb-4 text-sm">(No vibrational therapy)</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Red Light Therapy",
                    "PEMF Therapy",
                    "Terahertz Waves",
                    "Blue Light Therapy",
                    "Graphene Heating",
                    "Negative Ions",
                    "Chromotherapy",
                    "Gyromagnetic Therapy",
                    "Frequency Therapy",
                    "Jade & Crystals",
                    "Far Infrared Heat"
                  ].map((modality, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-cyan-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-700 text-sm">{modality}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center text-slate-900">
            Product Comparison
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left py-4 px-4 font-semibold text-slate-900">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-blue-600">Energy Bed</th>
                  <th className="text-center py-4 px-4 font-semibold text-cyan-600">Energy Recliner</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Modalities", bed: "12", recliner: "11" },
                  { feature: "Full Body Coverage", bed: "✓", recliner: "Partial" },
                  { feature: "AI Voice Control", bed: "✓", recliner: "—" },
                  { feature: "Touch Display", bed: "✓", recliner: "✓" },
                  { feature: "Position", bed: "Full Lay-Down", recliner: "Seated/Reclined" },
                  { feature: "Power", bed: "Plug & Play", recliner: "Plug & Play" },
                  { feature: "Experience", bed: "Full Lay-Flat", recliner: "Seated Comfort" },
                  { feature: "Color Options", bed: "—", recliner: "Black or White" },
                  { feature: "Opening Style", bed: "Top or Side Open", recliner: "—" },
                  { feature: "Warranty", bed: "1 Year", recliner: "1 Year" },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-slate-100">
                    <td className="py-4 px-4 text-slate-600">{row.feature}</td>
                    <td className="py-4 px-4 text-center font-medium text-slate-900">{row.bed}</td>
                    <td className="py-4 px-4 text-center font-medium text-slate-900">{row.recliner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Wellness Business?
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Contact us today to discuss pricing, financing options, and how our quantum wellness 
            products can elevate your practice and delight your clients.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contact/" 
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-slate-100 transition-all hover:scale-105 shadow-lg"
            >
              Contact Us
            </Link>
            <Link 
              href="/financing/" 
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
            >
              Financing Options
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
