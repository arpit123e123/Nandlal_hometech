import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  MessageSquare, 
  ShieldCheck, 
  CheckCircle2, 
  MapPin, 
  Wrench, 
  Phone, 
  Share2, 
  Check, 
  ChevronRight
} from 'lucide-react';
import { PRODUCTS, getWhatsAppProductEnquiryUrl } from '../data/products';
import { CATEGORIES } from '../data/categories';
import { STORE_INFO } from '../data/storeInfo';
import { ProductCard } from '../components/ProductCard';

export const ProductDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [copied, setCopied] = useState(false);

  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="text-2xl font-bold text-stone-900">Product Not Found</h1>
        <p className="text-stone-600 text-sm">
          The requested product showcase could not be found or may have been updated.
        </p>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#CC5500] text-white text-xs font-bold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Product Catalog</span>
        </Link>
      </div>
    );
  }

  const category = CATEGORIES.find((c) => c.id === product.categoryId);
  const relatedProducts = PRODUCTS.filter(
    (p) => p.categoryId === product.categoryId && p.id !== product.id
  ).slice(0, 3);

  const [activeImage, setActiveImage] = useState<string>(product.image);

  const allImages = [
    product.image,
    ...(product.additionalImages || [])
  ];

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const whatsappUrl = getWhatsAppProductEnquiryUrl(product);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-stone-500 overflow-x-auto whitespace-nowrap pb-1">
        <Link to="/" className="hover:text-[#CC5500]">Home</Link>
        <ChevronRight className="w-3 h-3 text-stone-400 shrink-0" />
        <Link to="/products" className="hover:text-[#CC5500]">Products</Link>
        {category && (
          <>
            <ChevronRight className="w-3 h-3 text-stone-400 shrink-0" />
            <Link to={`/products?category=${category.id}`} className="hover:text-[#CC5500]">
              {category.name}
            </Link>
          </>
        )}
        <ChevronRight className="w-3 h-3 text-stone-400 shrink-0" />
        <span className="font-semibold text-stone-800 truncate max-w-xs">{product.name}</span>
      </nav>

      {/* Main Product Hero Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Image Gallery */}
        <div className="lg:col-span-6 space-y-4">
          {/* Main Large Image */}
          <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-white border border-[#E8E2D8] shadow-sm">
            <img
              src={activeImage}
              alt={product.name}
              className="w-full h-full object-cover object-center transition-all duration-300"
            />
            <div className="absolute top-3 left-3">
              <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#1A1D24] text-white">
                {product.brand}
              </span>
            </div>
            <div className="absolute top-3 right-3">
              <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#9CAF88]/20 text-[#4A6038] border border-[#9CAF88]/30 backdrop-blur-xs">
                {product.availabilityStatus}
              </span>
            </div>
          </div>

          {/* Thumbnails if multiple */}
          {allImages.length > 1 && (
            <div className="flex items-center gap-3">
              {allImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`w-20 h-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                    activeImage === img ? 'border-[#CC5500] scale-102' : 'border-stone-200 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* In-Store Counter Test Guarantee */}
          <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200 flex items-start gap-3 text-xs text-stone-700">
            <ShieldCheck className="w-5 h-5 text-[#4A6038] shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-stone-900">In-Store Inspection & Testing</p>
              <p className="text-stone-600 text-[11px] mt-0.5 leading-relaxed">
                Before you purchase any electrical appliance or stove, we can test and unbox it at our Bhitiya Chauraha counter to verify its motor, flame or cord integrity.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Details & Enquiry Box */}
        <div className="lg:col-span-6 space-y-6">
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-bold tracking-wider text-[#CC5500]">
                {category?.name || 'Department Essential'}
              </span>
              <button
                onClick={handleShare}
                className="text-stone-500 hover:text-stone-800 text-xs inline-flex items-center gap-1.5 p-1 rounded transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copied ? 'Link Copied!' : 'Share'}</span>
              </button>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1A1D24] leading-snug">
              {product.name}
            </h1>

            <p className="text-stone-500 text-xs">
              Item Ref: <span className="font-mono font-medium text-stone-800">{product.id.toUpperCase()}</span> • Verified Local Stock Reference
            </p>
          </div>

          {/* Price & Enquiry CTA Box */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border-2 border-[#CC5500]/30 shadow-md space-y-4">
            <div className="flex items-baseline justify-between border-b border-stone-100 pb-3">
              <div>
                <span className="text-xs text-stone-500 block">Indicative Retail Price</span>
                <span className="text-xl sm:text-2xl font-extrabold text-[#1A1D24]">
                  {product.indicativePrice || 'Contact for Price'}
                </span>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#CC5500]/10 text-[#CC5500]">
                {product.priceNote}
              </span>
            </div>

            <p className="text-xs text-stone-600 leading-relaxed">
              Price may vary slightly depending on current wholesale batches and promotional offers. Tap the button below to get an instant quote and verify today's in-store availability.
            </p>

            {/* Direct WhatsApp Action */}
            <div className="space-y-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-[#CC5500] hover:bg-[#B34A00] text-white text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#CC5500]/20 transition-all duration-200"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enquire Availability on WhatsApp</span>
              </a>

              <a
                href={`tel:${STORE_INFO.contact.phonePlaceholder.replace(/[^0-9+]/g, '')}`}
                className="w-full py-2.5 px-4 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#CC5500]" />
                <span>Call Store Desk: {STORE_INFO.contact.phoneDisplay}</span>
              </a>
            </div>

            <div className="pt-2 flex items-center justify-between text-[11px] text-stone-500">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#CC5500]" /> Showroom: Bhitiya Chauraha
              </span>
              <span>Mon–Sat 9:00 AM – 8:30 PM</span>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h3 className="font-bold text-sm text-[#1A1D24]">About this Product</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {product.fullDescription}
            </p>
          </div>

          {/* Key Features List */}
          <div className="space-y-2">
            <h3 className="font-bold text-sm text-[#1A1D24]">Key Highlights</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {product.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-[#4A6038] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Specifications Table */}
          <div className="space-y-2 pt-2">
            <h3 className="font-bold text-sm text-[#1A1D24]">Specifications</h3>
            <div className="rounded-xl border border-stone-200 overflow-hidden divide-y divide-stone-200 text-xs">
              {product.keySpecs.map((spec, idx) => (
                <div key={idx} className="grid grid-cols-12 p-3 bg-white odd:bg-stone-50/50">
                  <span className="col-span-5 font-semibold text-stone-700">{spec.label}</span>
                  <span className="col-span-7 text-stone-600">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Repair Support Note */}
          <div className="p-4 rounded-xl bg-[#FAF8F5] border border-stone-200 flex items-start gap-3 text-xs">
            <Wrench className="w-4 h-4 text-[#CC5500] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-stone-900 block">Long-Term Spare Parts & Repair Assurance</span>
              <p className="text-stone-600 text-[11px] mt-0.5">
                We service what we sell. All spare parts (burners, gaskets, carbon brushes, jar blades) can be sourced and repaired right at our shop.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="pt-12 border-t border-[#E8E2D8] space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#9CAF88]">More in this department</span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1D24]">Related Demonstration Products</h2>
            </div>
            <Link
              to={`/products?category=${product.categoryId}`}
              className="text-xs font-bold text-[#CC5500] hover:underline"
            >
              View All {category?.name} →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}

    </div>
  );
};
