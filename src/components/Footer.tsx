import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  MessageSquare, 
  Clock, 
  ShieldCheck, 
  Wrench, 
  ArrowUpRight
} from 'lucide-react';
import { STORE_INFO } from '../data/storeInfo';
import { CATEGORIES } from '../data/categories';
import { REPAIR_SERVICES } from '../data/services';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#16191E] text-stone-300 border-t border-stone-800">
      {/* Trust & Commitment Banner */}
      <div className="border-b border-stone-800/80 bg-[#1A1D24]/90 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-[#CC5500]/15 text-[#CC5500] border border-[#CC5500]/30 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-base">Genuine Products & Parts</h4>
              <p className="text-stone-400 text-xs mt-1 leading-relaxed">
                We stock durable, verified appliances and exact-fit replacement spare parts suited for Indian home conditions.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-[#9CAF88]/15 text-[#9CAF88] border border-[#9CAF88]/30 shrink-0">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-base">In-Store Repair Expertise</h4>
              <p className="text-stone-400 text-xs mt-1 leading-relaxed">
                Dedicated technician counter for kitchen appliances, gas stoves, electricals, and domestic sewing equipment.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-stone-700/30 text-stone-300 border border-stone-700 shrink-0">
              <MapPin className="w-5 h-5 text-[#CC5500]" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-base">Local & Accessible</h4>
              <p className="text-stone-400 text-xs mt-1 leading-relaxed">
                Centrally situated at Bhitiya Chauraha, Walterganj Road, serving Basti town and surrounding village communities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info & Mission (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <img src="/logo-icon.svg" alt="" className="w-10 h-10 rounded-xl" />
              <div>
                <h3 className="font-extrabold text-white text-lg tracking-tight">NANDLAL HOMETECH</h3>
                <p className="text-xs text-[#9CAF88] font-medium tracking-wide">& UTILITY STORE</p>
              </div>
            </Link>

            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              <strong className="text-stone-100">Everything for Your Home, All in One Place.</strong> A genuine, family-oriented local retail store committed to practical household appliances, safe electricals, everyday cookware, and reliable repair assistance.
            </p>

            <div className="pt-2 text-xs space-y-2 text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#CC5500] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  {STORE_INFO.address.fullFormatted}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#9CAF88] shrink-0" />
                <span>{STORE_INFO.timings.weekdays}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#CC5500] shrink-0" />
                <span>{STORE_INFO.contact.phoneDisplay}</span>
              </div>
            </div>

            {/* Social Placeholders & WhatsApp */}
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href={`https://wa.me/${STORE_INFO.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366]/20 text-[#25D366] hover:bg-[#25D366]/30 border border-[#25D366]/30 text-xs font-medium transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Desk</span>
              </a>
              <span className="text-xs text-stone-500">|</span>
              <span className="text-xs text-stone-400">Retail Showroom Basti</span>
            </div>
          </div>

          {/* Product Categories Column */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-stone-800 pb-2">
              Product Categories
            </h4>
            <ul className="space-y-2 text-xs">
              {CATEGORIES.slice(0, 7).map((cat) => (
                <li key={cat.id}>
                  <Link 
                    to={`/products?category=${cat.id}`}
                    className="text-stone-400 hover:text-[#CC5500] transition-colors flex items-center justify-between group"
                  >
                    <span>{cat.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#CC5500]" />
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/products"
                  className="text-[#9CAF88] hover:underline font-semibold block pt-1"
                >
                  View All Categories →
                </Link>
              </li>
            </ul>
          </div>

          {/* Repairing Services Column */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-stone-800 pb-2">
              Repairing Services
            </h4>
            <ul className="space-y-2 text-xs">
              {REPAIR_SERVICES.map((srv) => (
                <li key={srv.id}>
                  <Link 
                    to={`/repairing-services#${srv.id}`}
                    className="text-stone-400 hover:text-[#CC5500] transition-colors flex items-center justify-between group"
                  >
                    <span className="line-clamp-1">{srv.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#CC5500]" />
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link 
                  to="/repairing-services"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#CC5500]/20 text-[#CC5500] hover:bg-[#CC5500]/30 border border-[#CC5500]/30 font-semibold"
                >
                  <Wrench className="w-3 h-3" />
                  <span>Request a Repair</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links & Location Column */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-stone-800 pb-2">
              Showroom & Visit
            </h4>
            <div className="text-xs space-y-2.5 text-stone-400">
              <p>
                <strong className="text-stone-200 block">Nearby Landmarks:</strong>
                Next to Jaiswal Sweets, Walterganj Road
              </p>
              <p>
                <strong className="text-stone-200 block">Village & Bulk Customers:</strong>
                Personal guidance for complete home setups and electrical wiring requirements.
              </p>
              <div className="pt-1">
                <Link 
                  to="/contact"
                  className="text-stone-300 hover:text-white underline font-medium block"
                >
                  Store Directions & Interactive Map →
                </Link>
              </div>
              <div className="pt-2 border-t border-stone-800">
                <span className="text-[11px] text-stone-500 block">
                  Demonstration inventory & prices shown for preview. Real-time prices available at store desk.
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Sub-footer */}
      <div className="border-t border-stone-800/80 bg-[#121418] py-5 px-4 text-xs text-stone-300">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p>© {new Date().getFullYear()} NANDLAL HOMETECH & UTILITY. All rights reserved. Basti, Uttar Pradesh.</p>
          <div className="flex items-center gap-4 text-stone-300">
            <Link to="/about" className="hover:text-stone-300">About Store</Link>
            <span>•</span>
            <Link to="/repairing-services" className="hover:text-stone-300">Repair Counter</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-stone-300">Store Hours</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
