import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers } from 'lucide-react';
import type { Category } from '../data/categories';

interface CategoryCardProps {
  category: Category;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <div className="group relative rounded-2xl overflow-hidden bg-white border border-[#E8E2D8] hover:border-[#CC5500] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      {/* Category Image with dark subtle gradient */}
      <div className="relative aspect-16/10 overflow-hidden bg-stone-100">
        <img
          src={category.image}
          alt={category.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#16191E]/80 via-black/20 to-transparent"></div>

        {/* Counter Badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/95 text-[#1A1D24] shadow-xs backdrop-blur-xs">
            <Layers className="w-3 h-3 text-[#CC5500]" />
            {category.itemCountDemo}
          </span>
        </div>

        {/* Title overlay in image header */}
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#FFF4EC] transition-colors leading-tight drop-shadow-sm">
            {category.name}
          </h3>
        </div>
      </div>

      {/* Body content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
        <p className="text-xs text-stone-600 leading-relaxed line-clamp-2">
          {category.shortDescription}
        </p>

        {/* Key Item pills */}
        <div className="flex flex-wrap gap-1.5">
          {category.featuredItems.slice(0, 3).map((item, i) => (
            <span
              key={i}
              className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-[#FAF8F5] text-stone-600 border border-stone-200"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Explore Button */}
        <div className="pt-2 border-t border-stone-100">
          <Link
            to={`/products?category=${category.id}`}
            className="w-full py-2.5 px-3 rounded-xl bg-stone-50 hover:bg-[#CC5500] text-stone-800 hover:text-white border border-stone-200 hover:border-[#CC5500] text-xs font-semibold transition-all duration-200 flex items-center justify-between group/btn shadow-xs"
          >
            <span>Explore Products</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};
