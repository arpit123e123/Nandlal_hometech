import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Wrench, 
  ShoppingBag, 
  MapPin, 
  Clock, 
  Phone,
  MessageSquare, 
  ShieldCheck, 
  CheckCircle, 
  Sparkles,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { STORE_INFO, VALUE_PROPOSITIONS } from '../data/storeInfo';
import { CATEGORIES } from '../data/categories';
import { PRODUCTS } from '../data/products';
import { REPAIR_SERVICES, REPAIR_PROCESS_STEPS } from '../data/services';
import { ProductCard } from '../components/ProductCard';
import { CategoryCard } from '../components/CategoryCard';
import { ServiceCard } from '../components/ServiceCard';

export const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'featured' | 'kitchen' | 'electrical'>('all');
  
  // Quick contact form state
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    interest: 'General Product Inquiry',
    message: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setFormSubmitted(true);
  };

  const featuredProductsList = PRODUCTS.filter((p) => {
    if (activeTab === 'featured') return p.isFeatured;
    if (activeTab === 'kitchen') return p.categoryId === 'kitchen-appliances' || p.categoryId === 'gas-stoves-cooktops';
    if (activeTab === 'electrical') return p.categoryId === 'electrical-products' || p.categoryId === 'torches-lighting';
    return true; // 'all'
  }).slice(0, 6);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-6 sm:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-linear-to-b from-[#1C2028] via-[#171A21] to-[#121419] border border-stone-800 text-white overflow-hidden shadow-2xl">
            
            {/* Subtle atmospheric accent glow */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#CC5500]/15 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#9CAF88]/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 lg:p-14 relative z-10">
              
              {/* Left Column: Headlines & CTAs */}
              <div className="lg:col-span-7 space-y-6 sm:space-y-8">
                
                {/* Location Pill */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-800/80 border border-stone-700/80 text-xs text-stone-300">
                  <span className="w-2 h-2 rounded-full bg-[#CC5500] animate-ping"></span>
                  <MapPin className="w-3.5 h-3.5 text-[#CC5500]" />
                  <span>Bhitiya Chauraha, Walterganj Road, Basti</span>
                </div>

                {/* Primary Headlines */}
                <div className="space-y-3 sm:space-y-4">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.12] text-white">
                    Everything Your Home Needs. <br className="hidden sm:inline" />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FFF0E5] via-[#FFB380] to-[#CC5500]">
                      All Under One Roof.
                    </span>
                  </h1>

                  <p className="text-stone-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl font-normal">
                    Quality home appliances, kitchen essentials, electrical products and reliable repairing services, all in one place.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                  <Link
                    to="/products"
                    className="px-6 py-3.5 rounded-xl bg-[#CC5500] hover:bg-[#B34A00] text-white text-sm font-bold shadow-lg shadow-[#CC5500]/25 transition-all duration-200 flex items-center gap-2 group"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Explore Products</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    to="/repairing-services"
                    className="px-6 py-3.5 rounded-xl bg-stone-800/90 hover:bg-stone-700/90 text-white border border-stone-600/60 text-sm font-semibold transition-all duration-200 flex items-center gap-2"
                  >
                    <Wrench className="w-4 h-4 text-[#9CAF88]" />
                    <span>Get Repair Service</span>
                  </Link>

                  <Link
                    to="/contact"
                    className="px-5 py-3.5 rounded-xl text-stone-300 hover:text-white text-sm font-medium hover:underline flex items-center gap-1.5"
                  >
                    <span>Contact Us</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Highlights mini strip */}
                <div className="pt-4 border-t border-stone-800/90 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-stone-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#9CAF88] shrink-0" />
                    <span>8 Product Departments</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#9CAF88] shrink-0" />
                    <span>In-Store Repair Counter</span>
                  </div>
                  <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                    <CheckCircle className="w-4 h-4 text-[#9CAF88] shrink-0" />
                    <span>Genuine Spares Available</span>
                  </div>
                </div>

              </div>

              {/* Right Column: Premium Showroom Product Visual */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  
                  {/* Decorative Frame */}
                  <div className="relative rounded-2xl overflow-hidden border-2 border-stone-700/70 shadow-2xl bg-stone-900 group">
                    <img
                      src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=85"
                      alt="Nandlal Hometech showroom premium kitchen appliances and utilities"
                      className="w-full h-80 sm:h-96 lg:h-[420px] object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121419] via-black/20 to-transparent"></div>

                    {/* Showroom Visual Floating Badges */}
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#1A1D24]/90 backdrop-blur-md border border-stone-700/80 shadow-lg text-xs space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white text-sm">Nandlal Showroom Counter</span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#9CAF88]/20 text-[#A3B899] border border-[#9CAF88]/30">
                          Walk-ins Welcome
                        </span>
                      </div>
                      <p className="text-stone-300 text-[11px] leading-snug">
                        Inspect appliances in person, compare brass burner stoves, test mixer grinder motors, and get immediate repair advice.
                      </p>
                    </div>

                    <div className="absolute top-4 right-4 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-white text-[11px] font-medium flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#CC5500]" />
                      <span>Open: 9:00 AM – 8:30 PM</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 2. PRODUCT CATEGORIES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#CC5500] mb-1.5">
              <span className="w-2 h-2 rounded-full bg-[#CC5500]"></span>
              Complete Household Range
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1D24] tracking-tight">
              Explore Our Product Categories
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-1 max-w-xl">
              Curated household goods, high-durability kitchen gear, electrical components, and sewing machine accessories for homes and small businesses.
            </p>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#CC5500] hover:text-[#B34A00] transition-colors"
          >
            <span>Browse Full Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 8 Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {CATEGORIES.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </section>

      {/* 3. FEATURED PRODUCTS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F6F2EB]/60 rounded-3xl p-6 sm:p-10 border border-[#E8E2D8]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#9CAF88] mb-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#CC5500]" />
                Showroom Highlights
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A1D24] tracking-tight">
                Featured Demonstration Products
              </h2>
              <p className="text-stone-600 text-xs sm:text-sm mt-1 max-w-xl">
                Demonstration inventory showing typical home appliances, cooktops, and accessories available at our store. Contact us via WhatsApp for live prices and stock.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 bg-stone-200/70 p-1 rounded-xl">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === 'all'
                    ? 'bg-white text-[#1A1D24] shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                All Showcase
              </button>
              <button
                onClick={() => setActiveTab('featured')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === 'featured'
                    ? 'bg-white text-[#1A1D24] shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Bestsellers
              </button>
              <button
                onClick={() => setActiveTab('kitchen')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === 'kitchen'
                    ? 'bg-white text-[#1A1D24] shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Kitchen & Stoves
              </button>
              <button
                onClick={() => setActiveTab('electrical')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === 'electrical'
                    ? 'bg-white text-[#1A1D24] shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Electrical & Lights
              </button>
            </div>
          </div>

          {/* Demonstration Notice */}
          <div className="mb-6 px-4 py-2.5 rounded-xl bg-white border border-stone-200/80 text-stone-600 text-xs flex items-center justify-between">
            <span>
              <strong className="text-stone-800">Notice:</strong> Sample products only for demonstration purposes. We do not invent actual shop inventory, brands or prices online.
            </span>
            <span className="hidden sm:inline font-semibold text-[#CC5500]">
              Inquire on WhatsApp for current stock
            </span>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProductsList.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 text-xs font-bold transition-colors shadow-xs"
            >
              <span>View All Store Products ({PRODUCTS.length} Sample Items)</span>
              <ArrowRight className="w-4 h-4 text-[#CC5500]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. REPAIRING SERVICES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-stone-800 rounded-3xl bg-[#1A1D24] text-white p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-2xl">
          
          <div className="relative z-10">
            {/* Section Header */}
            <div className="max-w-3xl space-y-3 mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CC5500]/20 text-[#FF8533] border border-[#CC5500]/30 text-xs font-bold uppercase tracking-wider">
                <Wrench className="w-3.5 h-3.5" />
                In-Store Service Desk
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                Reliable Repairing. Trusted Local Service.
              </h2>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                Don’t discard valuable home appliances. Our in-store technician desk at Bhitiya Chauraha provides hands-on diagnosis, transparent estimates, and genuine spare parts replacement. Bring your items directly to our counter.
              </p>
            </div>

            {/* 6 Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {REPAIR_SERVICES.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>

            {/* How our repair desk works strip */}
            <div className="mt-12 pt-8 border-t border-stone-800/80">
              <h3 className="text-sm font-bold uppercase tracking-wider text-stone-400 mb-6 text-center">
                How Our Repair Counter Works: Simple & Transparent
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {REPAIR_PROCESS_STEPS.map((step) => (
                  <div key={step.step} className="p-4 rounded-xl bg-[#222731] border border-stone-700/60 text-xs space-y-2">
                    <span className="text-[#CC5500] font-mono font-extrabold text-base block">{step.step}</span>
                    <h4 className="font-bold text-white text-sm">{step.title}</h4>
                    <p className="text-stone-400 leading-relaxed text-[11px]">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Banner */}
            <div className="mt-10 p-5 rounded-2xl bg-gradient-to-r from-[#20242D] to-[#2B313D] border border-stone-700 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-base font-bold text-white">Have a faulty appliance or leaking pressure cooker?</h4>
                <p className="text-xs text-stone-300 mt-0.5">
                  Bring it to our Bhitiya Chauraha counter or check with us on WhatsApp beforehand.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <Link
                  to="/repairing-services"
                  className="px-5 py-2.5 rounded-xl bg-[#CC5500] hover:bg-[#B34A00] text-white text-xs font-bold transition-colors shadow flex items-center gap-1.5"
                >
                  <Wrench className="w-3.5 h-3.5" />
                  <span>Request a Repair</span>
                </Link>
                <a
                  href={`https://wa.me/${STORE_INFO.contact.whatsappNumber}?text=Hello%20Nandlal%20Hometech,%20I%20need%20appliance%20repairing%20assistance.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-stone-700 hover:bg-stone-600 text-white text-xs font-semibold transition-colors flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Ask Technician</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#CC5500]">
            <ShieldCheck className="w-4 h-4" />
            Built on Local Trust
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1D24] tracking-tight">
            Why Choose Nandlal Hometech?
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm">
            We operate on genuine values: straightforward pricing, practical repairing experience, and friendly in-person guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {VALUE_PROPOSITIONS.map((prop, idx) => (
            <div
              key={prop.id}
              className="p-5 rounded-2xl bg-white border border-[#E8E2D8] hover:border-[#CC5500] shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] border border-stone-200 flex items-center justify-center font-bold text-xs text-[#CC5500]">
                  0{idx + 1}
                </div>
                <h3 className="font-bold text-sm text-[#1A1D24] leading-snug">
                  {prop.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {prop.description}
                </p>
              </div>
              <div className="pt-2 border-t border-stone-100 flex items-center gap-1 text-[11px] font-semibold text-[#9CAF88]">
                <CheckCircle className="w-3.5 h-3.5" /> Verified Store Value
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. ABOUT US HIGHLIGHT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#E8E2D8] overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Story text */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 space-y-5 flex flex-col justify-center">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#CC5500]">
                <span>Our Heritage & Purpose</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A1D24] tracking-tight">
                A Family-Run Business Dedicated to Local Homes & Villages
              </h2>
              <div className="space-y-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                <p>
                  <strong>NANDLAL HOMETECH & UTILITY</strong> was founded to solve a frequent problem faced by local families in Basti and Walterganj: running to separate distant markets for kitchen appliances, then searching elsewhere for electrical hardware, and struggling to find dependable technicians when a mixer grinder or gas stove broke down.
                </p>
                <p>
                  We brought all these everyday household essentials under one welcoming roof at Bhitiya Chauraha. Whether you need a heavy-duty mixer grinder capable of grinding hard turmeric, fire-safe copper wiring for your newly constructed rooms, a replacement gasket for your cooker, or prompt repairs for a humming fan, our family-run store is here to help with honest advice.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  to="/about"
                  className="px-5 py-2.5 rounded-xl bg-[#1A1D24] hover:bg-stone-800 text-white text-xs font-bold transition-colors inline-flex items-center gap-2"
                >
                  <span>Read Our Full Story</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#CC5500]" />
                </Link>
                <span className="text-xs text-stone-500">
                  Serving Walterganj, Bhitiya, and surrounding Basti areas
                </span>
              </div>
            </div>

            {/* Storefront Visual */}
            <div className="lg:col-span-5 bg-[#FAF8F5] p-6 lg:p-10 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-stone-200">
              <div className="w-full space-y-4">
                <div className="relative rounded-2xl overflow-hidden border border-stone-300 shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
                    alt="Technician and spare parts desk"
                    className="w-full h-56 sm:h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                    <p className="text-white text-xs font-semibold">
                      In-store repair workbench & genuine spare components
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-white border border-stone-200">
                    <span className="font-bold text-stone-900 block">Personal Care</span>
                    <span className="text-stone-500 text-[11px]">Direct guidance from the store owner & technicians</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-stone-200">
                    <span className="font-bold text-stone-900 block">Honest Assessment</span>
                    <span className="text-stone-500 text-[11px]">We only replace parts that are truly damaged</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. LOCATION & QUICK CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF8F5] rounded-3xl border border-[#E8E2D8] p-6 sm:p-10">
          
          <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#CC5500]">
              <MapPin className="w-3.5 h-3.5" />
              Visit Our Retail Showroom
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A1D24]">
              Location & Quick Contact
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm">
              Conveniently located at Bhitiya Chauraha near Walterganj Police Station. Drop by for product demonstrations and instant counter servicing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Location Card & Interactive Map Placeholder */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-3">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#CC5500]/15 text-[#CC5500] shrink-0 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm">Store Address</h4>
                    <p className="text-stone-700 text-xs sm:text-sm mt-0.5 leading-relaxed font-medium">
                      {STORE_INFO.address.fullFormatted}
                    </p>
                    <p className="text-stone-500 text-xs mt-1">
                      Landmark: Next to Jaiswal Sweets, Walterganj Road Junction
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-stone-100 text-xs">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#9CAF88] shrink-0" />
                    <div>
                      <span className="font-semibold text-stone-800 block">Store Hours</span>
                      <span className="text-stone-500 text-[11px]">{STORE_INFO.timings.weekdays}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#CC5500] shrink-0" />
                    <div>
                      <span className="font-semibold text-stone-800 block">Phone Desk</span>
                      <span className="text-stone-500 text-[11px]">{STORE_INFO.contact.phoneDisplay}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Styled Interactive Map Location Preview */}
              <div className="relative rounded-2xl overflow-hidden border border-stone-300 shadow-inner bg-[#EBE7DF] aspect-16/9 sm:aspect-21/9 flex items-center justify-center text-center p-6">
                <div className="max-w-md space-y-2 z-10">
                  <div className="w-10 h-10 rounded-full bg-[#CC5500] text-white flex items-center justify-center mx-auto shadow-md">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-stone-900">
                    Bhitiya Chauraha Showroom Map
                  </h4>
                  <p className="text-xs text-stone-600">
                    Near Walterganj Police Station, Next to Jaiswal Sweets, Basti, UP
                  </p>
                  <div className="pt-1">
                    <a
                      href="https://maps.google.com/?q=Bhitiya+Chauraha+Walterganj+Basti+Uttar+Pradesh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#1A1D24] text-white text-xs font-semibold hover:bg-stone-800 transition-colors shadow"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Subtle map grid graphic */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#1A1D24_1px,transparent_1px)] [background-size:16px_16px]"></div>
              </div>

            </div>

            {/* Right: Quick Contact & Inquiry Form */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-2xl border border-stone-200 shadow-sm">
              <h3 className="font-bold text-base text-[#1A1D24] mb-1">
                Send a Message to Store
              </h3>
              <p className="text-xs text-stone-500 mb-5">
                Have a question about a product model or repair service? Send an inquiry directly.
              </p>

              {formSubmitted ? (
                <div className="p-5 rounded-xl bg-[#9CAF88]/20 border border-[#9CAF88]/40 text-stone-800 text-xs space-y-2 text-center animate-in fade-in">
                  <div className="w-8 h-8 rounded-full bg-[#4A6038] text-white flex items-center justify-center mx-auto">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm">Message Received!</h4>
                  <p className="text-stone-600 text-[11px]">
                    Thank you, {formData.name}. Our store representative will get in touch with you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', phone: '', interest: 'General Product Inquiry', message: '' });
                    }}
                    className="text-[#CC5500] font-semibold text-xs underline pt-1"
                  >
                    Send another query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3.5 text-xs">
                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">
                      Your Name <span className="text-[#CC5500]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-3 py-2.5 rounded-xl border border-stone-300 focus:border-[#CC5500] focus:ring-1 focus:ring-[#CC5500] text-xs outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">
                      Phone Number (WhatsApp) <span className="text-[#CC5500]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 98765 43210"
                      className="w-full px-3 py-2.5 rounded-xl border border-stone-300 focus:border-[#CC5500] focus:ring-1 focus:ring-[#CC5500] text-xs outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-stone-300 focus:border-[#CC5500] focus:ring-1 focus:ring-[#CC5500] text-xs outline-hidden bg-white"
                    >
                      <option>General Product Inquiry</option>
                      <option>Gas Stove / Cooker Requirement</option>
                      <option>Mixer Grinder or Kitchen Appliance</option>
                      <option>Electrical Wire & Switches</option>
                      <option>Appliance Repairing Service</option>
                      <option>Sewing Machine Accessories</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">
                      Your Requirement or Question
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Mention the item model or issue with your appliance..."
                      className="w-full px-3 py-2 rounded-xl border border-stone-300 focus:border-[#CC5500] focus:ring-1 focus:ring-[#CC5500] text-xs outline-hidden resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-[#CC5500] hover:bg-[#B34A00] text-white font-bold text-xs transition-colors shadow-xs cursor-pointer"
                  >
                    Submit Inquiry
                  </button>

                  <div className="text-center pt-1">
                    <a
                      href={`https://wa.me/${STORE_INFO.contact.whatsappNumber}?text=Hello%20Nandlal%20Hometech,%20I%20have%20an%20enquiry.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-500 hover:text-[#CC5500] text-[11px] inline-flex items-center gap-1"
                    >
                      <MessageSquare className="w-3 h-3 text-[#25D366]" />
                      Or click here to message instantly on WhatsApp
                    </a>
                  </div>
                </form>
              )}

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
