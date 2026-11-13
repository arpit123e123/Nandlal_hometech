import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import type { Product } from '../data/products';
import { getWhatsAppProductEnquiryUrl } from '../data/products';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const whatsappUrl = getWhatsAppProductEnquiryUrl(product);

  const getStatusBadge = (status: Product['availabilityStatus']) => {
    switch (status) {
      case 'In Stock at Store':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#9CAF88]/15 text-[#4A6038] border border-[#9CAF88]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4A6038] animate-pulse"></span>
            In Stock at Store
          </span>
        );
      case 'Popular Counter Item':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#CC5500]/10 text-[#CC5500] border border-[#CC5500]/25">
            <Tag className="w-2.5 h-2.5" />
            Popular Counter Item
          </span>
        );
      case 'Available on Order':
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-stone-100 text-stone-600 border border-stone-200">
            Available on Order
          </span>
        );
    }
  };

  return (
    <div className="group bg-white rounded-2xl border border-[#E8E2D8] hover:border-[#CC5500]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden h-full">
      {/* Product Image Area */}
      <div className="relative aspect-4/3 overflow-hidden bg-[#F5F2EB]/60">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <div className="pointer-events-auto">
            {getStatusBadge(product.availabilityStatus)}
          </div>
          <span className="px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-[#1A1D24]/85 text-white backdrop-blur-xs">
            {product.brand}
          </span>
        </div>

        {/* Bottom subtle overlay info */}
        <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[11px] text-white/90">
          <span className="bg-black/50 backdrop-blur-xs px-2 py-0.5 rounded text-[10px]">
            ID: {product.id.toUpperCase()}
          </span>
          <span className="bg-black/50 backdrop-blur-xs px-2 py-0.5 rounded text-[10px] flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-[#9CAF88]" /> Store Verified
          </span>
        </div>
      </div>

      {/* Product Body Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          {/* Title */}
          <Link 
            to={`/products/${product.slug}`}
            className="block text-base font-bold text-[#1A1D24] group-hover:text-[#CC5500] transition-colors line-clamp-2 leading-snug"
          >
            {product.name}
          </Link>

          {/* Short description */}
          <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Quick Specs Snippet */}
          <div className="pt-2 border-t border-stone-100 grid grid-cols-1 gap-1">
            {product.keySpecs.slice(0, 2).map((spec, i) => (
              <div key={i} className="flex items-center text-[11px] text-stone-500">
                <span className="font-medium text-stone-700 w-24 shrink-0">{spec.label}:</span>
                <span className="truncate">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Price & Action Footer */}
        <div className="pt-4 border-t border-stone-100/90 space-y-3">
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-[11px] text-stone-400 block font-medium">Store Price</span>
              {product.indicativePrice ? (
                <span className="text-sm font-bold text-[#1A1D24] tracking-tight">
                  {product.indicativePrice}
                </span>
              ) : (
                <span className="text-xs font-semibold text-[#CC5500]">
                  Contact for Price
                </span>
              )}
            </div>

            <span className="text-[10px] text-stone-400 italic">
              Bhitiya Showroom
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            <Link
              to={`/products/${product.slug}`}
              className="py-2 px-3 rounded-xl border border-stone-200 hover:border-[#1A1D24] bg-stone-50 hover:bg-white text-stone-800 text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1"
            >
              <span>Details</span>
              <ArrowRight className="w-3 h-3" />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Enquire about ${product.name} on WhatsApp`}
              className="py-2 px-3 rounded-xl bg-[#CC5500] hover:bg-[#B34A00] text-white text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1.5 shadow-xs"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Enquire</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
