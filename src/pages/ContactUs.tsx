import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  MessageSquare, 
  Clock, 
  Send, 
  CheckCircle2, 
  Navigation, 
  ExternalLink,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { STORE_INFO } from '../data/storeInfo';

export const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    villageOrLocation: '',
    subject: 'General Product Inquiry',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Full Name is required';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9+ -]{8,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a message or inquiry details';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      
      {/* Header Banner */}
      <section className="bg-[#1C2028] text-white py-14 sm:py-20 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CC5500]/20 text-[#FF8533] border border-[#CC5500]/30 text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>Retail Showroom Location</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Contact & Store Location
            </h1>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              We welcome you to visit our retail showroom in Basti. Walk in to explore our kitchen cooktops, electrical supplies, appliances, and in-store repair desk.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Details + Map + Contact Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Cards & Google Maps */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Quick Contact Information Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Address Card */}
              <div className="p-5 rounded-2xl bg-white border border-[#E8E2D8] shadow-xs space-y-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#CC5500]/15 text-[#CC5500] flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-stone-900">Showroom Address</h3>
                <p className="text-xs text-stone-600 leading-relaxed font-medium">
                  {STORE_INFO.address.fullFormatted}
                </p>
                <p className="text-[11px] text-stone-500 pt-1 border-t border-stone-100">
                  Landmark: Next to Jaiswal Sweets, Walterganj Road
                </p>
              </div>

              {/* Timings Card */}
              <div className="p-5 rounded-2xl bg-white border border-[#E8E2D8] shadow-xs space-y-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#9CAF88]/20 text-[#4A6038] flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-stone-900">Store Hours</h3>
                <div className="text-xs text-stone-600 space-y-1">
                  <p><strong>Mon – Sat:</strong> 9:00 AM – 8:30 PM</p>
                  <p><strong>Sunday:</strong> 9:30 AM – 6:00 PM</p>
                </div>
                <span className="inline-block text-[11px] font-semibold text-[#4A6038] pt-1">
                  In-Store Repair Desk Open Daily
                </span>
              </div>

              {/* Phone Card */}
              <div className="p-5 rounded-2xl bg-white border border-[#E8E2D8] shadow-xs space-y-2.5">
                <div className="w-9 h-9 rounded-xl bg-stone-100 text-stone-800 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#CC5500]" />
                </div>
                <h3 className="font-bold text-sm text-stone-900">Phone Support</h3>
                <p className="text-xs text-stone-600">
                  Store Desk Hotline:
                </p>
                <a 
                  href={`tel:${STORE_INFO.contact.phonePlaceholder.replace(/[^0-9+]/g, '')}`}
                  className="font-bold text-sm text-[#1A1D24] hover:text-[#CC5500] block"
                >
                  {STORE_INFO.contact.phoneDisplay}
                </a>
                <span className="text-[10px] text-stone-400 block">Available during showroom hours</span>
              </div>

              {/* WhatsApp Quick Chat */}
              <div className="p-5 rounded-2xl bg-white border border-[#E8E2D8] shadow-xs space-y-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-stone-900">WhatsApp Desk</h3>
                <p className="text-xs text-stone-600">
                  Instant stock verification & quotes:
                </p>
                <a
                  href={`https://wa.me/${STORE_INFO.contact.whatsappNumber}?text=Hello%20Nandlal%20Hometech,%20I%20have%20an%20inquiry.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-xs text-[#25D366] hover:underline inline-flex items-center gap-1.5"
                >
                  <span>Chat on WhatsApp Now</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="text-[10px] text-stone-400 block">Fastest response channel</span>
              </div>

            </div>

            {/* Landmark & Travel Advice */}
            <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-stone-200 text-xs space-y-3">
              <h4 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Navigation className="w-4 h-4 text-[#CC5500]" />
                How to Reach Our Store:
              </h4>
              <ul className="space-y-1.5 text-stone-600">
                {STORE_INFO.navigationHelp.nearbyPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#CC5500] mt-1.5 shrink-0"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[11px] text-stone-500 pt-2 border-t border-stone-200">
                {STORE_INFO.navigationHelp.travelNote}
              </p>
            </div>

            {/* Google Maps Location Section */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-sm text-[#1A1D24]">Google Maps Location</h3>
                <a
                  href="https://maps.google.com/?q=Bhitiya+Chauraha+Walterganj+Basti+Uttar+Pradesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#CC5500] hover:underline flex items-center gap-1"
                >
                  <span>Open in Google Maps App</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map Container */}
              <div className="relative rounded-2xl overflow-hidden border border-stone-300 shadow-md aspect-16/9 bg-[#F0ECE1]">
                <iframe
                  title="Nandlal Hometech and Utility Store Location Map"
                  src="https://maps.google.com/maps?q=Walterganj+Basti+Uttar+Pradesh&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  aria-hidden="false"
                ></iframe>

                {/* Overlaid location card */}
                <div className="absolute bottom-3 left-3 bg-[#1A1D24]/90 backdrop-blur-md text-white p-3 rounded-xl border border-stone-700 shadow-lg text-xs max-w-xs hidden sm:block">
                  <p className="font-bold">NANDLAL HOMETECH & UTILITY</p>
                  <p className="text-[11px] text-stone-300 mt-0.5">
                    Bhitiya Chauraha, Walterganj, Basti (UP)
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form with Validation */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-[#E8E2D8] shadow-lg space-y-6">
            
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#CC5500]">
                Get in Touch
              </span>
              <h2 className="font-extrabold text-2xl text-[#1A1D24]">
                Send Us a Message
              </h2>
              <p className="text-xs text-stone-500 leading-relaxed">
                Whether you want to check appliance availability, arrange wiring supplies for a house, or inquire about repair, fill out the form below.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-[#9CAF88]/20 border border-[#9CAF88]/40 text-center space-y-3 animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-[#4A6038] text-white flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-base text-stone-900">Thank You, {formData.fullName}!</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Your inquiry has been received by our Bhitiya Chauraha team. We will contact you at <strong>{formData.phone}</strong> shortly.
                </p>

                <div className="pt-3">
                  <a
                    href={`https://wa.me/${STORE_INFO.contact.whatsappNumber}?text=Hello%20Nandlal%20Hometech,%20I%20am%20${encodeURIComponent(formData.fullName)}.%20Regarding:%20${encodeURIComponent(formData.subject)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#25D366] text-white text-xs font-bold hover:bg-[#20BA5A] transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Connect Immediately on WhatsApp</span>
                  </a>
                </div>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ fullName: '', phone: '', villageOrLocation: '', subject: 'General Product Inquiry', message: '' });
                  }}
                  className="text-xs text-stone-500 hover:text-stone-800 underline block mx-auto pt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                
                {/* Full Name */}
                <div>
                  <label className="block font-semibold text-stone-700 mb-1">
                    Your Full Name <span className="text-[#CC5500]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Rakesh Kumar"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs outline-hidden transition-colors ${
                      errors.fullName ? 'border-red-500 bg-red-50/30' : 'border-stone-300 focus:border-[#CC5500] focus:ring-1 focus:ring-[#CC5500]'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Phone & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">
                      Phone Number (WhatsApp) <span className="text-[#CC5500]">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 98765 43210"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs outline-hidden transition-colors ${
                        errors.phone ? 'border-red-500 bg-red-50/30' : 'border-stone-300 focus:border-[#CC5500] focus:ring-1 focus:ring-[#CC5500]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">
                      Village / Locality
                    </label>
                    <input
                      type="text"
                      value={formData.villageOrLocation}
                      onChange={(e) => setFormData({ ...formData, villageOrLocation: e.target.value })}
                      placeholder="e.g. Walterganj, Basti"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:border-[#CC5500] focus:ring-1 focus:ring-[#CC5500] text-xs outline-hidden"
                    />
                  </div>
                </div>

                {/* Inquiry Category */}
                <div>
                  <label className="block font-semibold text-stone-700 mb-1">
                    What are you looking for?
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:border-[#CC5500] focus:ring-1 focus:ring-[#CC5500] text-xs outline-hidden bg-white"
                  >
                    <option>General Product Inquiry</option>
                    <option>Kitchen Appliances (Mixer Grinder / Kettle)</option>
                    <option>Gas Stove & Cooktop Options</option>
                    <option>Electrical Wire, Switches & Extension Boards</option>
                    <option>Appliance Repairing or Spare Part Inquiry</option>
                    <option>Sewing Machine Accessories</option>
                    <option>Bulk / Contractor Inquiry for Home Wiring</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block font-semibold text-stone-700 mb-1">
                    Your Message / Appliance Model <span className="text-[#CC5500]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what product you need or describe the issue with your appliance..."
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs outline-hidden resize-none transition-colors ${
                      errors.message ? 'border-red-500 bg-red-50/30' : 'border-stone-300 focus:border-[#CC5500] focus:ring-1 focus:ring-[#CC5500]'
                    }`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#CC5500] hover:bg-[#B34A00] text-white font-bold text-xs transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry</span>
                </button>

                <p className="text-[11px] text-stone-500 text-center pt-1">
                  We respect your privacy. No spam; only direct answers to your inquiry.
                </p>
              </form>
            )}

            <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#4A6038]" /> Verified Local Business
              </span>
              <span>Basti, Uttar Pradesh</span>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
