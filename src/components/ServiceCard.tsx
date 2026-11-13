import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Flame, 
  Wrench, 
  Zap, 
  Cog, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  FlameKindling
} from 'lucide-react';
import type { RepairService } from '../data/services';

interface ServiceCardProps {
  service: RepairService;
  onSelectRepair?: (service: RepairService) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onSelectRepair }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame':
        return <Flame className="w-5 h-5 text-[#CC5500]" />;
      case 'FlameKindling':
        return <FlameKindling className="w-5 h-5 text-[#CC5500]" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-[#CC5500]" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-[#CC5500]" />;
      case 'Cog':
        return <Cog className="w-5 h-5 text-[#CC5500]" />;
      case 'ShieldCheck':
      default:
        return <ShieldCheck className="w-5 h-5 text-[#9CAF88]" />;
    }
  };

  return (
    <div id={service.id} className="group bg-white rounded-2xl border border-[#E8E2D8] hover:border-[#CC5500] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full scroll-mt-28">
      {/* Header with image & icon badge */}
      <div className="relative aspect-16/9 overflow-hidden bg-stone-100">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1D24]/90 via-[#1A1D24]/40 to-transparent"></div>

        <div className="absolute top-3 left-3">
          <div className="p-2 rounded-xl bg-white/95 backdrop-blur-xs shadow-sm border border-stone-100">
            {getIcon(service.iconName)}
          </div>
        </div>

        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="text-lg font-bold text-white group-hover:text-[#FFF4EC] transition-colors leading-snug">
            {service.title}
          </h3>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          <p className="text-xs text-stone-600 leading-relaxed">
            {service.shortDescription}
          </p>

          {/* Common issues solved */}
          <div className="space-y-1.5 pt-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-stone-600 block">
              Common Problems Diagnosed:
            </span>
            <ul className="space-y-1">
              {service.commonIssues.slice(0, 3).map((issue, idx) => (
                <li key={idx} className="flex items-start gap-1.5 text-xs text-stone-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#9CAF88] shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{issue}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Turnaround pill */}
          <div className="pt-2 flex items-center gap-1.5 text-[11px] text-stone-600">
            <Clock className="w-3.5 h-3.5 text-[#CC5500] shrink-0" />
            <span className="font-medium text-stone-700">{service.turnaroundEstimate}</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-3 border-t border-stone-100">
          {onSelectRepair ? (
            <button
              onClick={() => onSelectRepair(service)}
              className="w-full py-2.5 px-3 rounded-xl bg-[#CC5500] hover:bg-[#B34A00] text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
            >
              <Wrench className="w-3.5 h-3.5" />
              <span>Request a Repair</span>
            </button>
          ) : (
            <Link
              to={`/repairing-services?service=${service.id}`}
              className="w-full py-2.5 px-3 rounded-xl bg-[#CC5500] hover:bg-[#B34A00] text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 shadow-xs"
            >
              <Wrench className="w-3.5 h-3.5" />
              <span>Request a Repair</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
