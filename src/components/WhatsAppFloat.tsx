import React, { useState } from 'react';
import { MessageCircle, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { STORE_INFO } from '../data/storeInfo';

export const WhatsAppFloat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickEnquiries = [
    { label: "Check Product Availability", text: "Hello Nandlal Hometech, I want to check availability and price of an appliance." },
    { label: "Appliance Repairing Help", text: "Hello Nandlal Hometech, I need repair assistance for my home/kitchen equipment." },
    { label: "Gas Stove / Cooker Spares", text: "Hello Nandlal Hometech, I am looking for spare parts (burner/gasket/valve/blade)." },
    { label: "Store Location & Timings", text: "Hello Nandlal Hometech, could you please confirm your showroom location and timings?" }
  ];

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Floating Popup Window */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-white rounded-2xl shadow-2xl border border-[#E8E2D8] overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="bg-[#1A1D24] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-sm">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">Nandlal Hometech Desk</h4>
                <p className="text-[11px] text-[#9CAF88] flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse"></span>
                  Quick WhatsApp Support
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-stone-400 hover:text-white p-1 rounded-lg transition-colors"
              aria-label="Close WhatsApp chat popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-[#FAF8F5] text-stone-700 text-xs space-y-3">
            <div className="p-3 bg-white rounded-xl border border-stone-200 text-xs shadow-xs space-y-1">
              <p className="font-semibold text-stone-900">
                Namaste! Welcome to Nandlal Hometech & Utility.
              </p>
              <p className="text-stone-600 text-[11px]">
                Choose an inquiry below or chat with our Bhitiya Chauraha team:
              </p>
            </div>

            <div className="space-y-1.5">
              {quickEnquiries.map((item, idx) => (
                <a
                  key={idx}
                  href={`https://wa.me/${STORE_INFO.contact.whatsappNumber}?text=${encodeURIComponent(item.text)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white hover:bg-[#FFF4EC] border border-stone-200 hover:border-[#CC5500] text-stone-800 text-xs font-medium transition-colors group"
                >
                  <span className="line-clamp-1">{item.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#CC5500] group-hover:translate-x-0.5 transition-transform shrink-0" />
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-stone-200 flex items-center justify-between text-[11px] text-stone-600">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#9CAF88]" /> Verified Local Store
              </span>
              <span>Basti, UP</span>
            </div>
          </div>
        </div>
      )}

      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open WhatsApp conversation"
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-hidden focus:ring-3 focus:ring-[#25D366]/40 cursor-pointer"
      >
        <span className="w-6 h-6 flex items-center justify-center">
          <MessageCircle className="w-6 h-6" />
        </span>
        <span className="hidden sm:inline font-bold text-xs tracking-wide">
          {isOpen ? 'Close' : 'Chat on WhatsApp'}
        </span>
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#CC5500] border-2 border-white rounded-full"></span>
      </button>
    </div>
  );
};
