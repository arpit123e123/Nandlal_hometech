import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Search, 
  Menu, 
  X, 
  Wrench, 
  MessageSquare,
  ChevronDown
} from 'lucide-react';
import { STORE_INFO } from '../data/storeInfo';
import { CATEGORIES } from '../data/categories';

interface NavbarProps {
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setCategoriesDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Repairing Services", path: "/repairing-services" },
    { name: "About Us", path: "/about" },
    { name: "Contact & Store", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Top Announcement & Quick Contact Bar */}
      <div className="bg-[#1A1D24] text-[#E5E1DA] text-xs py-2 px-4 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-[#CC5500]" />
              <span>Bhitiya Chauraha, Near Walterganj P.S., Basti, UP</span>
            </span>
            <span className="flex items-center gap-1.5 text-stone-300">
              <Clock className="w-3.5 h-3.5 text-[#9CAF88]" />
              <span>Mon – Sat: 9:00 AM – 8:30 PM | Sun: 9:30 AM – 6:00 PM</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-[#9CAF88]/20 text-[#A3B899] border border-[#9CAF88]/30">
              In-Store Repair Desk Open
            </span>
            <a 
              href={`https://wa.me/${STORE_INFO.contact.whatsappNumber}?text=Hello%20Nandlal%20Hometech,%20I%20have%20an%20enquiry.`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#CC5500] transition-colors flex items-center gap-1 font-medium"
            >
              WhatsApp Support
            </a>
            <span className="text-stone-600">|</span>
            <a 
              href={`tel:${STORE_INFO.contact.phonePlaceholder.replace(/[^0-9+]/g, '')}`} 
              className="text-stone-300 hover:text-white transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-[#CC5500]" />
              <span>{STORE_INFO.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`w-full bg-[#FAF8F5]/95 backdrop-blur-md transition-shadow duration-200 border-b border-[#E8E2D8] ${
        isScrolled ? 'shadow-md py-2.5' : 'py-3.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Brand Logo & Tagline */}
            <Link to="/" className="flex items-center gap-3 group focus:outline-none">
              <div className="w-11 h-11 rounded-xl bg-[#1A1D24] border border-[#CC5500]/40 flex items-center justify-center p-2 shadow-sm group-hover:border-[#CC5500] transition-colors">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 20L80 44V76C80 78.2091 78.2091 80 76 80H24C21.7909 80 20 78.2091 20 76V44L50 20Z" stroke="#CC5500" strokeWidth="7" strokeLinejoin="round"/>
                  <path d="M50 36C45 44 40 48 40 55C40 61.6274 44.4772 66 50 66C55.5228 66 60 61.6274 60 55C60 49 55 45 50 36Z" fill="#CC5500"/>
                  <circle cx="50" cy="55" r="4.5" fill="#9CAF88"/>
                  <circle cx="68" cy="30" r="3" fill="#9CAF88"/>
                </svg>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-lg sm:text-xl tracking-tight text-[#1A1D24]">
                    NANDLAL
                  </span>
                  <span className="font-semibold text-xs tracking-wider uppercase px-1.5 py-0.5 rounded bg-[#CC5500] text-white">
                    HOMETECH
                  </span>
                </div>
                <span className="text-[11px] font-medium text-[#5A6372] -mt-0.5 tracking-tight hidden sm:block">
                  Everything for Your Home, All in One Place.
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              <Link 
                to="/"
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive('/') 
                    ? 'text-[#CC5500] bg-[#CC5500]/10 font-semibold' 
                    : 'text-[#2D333F] hover:text-[#CC5500] hover:bg-stone-100'
                }`}
              >
                Home
              </Link>

              {/* Categories Dropdown */}
              <div className="relative"
                   onMouseEnter={() => setCategoriesDropdownOpen(true)}
                   onMouseLeave={() => setCategoriesDropdownOpen(false)}>
                <button
                  onClick={() => setCategoriesDropdownOpen(!categoriesDropdownOpen)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium inline-flex items-center gap-1 transition-colors ${
                    location.pathname.startsWith('/products')
                      ? 'text-[#CC5500] bg-[#CC5500]/10 font-semibold'
                      : 'text-[#2D333F] hover:text-[#CC5500] hover:bg-stone-100'
                  }`}
                >
                  <span>Categories</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${categoriesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {categoriesDropdownOpen && (
                  <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-xl border border-[#E8E2D8] py-2 mt-1 animate-in fade-in duration-150">
                    <div className="px-3 py-1.5 border-b border-stone-100 text-[11px] uppercase tracking-wider font-bold text-stone-600">
                      Product Departments
                    </div>
                    <div className="max-h-96 overflow-y-auto py-1">
                      {CATEGORIES.map((cat) => (
                        <Link
                          key={cat.id}
                          to={`/products?category=${cat.id}`}
                          className="flex items-center justify-between px-3.5 py-2 text-xs font-medium text-stone-700 hover:bg-[#F8F5EE] hover:text-[#CC5500] transition-colors"
                        >
                          <span>{cat.name}</span>
                          <span className="text-[10px] text-stone-600 font-normal">{cat.itemCountDemo}</span>
                        </Link>
                      ))}
                    </div>
                    <div className="p-2 border-t border-stone-100 bg-[#FAF8F5]">
                      <Link 
                        to="/products"
                        className="block text-center text-xs font-semibold text-[#CC5500] hover:underline"
                      >
                        View Full Products Catalog →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link 
                to="/products"
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === '/products' 
                    ? 'text-[#CC5500] bg-[#CC5500]/10 font-semibold' 
                    : 'text-[#2D333F] hover:text-[#CC5500] hover:bg-stone-100'
                }`}
              >
                All Products
              </Link>

              <Link 
                to="/repairing-services"
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors inline-flex items-center gap-1.5 ${
                  isActive('/repairing-services') 
                    ? 'text-[#CC5500] bg-[#CC5500]/10 font-semibold' 
                    : 'text-[#2D333F] hover:text-[#CC5500] hover:bg-stone-100'
                }`}
              >
                <Wrench className="w-3.5 h-3.5 text-[#9CAF88]" />
                <span>Repairing Services</span>
              </Link>

              <Link 
                to="/about"
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive('/about') 
                    ? 'text-[#CC5500] bg-[#CC5500]/10 font-semibold' 
                    : 'text-[#2D333F] hover:text-[#CC5500] hover:bg-stone-100'
                }`}
              >
                About Us
              </Link>

              <Link 
                to="/contact"
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive('/contact') 
                    ? 'text-[#CC5500] bg-[#CC5500]/10 font-semibold' 
                    : 'text-[#2D333F] hover:text-[#CC5500] hover:bg-stone-100'
                }`}
              >
                Contact & Store
              </Link>
            </div>

            {/* Action Buttons: Search & WhatsApp */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={onOpenSearch}
                aria-label="Search products and repair services"
                className="p-2 sm:px-3 sm:py-2 rounded-lg text-stone-600 hover:text-[#1A1D24] bg-stone-100/80 hover:bg-stone-200/80 border border-stone-200 text-xs sm:text-sm font-medium inline-flex items-center gap-2 transition-colors cursor-pointer"
              >
                <Search className="w-4 h-4 text-[#CC5500]" />
                <span className="hidden sm:inline">Search store...</span>
                <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] bg-white border border-stone-300 rounded text-stone-500 font-mono">⌘K</kbd>
              </button>

              <a
                href={`https://wa.me/${STORE_INFO.contact.whatsappNumber}?text=Hello%20Nandlal%20Hometech,%20I%20would%20like%20to%20enquire%20about%20products%20and%20repairing%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-[#CC5500] text-white hover:bg-[#B34A00] transition-colors shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Enquiry</span>
              </a>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="lg:hidden p-2 rounded-lg text-stone-700 hover:bg-stone-100 border border-stone-200 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] sm:top-[70px] bg-[#FAF8F5] border-b border-[#E8E2D8] shadow-2xl p-5 max-h-[calc(100vh-80px)] overflow-y-auto animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-4">
            
            {/* Quick Location Badge */}
            <div className="p-3 rounded-lg bg-stone-100 border border-stone-200 flex items-start gap-2 text-xs text-stone-700">
              <MapPin className="w-4 h-4 text-[#CC5500] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-stone-900">Nandlal Hometech Showroom</p>
                <p className="text-stone-600 text-[11px]">Bhitiya Chauraha, Near Walterganj P.S., Basti</p>
              </div>
            </div>

            {/* Navigation links list */}
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium ${
                    isActive(link.path)
                      ? 'text-[#CC5500] bg-[#CC5500]/10 font-bold'
                      : 'text-stone-800 hover:bg-stone-100'
                  }`}
                >
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>

            {/* Product categories list in mobile */}
            <div className="pt-2 border-t border-stone-200">
              <p className="text-xs uppercase font-bold text-stone-600 tracking-wider mb-2">
                Browse Categories
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/products?category=${cat.id}`}
                    className="p-2 rounded bg-white border border-stone-200 text-stone-700 hover:border-[#CC5500] hover:text-[#CC5500] line-clamp-1"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact buttons */}
            <div className="pt-3 border-t border-stone-200 space-y-2">
              <a
                href={`https://wa.me/${STORE_INFO.contact.whatsappNumber}?text=Hello%20Nandlal%20Hometech,%20I%20have%20an%20enquiry.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-lg bg-[#CC5500] text-white text-center text-sm font-medium flex items-center justify-center gap-2 shadow"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href={`tel:${STORE_INFO.contact.phonePlaceholder.replace(/[^0-9+]/g, '')}`}
                className="w-full py-2 px-4 rounded-lg bg-stone-100 text-stone-800 border border-stone-300 text-center text-xs font-medium flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#CC5500]" />
                <span>Call Store: {STORE_INFO.contact.phoneDisplay}</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
