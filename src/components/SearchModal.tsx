import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, Tag, Wrench, Layers } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import { REPAIR_SERVICES } from '../data/services';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // toggled from parent
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const normalizedQuery = query.toLowerCase().trim();

  const filteredProducts = normalizedQuery
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(normalizedQuery) ||
          p.brand.toLowerCase().includes(normalizedQuery) ||
          p.shortDescription.toLowerCase().includes(normalizedQuery) ||
          p.categoryId.toLowerCase().includes(normalizedQuery)
      )
    : [];

  const filteredCategories = normalizedQuery
    ? CATEGORIES.filter(
        (c) =>
          c.name.toLowerCase().includes(normalizedQuery) ||
          c.shortDescription.toLowerCase().includes(normalizedQuery)
      )
    : [];

  const filteredServices = normalizedQuery
    ? REPAIR_SERVICES.filter(
        (s) =>
          s.title.toLowerCase().includes(normalizedQuery) ||
          s.shortDescription.toLowerCase().includes(normalizedQuery) ||
          s.commonIssues.some((issue) => issue.toLowerCase().includes(normalizedQuery))
      )
    : [];

  const hasResults =
    filteredProducts.length > 0 ||
    filteredCategories.length > 0 ||
    filteredServices.length > 0;

  const handleSelect = (url: string) => {
    navigate(url);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-20 flex items-start justify-center">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-stone-900/60 backdrop-blur-xs transition-opacity animate-in fade-in"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#E8E2D8] overflow-hidden z-10 animate-in zoom-in-95 duration-200">
        
        {/* Search Input Bar */}
        <div className="relative flex items-center px-4 border-b border-stone-200 bg-[#FAF8F5]">
          <Search className="w-5 h-5 text-[#CC5500] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, gas stove parts, mixer repair, electricals..."
            className="w-full py-4 pl-3 pr-10 text-stone-900 placeholder:text-stone-400 text-sm bg-transparent border-0 focus:outline-hidden"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-stone-400 hover:text-stone-600 rounded-lg mr-2"
              aria-label="Clear search input"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs font-semibold text-stone-500 hover:text-stone-800 bg-stone-200/80 rounded-md"
          >
            ESC
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-5">
          {!normalizedQuery && (
            <div className="py-6 text-center space-y-3">
              <p className="text-xs text-stone-500 font-medium">
                Try searching for items like:
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {['Mixer Grinder', 'Gas Stove 3-Burner', 'Induction Cooktop', 'Cooker Gasket', 'Sewing Machine Motor', 'Copper Wire', 'Rechargeable Torch'].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3 py-1 rounded-full bg-stone-100 hover:bg-[#FFF4EC] hover:text-[#CC5500] text-stone-700 text-xs font-medium border border-stone-200 transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {normalizedQuery && !hasResults && (
            <div className="py-12 text-center space-y-2">
              <p className="text-sm font-semibold text-stone-800">
                No exact matches found for "{query}"
              </p>
              <p className="text-xs text-stone-500 max-w-sm mx-auto">
                We might have this item at our Bhitiya Chauraha showroom. Please send a quick message to our team on WhatsApp for verification.
              </p>
              <div className="pt-2">
                <a
                  href={`https://wa.me/919450000000?text=Hello%20Nandlal%20Hometech,%20do%20you%20have%20${encodeURIComponent(query)}%20in%20stock?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#CC5500] text-white text-xs font-semibold"
                >
                  <span>Ask Store on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

          {/* Products Results */}
          {filteredProducts.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                <Tag className="w-3.5 h-3.5 text-[#CC5500]" />
                <span>Matching Products ({filteredProducts.length})</span>
              </div>
              <div className="space-y-1.5">
                {filteredProducts.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => handleSelect(`/products/${product.slug}`)}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-stone-50 border border-transparent hover:border-stone-200 flex items-center justify-between group transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-10 h-10 rounded-lg object-cover bg-stone-100"
                      />
                      <div>
                        <h5 className="text-xs font-bold text-stone-900 group-hover:text-[#CC5500] line-clamp-1">
                          {product.name}
                        </h5>
                        <p className="text-[11px] text-stone-500">
                          {product.brand} • <span className="text-[#CC5500] font-medium">{product.priceNote}</span>
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-[#CC5500] group-hover:translate-x-1 transition-transform shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Categories Results */}
          {filteredCategories.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                <Layers className="w-3.5 h-3.5 text-[#9CAF88]" />
                <span>Departments & Categories ({filteredCategories.length})</span>
              </div>
              <div className="space-y-1.5">
                {filteredCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleSelect(`/products?category=${category.id}`)}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-stone-50 border border-transparent hover:border-stone-200 flex items-center justify-between group transition-colors cursor-pointer"
                  >
                    <div>
                      <h5 className="text-xs font-bold text-stone-900 group-hover:text-[#CC5500]">
                        {category.name}
                      </h5>
                      <p className="text-[11px] text-stone-500 line-clamp-1">
                        {category.shortDescription}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-[#CC5500] group-hover:translate-x-1 transition-transform shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Repair Services Results */}
          {filteredServices.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                <Wrench className="w-3.5 h-3.5 text-[#CC5500]" />
                <span>Repair Counter Services ({filteredServices.length})</span>
              </div>
              <div className="space-y-1.5">
                {filteredServices.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => handleSelect(`/repairing-services#${service.id}`)}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-stone-50 border border-transparent hover:border-stone-200 flex items-center justify-between group transition-colors cursor-pointer"
                  >
                    <div>
                      <h5 className="text-xs font-bold text-stone-900 group-hover:text-[#CC5500]">
                        {service.title}
                      </h5>
                      <p className="text-[11px] text-stone-500 line-clamp-1">
                        {service.diagnosticProcess}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-[#CC5500] group-hover:translate-x-1 transition-transform shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-stone-50 border-t border-stone-200 flex items-center justify-between text-[11px] text-stone-500">
          <span>Search in showroom stock & repair desk</span>
          <span>Bhitiya Chauraha, Basti</span>
        </div>

      </div>
    </div>
  );
};
