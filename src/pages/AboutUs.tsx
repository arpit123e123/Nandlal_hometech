import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Sparkles, 
  CheckCircle2, 
  Wrench
} from 'lucide-react';
import { VALUE_PROPOSITIONS } from '../data/storeInfo';

export const AboutUs: React.FC = () => {
  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      
      {/* Header Banner */}
      <section className="bg-[#1C2028] text-white py-14 sm:py-20 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CC5500]/20 text-[#FF8533] border border-[#CC5500]/30 text-xs font-bold uppercase tracking-wider">
              <span>Local Retail Identity</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              About NANDLAL HOMETECH & UTILITY
            </h1>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              A family-founded retail store and service counter committed to reliable home appliances, kitchen cookware, electrical essentials, and honest repairing in Basti, Uttar Pradesh.
            </p>
          </div>
        </div>
      </section>

      {/* Main Story & Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#CC5500]">
                The Story Behind Our Name
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A1D24] tracking-tight">
                Built Around Everyday Practical Household Needs
              </h2>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>NANDLAL HOMETECH & UTILITY</strong> was established with a singular, clear vision: to give local families, village households, and regional craftsmen in the Walterganj and Basti area a dependable single-destination showroom for all their home equipment.
              </p>
              <p>
                In smaller towns and semi-urban communities, finding genuine kitchen appliances with local after-sales support can be frustrating. Often, retail shops sell an appliance, but when a simple coupler breaks or a gas burner stops firing evenly, customers are left with no place to turn.
              </p>
              <p>
                We designed Nandlal Hometech differently. Right from the beginning, we paired our sales showroom with a dedicated <strong>in-store repair and spare parts counter</strong>. We believe in repairing whenever possible, saving customers money and ensuring household appliances last for years.
              </p>
              <p>
                Today, our showroom at Bhitiya Chauraha stocks everything from heavy-duty 750W mixer grinders and ISI-certified gas stoves to fire-retardant copper house wires, rechargeable emergency lanterns, and domestic sewing machine accessories.
              </p>
            </div>

            {/* Core commitments */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-white border border-stone-200 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#4A6038] shrink-0 mt-0.5" />
                <span className="text-xs text-stone-700 font-medium">
                  Direct customer assistance and proper product advice
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-stone-200 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#4A6038] shrink-0 mt-0.5" />
                <span className="text-xs text-stone-700 font-medium">
                  Zero hidden charges on spare parts or diagnostics
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-stone-200 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#4A6038] shrink-0 mt-0.5" />
                <span className="text-xs text-stone-700 font-medium">
                  Products tested on our counter before you carry them home
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-stone-200 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#4A6038] shrink-0 mt-0.5" />
                <span className="text-xs text-stone-700 font-medium">
                  Convenient location near Walterganj Police Station
                </span>
              </div>
            </div>

          </div>

          {/* Visual Showcase Side */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl overflow-hidden border border-stone-300 shadow-xl bg-stone-100">
              <img
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80"
                alt="Nandlal showroom appliances"
                className="w-full h-80 object-cover"
              />
              <div className="p-5 bg-white space-y-2">
                <h4 className="font-bold text-sm text-stone-900">Showroom Atmosphere</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Clean, well-organized displays allowing you to physically inspect build quality, metal thickness, burner weight, and safety features.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-stone-200 flex items-center justify-between text-xs">
              <span className="font-semibold text-stone-700">Location:</span>
              <span className="text-stone-600">Bhitiya Chauraha, Walterganj, Basti</span>
            </div>
          </div>

        </div>
      </section>

      {/* 5 Core Pillars */}
      <section className="bg-[#FAF8F5] py-14 border-y border-[#E8E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#CC5500]">
              Our Guiding Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A1D24]">
              What Defines Our Store
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm">
              We focus on practical quality, transparent advice, and dependable neighborhood service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {VALUE_PROPOSITIONS.map((pillar, i) => (
              <div key={pillar.id} className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#CC5500]/10 text-[#CC5500] font-bold text-xs flex items-center justify-center">
                  0{i + 1}
                </div>
                <h3 className="font-bold text-sm text-stone-900 leading-snug">{pillar.title}</h3>
                <p className="text-xs text-stone-600 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Connection & Target Customers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1A1D24] text-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-stone-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="p-2.5 rounded-xl bg-stone-800 text-[#CC5500] w-fit border border-stone-700">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-white">For Families & Homes</h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Dependable kitchen appliances, induction cookers, safe gas stoves, and cookware sets that make daily meals faster, healthier, and hassle-free.
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-2.5 rounded-xl bg-stone-800 text-[#9CAF88] w-fit border border-stone-700">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-white">For Nearby Villages</h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Rechargeable long-beam torches, emergency LED backup bulbs, rugged water immersion rods, and voltage-tolerant electrical hardware suited for rural conditions.
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-2.5 rounded-xl bg-stone-800 text-[#CC5500] w-fit border border-stone-700">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-white">For Tailors & Small Businesses</h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Genuine sewing machine motors, shuttle assemblies, bobbins, heavy extension boards, and rapid equipment repair to prevent working downtime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A1D24]">
          Visit Us at Bhitiya Chauraha
        </h2>
        <p className="text-stone-600 text-xs sm:text-sm max-w-lg mx-auto">
          We invite you to experience our showroom in person. We are located near Walterganj Police Station, next to Jaiswal Sweets, Basti.
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/products"
            className="px-6 py-3 rounded-xl bg-[#CC5500] hover:bg-[#B34A00] text-white text-xs font-bold transition-colors shadow"
          >
            Explore Product Range
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-xl bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 text-xs font-bold transition-colors"
          >
            Get Store Directions
          </Link>
        </div>
      </section>

    </div>
  );
};
