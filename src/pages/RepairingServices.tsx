import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Wrench, 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  MessageSquare, 
  MapPin,
  ShieldCheck
} from 'lucide-react';
import { REPAIR_SERVICES, REPAIR_PROCESS_STEPS } from '../data/services';
import { getWhatsAppRepairEnquiryUrl } from '../data/products';

export const RepairingServices: React.FC = () => {
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get('service');

  const [selectedService, setSelectedService] = useState<string>(
    serviceParam || REPAIR_SERVICES[0].id
  );

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    villageOrArea: '',
    applianceType: 'Mixer Grinder',
    problemDesc: '',
    preferredDropDay: 'Today / Tomorrow'
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (serviceParam) {
      setSelectedService(serviceParam);
      const el = document.getElementById(serviceParam);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [serviceParam]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  const activeServiceObj = REPAIR_SERVICES.find((s) => s.id === selectedService) || REPAIR_SERVICES[0];

  const whatsappDirectUrl = getWhatsAppRepairEnquiryUrl(
    activeServiceObj.title,
    formData.applianceType,
    formData.problemDesc || 'Requesting in-store inspection and cost estimate'
  );

  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      
      {/* Hero Header */}
      <section className="bg-[#1C2028] text-white py-14 sm:py-20 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CC5500]/20 text-[#FF8533] border border-[#CC5500]/30 text-xs font-bold uppercase tracking-wider">
              <Wrench className="w-3.5 h-3.5" />
              <span>In-Store Technician Counter</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Reliable Repairing. Trusted Local Service.
            </h1>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Don't discard valuable household equipment. Bring your faulty mixer grinders, gas stoves, cooker lids, electric irons, and sewing machines to our Bhitiya Chauraha workshop for transparent diagnosis and genuine spare parts.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-stone-300">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#CC5500]" />
                In-Store Workshop at Bhitiya Chauraha
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#9CAF88]" />
                Mon – Sat: 9:00 AM – 8:30 PM
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Important Store Policy Note (Doorstep Clarity) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-10">
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E8E2D8] shadow-md flex items-start gap-3.5 text-xs text-stone-700">
          <AlertTriangle className="w-5 h-5 text-[#CC5500] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-bold text-stone-900 text-sm">In-Store Diagnostic Counter Policy</h4>
            <p className="text-stone-600 leading-relaxed text-[11px] sm:text-xs">
              To guarantee fast testing equipment, dedicated electrical testing rigs, and immediate access to hundreds of spare parts, <strong>all repairs are carried out at our showroom workshop counter</strong> at Bhitiya Chauraha (next to Jaiswal Sweets, Walterganj Road). We do not promise doorstep visits; please bring your equipment to our store for on-the-spot examination.
            </p>
          </div>
        </div>
      </section>

      {/* 4-Step Process Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#CC5500]">
            Transparent Process
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A1D24]">
            How Our Repair Counter Operates
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm">
            No unexpected costs. You know the exact issue and estimate before we proceed.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {REPAIR_PROCESS_STEPS.map((step) => (
            <div key={step.step} className="p-5 rounded-2xl bg-white border border-[#E8E2D8] shadow-xs space-y-3">
              <span className="text-2xl font-black text-[#CC5500] font-mono block">{step.step}</span>
              <h3 className="font-bold text-sm text-stone-900">{step.title}</h3>
              <p className="text-xs text-stone-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Services Deep Dive */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#9CAF88]">Comprehensive Support</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A1D24]">
              What We Repair & Service
            </h2>
          </div>
          <p className="text-xs text-stone-500 max-w-sm">
            Select any service category to review common faults, testing procedure, and estimated turnaround.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Service Cards List */}
          <div className="lg:col-span-7 space-y-6">
            {REPAIR_SERVICES.map((srv) => (
              <div
                key={srv.id}
                id={srv.id}
                className={`p-6 rounded-2xl border transition-all scroll-mt-24 ${
                  selectedService === srv.id
                    ? 'bg-white border-[#CC5500] shadow-lg ring-1 ring-[#CC5500]/20'
                    : 'bg-white border-[#E8E2D8] hover:border-stone-300'
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-stone-200 text-[#CC5500]">
                      <Wrench className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-[#1A1D24]">{srv.title}</h3>
                      <span className="text-[11px] font-semibold text-[#9CAF88] flex items-center gap-1 mt-0.5">
                        <Clock className="w-3 h-3 text-[#CC5500]" /> {srv.turnaroundEstimate}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedService(srv.id);
                      setFormData({ ...formData, applianceType: srv.title });
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                      selectedService === srv.id
                        ? 'bg-[#CC5500] text-white'
                        : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                    }`}
                  >
                    {selectedService === srv.id ? 'Selected' : 'Select'}
                  </button>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed mb-4">
                  {srv.shortDescription}
                </p>

                {/* Common Issues Solved */}
                <div className="space-y-1.5 pt-3 border-t border-stone-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block">
                    Common Faults Addressed:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs">
                    {srv.commonIssues.map((issue, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-stone-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#4A6038] shrink-0 mt-0.5" />
                        <span className="leading-tight">{issue}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Parts & Diagnostic Info */}
                <div className="mt-4 p-3 rounded-xl bg-[#FAF8F5] border border-stone-200 text-[11px] text-stone-600 space-y-1">
                  <p>
                    <strong className="text-stone-800">Diagnostic Check:</strong> {srv.diagnosticProcess}
                  </p>
                  <p>
                    <strong className="text-stone-800">Genuine Spares Used:</strong> {srv.genuinePartsUsed.join(', ')}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Sticky Repair Request Form */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="p-6 sm:p-7 rounded-3xl bg-white border-2 border-[#CC5500]/40 shadow-xl space-y-5">
              
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#CC5500]">
                  Repair Service Desk
                </span>
                <h3 className="font-extrabold text-xl text-[#1A1D24]">
                  Request a Repair Estimate
                </h3>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Tell us about your appliance. We can give you an upfront diagnosis and let you know when to bring it to our Bhitiya counter.
                </p>
              </div>

              {submitted ? (
                <div className="p-5 rounded-2xl bg-[#9CAF88]/20 border border-[#9CAF88]/40 text-center space-y-3 animate-in fade-in">
                  <div className="w-10 h-10 rounded-full bg-[#4A6038] text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-sm text-stone-900">Repair Request Registered!</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Thank you, {formData.name}. Please bring your {formData.applianceType} to our Bhitiya Chauraha counter. You can also forward this directly to our WhatsApp technician desk.
                  </p>

                  <div className="pt-2">
                    <a
                      href={whatsappDirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#25D366] text-white text-xs font-bold hover:bg-[#20BA5A] transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Forward to WhatsApp Technician</span>
                    </a>
                  </div>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-stone-500 hover:text-stone-800 underline block mx-auto pt-1"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">
                      Your Name <span className="text-[#CC5500]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Anand Jaiswal"
                      className="w-full px-3 py-2.5 rounded-xl border border-stone-300 focus:border-[#CC5500] focus:ring-1 focus:ring-[#CC5500] text-xs outline-hidden"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-stone-700 mb-1">
                        Phone (WhatsApp) <span className="text-[#CC5500]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="98765 43210"
                        className="w-full px-3 py-2.5 rounded-xl border border-stone-300 focus:border-[#CC5500] focus:ring-1 focus:ring-[#CC5500] text-xs outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-stone-700 mb-1">
                        Village / Town
                      </label>
                      <input
                        type="text"
                        value={formData.villageOrArea}
                        onChange={(e) => setFormData({ ...formData, villageOrArea: e.target.value })}
                        placeholder="e.g. Walterganj / Basti"
                        className="w-full px-3 py-2.5 rounded-xl border border-stone-300 focus:border-[#CC5500] focus:ring-1 focus:ring-[#CC5500] text-xs outline-hidden"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">
                      Appliance Category
                    </label>
                    <select
                      value={formData.applianceType}
                      onChange={(e) => setFormData({ ...formData, applianceType: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-stone-300 focus:border-[#CC5500] focus:ring-1 focus:ring-[#CC5500] text-xs outline-hidden bg-white"
                    >
                      <option>Mixer Grinder (Sparking / Jar Leaking)</option>
                      <option>Gas Stove / Cooktop (Flame / Leakage)</option>
                      <option>Pressure Cooker (Gasket / Safety Valve)</option>
                      <option>Electric Iron / Immersion Water Rod</option>
                      <option>Induction Cooktop (Error / No Heat)</option>
                      <option>Sewing Machine / Motor Fitting</option>
                      <option>Electrical Switchboard / Wire Problem</option>
                      <option>Other Household Appliance</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">
                      Problem Description
                    </label>
                    <textarea
                      rows={3}
                      value={formData.problemDesc}
                      onChange={(e) => setFormData({ ...formData, problemDesc: e.target.value })}
                      placeholder="e.g., Gas stove giving yellow flame with soot, or mixer motor stops after 10 seconds..."
                      className="w-full px-3 py-2 rounded-xl border border-stone-300 focus:border-[#CC5500] focus:ring-1 focus:ring-[#CC5500] text-xs outline-hidden resize-none"
                    ></textarea>
                  </div>

                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">
                      Preferred Drop-off Day at Store
                    </label>
                    <select
                      value={formData.preferredDropDay}
                      onChange={(e) => setFormData({ ...formData, preferredDropDay: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-stone-300 focus:border-[#CC5500] focus:ring-1 focus:ring-[#CC5500] text-xs outline-hidden bg-white"
                    >
                      <option>Today (During Store Hours)</option>
                      <option>Tomorrow Morning</option>
                      <option>This Weekend</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#CC5500] hover:bg-[#B34A00] text-white font-bold text-xs transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Wrench className="w-4 h-4" />
                    <span>Submit Repair Request</span>
                  </button>

                  <div className="pt-2 text-center">
                    <a
                      href={whatsappDirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-600 hover:text-[#CC5500] text-[11px] inline-flex items-center gap-1.5"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                      <span>Prefer WhatsApp? Message technician directly</span>
                    </a>
                  </div>
                </form>
              )}

              <div className="pt-3 border-t border-stone-100 text-[11px] text-stone-500 space-y-1">
                <p className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#4A6038]" /> Exact-fit components tested on spot
                </p>
                <p className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#CC5500]" /> Bhitiya Chauraha, Walterganj Road
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Repair FAQs Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#CC5500]">Common Questions</span>
          <h2 className="text-2xl font-extrabold text-[#1A1D24]">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-3 text-xs">
          {[
            {
              q: "Do you offer doorstep repair visits in Basti?",
              a: "To ensure that we have proper electrical test benches, safety pressure gauges, and the full inventory of spare parts immediately at hand, all repairs are handled at our in-store counter at Bhitiya Chauraha. Bring your item during store hours for transparent diagnosis."
            },
            {
              q: "How long does a typical mixer grinder or gas stove repair take?",
              a: "Common issues like cooker gasket/valve replacement, gas stove nozzle clearing, and mixer jar coupler changes are usually done on the spot within 15–30 minutes. Motor rewinding or complex electrical issues typically take 1–2 working days."
            },
            {
              q: "Are the replacement spare parts original and safe?",
              a: "Yes. We specifically stock genuine brass nozzles, food-grade silicone cooker gaskets, heavy copper winding components, and high-temp electrical switches suited for Indian voltages."
            },
            {
              q: "Can I bring domestic sewing machines for repair?",
              a: "Yes, our technicians handle timing alignment, shuttle race jamming, thread tension calibrating, and motor attachment for standard domestic sewing machines."
            }
          ].map((faq, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-white border border-stone-200 space-y-1.5">
              <h4 className="font-bold text-stone-900 text-sm">{faq.q}</h4>
              <p className="text-stone-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
