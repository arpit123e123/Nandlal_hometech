import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Search, 
  X, 
  SlidersHorizontal, 
  Layers, 
  ShieldAlert, 
  Check, 
  ArrowUpDown 
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import { ProductCard } from '../components/ProductCard';

export const Products: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'name-asc' | 'name-desc'>('featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState<boolean>(false);

  // Sync category param with state
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    if (catId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', catId);
    }
    setSearchParams(searchParams);
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== 'all' && product.categoryId !== selectedCategory) {
        return false;
      }

      // Status filter
      if (selectedStatus !== 'all' && product.availabilityStatus !== selectedStatus) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesDesc = product.shortDescription.toLowerCase().includes(query);
        const matchesBrand = product.brand.toLowerCase().includes(query);
        const matchesCat = product.categoryId.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesBrand && !matchesCat) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
      if (sortBy === 'name-desc') return b.name.localeCompare(a.name);
      // 'featured'
      if (a.isFeatured && !b.isFeatured) return -1;
      if (!a.isFeatured && b.isFeatured) return 1;
      return 0;
    });
  }, [selectedCategory, selectedStatus, searchQuery, sortBy]);

  const activeCategoryDetails = CATEGORIES.find((c) => c.id === selectedCategory);

  const clearAllFilters = () => {
    setSelectedCategory('all');
    setSelectedStatus('all');
    setSearchQuery('');
    setSortBy('featured');
    searchParams.delete('category');
    setSearchParams(searchParams);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      
      {/* Page Title & Demonstration Disclaimer */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#CC5500]">
          <Layers className="w-3.5 h-3.5" />
          <span>Retail Inventory Showcase</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1A1D24] tracking-tight">
          Home Appliances & Utility Products
        </h1>
        <p className="text-stone-600 text-xs sm:text-sm max-w-2xl leading-relaxed">
          Browse kitchen cooktops, heavy mixer grinders, electrical wiring, sewing machine accessories, and genuine spare parts available at our showroom in Bhitiya Chauraha, Basti.
        </p>

        {/* Transparent Disclaimer Box */}
        <div className="p-3.5 rounded-2xl bg-[#FFF8F2] border border-[#CC5500]/30 text-stone-700 text-xs flex items-start gap-3">
          <ShieldAlert className="w-4 h-4 text-[#CC5500] shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-stone-900 block">Demonstration Stock Notice:</span>
            <p className="text-[11px] text-stone-600 mt-0.5 leading-snug">
              The products listed below are sample demonstration items representing our retail categories. We do not invent live shop inventory or fluctuating prices online. Please send a quick WhatsApp enquiry or visit our Bhitiya counter for actual real-time stock and today's best price.
            </p>
          </div>
        </div>
      </div>

      {/* Search & Top Action Bar */}
      <div className="p-4 rounded-2xl bg-white border border-[#E8E2D8] shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        
        {/* Search input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by product name, model, appliance type..."
            className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-stone-200 focus:border-[#CC5500] focus:ring-1 focus:ring-[#CC5500] text-xs outline-hidden bg-[#FAF8F5]/60"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Sort & Mobile Filter Toggle */}
        <div className="flex items-center gap-2">
          {/* Mobile filter button */}
          <button
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            className="md:hidden flex-1 py-2.5 px-3 rounded-xl border border-stone-200 bg-stone-50 text-xs font-semibold text-stone-700 flex items-center justify-center gap-1.5"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#CC5500]" />
            <span>Filters ({selectedCategory !== 'all' ? '1 Active' : 'All'})</span>
          </button>

          {/* Sort dropdown */}
          <div className="flex items-center gap-1.5 text-xs text-stone-600">
            <ArrowUpDown className="w-3.5 h-3.5 text-stone-400 shrink-0" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="py-2.5 px-3 rounded-xl border border-stone-200 bg-white text-xs font-medium text-stone-800 outline-hidden focus:border-[#CC5500]"
            >
              <option value="featured">Sort by: Featured</option>
              <option value="name-asc">Sort by: Name (A to Z)</option>
              <option value="name-desc">Sort by: Name (Z to A)</option>
            </select>
          </div>
        </div>

      </div>

      {/* Main Layout: Sidebar Filters + Products Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Desktop Sidebar Filter */}
        <aside className={`lg:col-span-3 space-y-6 ${mobileFilterOpen ? 'block' : 'hidden lg:block'}`}>
          
          {/* Categories Filter Block */}
          <div className="p-5 rounded-2xl bg-white border border-[#E8E2D8] shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-sm text-[#1A1D24]">Categories</h3>
              {(selectedCategory !== 'all' || selectedStatus !== 'all' || searchQuery) && (
                <button
                  onClick={clearAllFilters}
                  className="text-[11px] font-semibold text-[#CC5500] hover:underline"
                >
                  Reset All
                </button>
              )}
            </div>

            <div className="space-y-1">
              <button
                onClick={() => handleCategoryChange('all')}
                className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-colors flex items-center justify-between cursor-pointer ${
                  selectedCategory === 'all'
                    ? 'bg-[#1A1D24] text-white font-semibold'
                    : 'text-stone-700 hover:bg-stone-100'
                }`}
              >
                <span>All Departments</span>
                <span className="text-[10px] opacity-75">{PRODUCTS.length}</span>
              </button>

              {CATEGORIES.map((cat) => {
                const count = PRODUCTS.filter((p) => p.categoryId === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-colors flex items-center justify-between cursor-pointer ${
                      selectedCategory === cat.id
                        ? 'bg-[#CC5500] text-white font-semibold'
                        : 'text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    <span className="line-clamp-1">{cat.name}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded ${
                      selectedCategory === cat.id ? 'bg-white/20' : 'bg-stone-100 text-stone-500'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Availability Status Filter */}
          <div className="p-5 rounded-2xl bg-white border border-[#E8E2D8] shadow-xs space-y-3">
            <h3 className="font-bold text-sm text-[#1A1D24]">Counter Status</h3>
            <div className="space-y-1 text-xs">
              {[
                { id: 'all', label: 'All Demonstration Items' },
                { id: 'In Stock at Store', label: 'In Stock at Store' },
                { id: 'Popular Counter Item', label: 'Popular Counter Item' }
              ].map((st) => (
                <button
                  key={st.id}
                  onClick={() => setSelectedStatus(st.id)}
                  className={`w-full text-left px-3 py-2 rounded-xl font-medium transition-colors flex items-center justify-between cursor-pointer ${
                    selectedStatus === st.id
                      ? 'bg-[#9CAF88]/20 text-[#4A6038] font-bold border border-[#9CAF88]/30'
                      : 'text-stone-600 hover:bg-stone-100'
                  }`}
                >
                  <span>{st.label}</span>
                  {selectedStatus === st.id && <Check className="w-3.5 h-3.5 text-[#4A6038]" />}
                </button>
              ))}
            </div>
          </div>

          {/* Showroom Help Card */}
          <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200 text-xs space-y-2">
            <span className="font-bold text-stone-900 block">Looking for a specific model?</span>
            <p className="text-stone-600 text-[11px] leading-relaxed">
              We can arrange customized sizes, large industrial cookers, and bulk electrical requirements. Send us your inquiry via WhatsApp.
            </p>
            <a
              href="https://wa.me/919450000000?text=Hello%20Nandlal%20Hometech,%20I%20am%20looking%20for%20a%20specific%20product%20model."
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#CC5500] font-bold inline-block pt-1 hover:underline text-xs"
            >
              Ask on WhatsApp →
            </a>
          </div>

        </aside>

        {/* Right Products Showcase Area */}
        <main className="lg:col-span-9 space-y-6">
          
          {/* Active Category Header Banner (when a category is selected) */}
          {activeCategoryDetails && (
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E8E2D8] shadow-xs flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <img
                src={activeCategoryDetails.image}
                alt={activeCategoryDetails.name}
                className="w-16 h-16 rounded-xl object-cover shrink-0"
              />
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h2 className="font-bold text-lg text-stone-900">{activeCategoryDetails.name}</h2>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#9CAF88]/20 text-[#4A6038]">
                    {activeCategoryDetails.itemCountDemo}
                  </span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {activeCategoryDetails.fullDescription}
                </p>
              </div>
            </div>
          )}

          {/* Results Count & Active Tags */}
          <div className="flex items-center justify-between text-xs text-stone-500">
            <span>Showing <strong className="text-stone-800">{filteredProducts.length}</strong> products</span>
            {(selectedCategory !== 'all' || selectedStatus !== 'all' || searchQuery) && (
              <button
                onClick={clearAllFilters}
                className="text-[#CC5500] font-medium hover:underline flex items-center gap-1"
              >
                <span>Clear filters</span>
                <X className="w-3 h-3" />
              </button>
            )}
          </div>

          {/* Grid of Product Cards */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="p-12 text-center rounded-2xl bg-white border border-stone-200 space-y-3">
              <p className="font-bold text-stone-800 text-sm">No demonstration products match your current filters.</p>
              <p className="text-xs text-stone-500 max-w-sm mx-auto">
                Try searching with different keywords, or contact our store desk to check our complete in-store catalog.
              </p>
              <div className="pt-2">
                <button
                  onClick={clearAllFilters}
                  className="px-4 py-2 rounded-xl bg-[#CC5500] text-white text-xs font-semibold"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          )}

        </main>

      </div>
    </div>
  );
};
