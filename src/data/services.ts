export interface RepairService {
  id: string;
  title: string;
  shortDescription: string;
  commonIssues: string[];
  diagnosticProcess: string;
  turnaroundEstimate: string;
  genuinePartsUsed: string[];
  iconName: string;
  image: string;
}

export const REPAIR_SERVICES: RepairService[] = [
  {
    id: "kitchen-appliance-repair",
    title: "Kitchen Appliance Repairing",
    shortDescription: "Complete diagnostic and servicing for mixer grinders, induction cooktops, electric kettles, and food choppers.",
    commonIssues: [
      "Mixer grinder motor sparking or burning smell",
      "Jar coupler stripped or blade stuck / leaking water",
      "Induction cooktop showing error codes (E0/E1/E2) or no heat",
      "Electric kettle not auto-shutting off or failing to boil",
      "Blender switch / regulator speed knob broken"
    ],
    diagnosticProcess: "We test motor continuity, carbon brushes, overload protection switches, and jar bearing alignment right in front of you.",
    turnaroundEstimate: "Same-day or next-day turnaround depending on part availability",
    genuinePartsUsed: ["High-grade copper coils", "Carbon brushes", "Hardened steel blades", "Thermal fuse & micro-switches"],
    iconName: "Flame",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "gas-stove-repair",
    title: "Gas Stove & Cooktop Repairing",
    shortDescription: "Precision flame adjustment, burner nozzle decarbonizing, gas leakage safety checks, and valve replacements.",
    commonIssues: [
      "Yellow or soot-producing flame instead of clean blue flame",
      "Burner gas flow blocked or uneven flame distribution",
      "Gas smell / suspected leakage around pipe or valve knobs",
      "Stiff or jammed burner control knobs",
      "Loose burner tops or damaged rubber legs causing instability"
    ],
    diagnosticProcess: "Detailed pressure and flame testing, clearing carbon choke from internal mixing tubes, and safety leak verification.",
    turnaroundEstimate: "Quick service (usually within 1–2 hours at the counter)",
    genuinePartsUsed: ["Forged brass nozzles", "Heavy brass burner caps", "Certified high-pressure rubber washers", "Standard control spindles"],
    iconName: "FlameKindling",
    image: "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "home-appliance-repair",
    title: "Home Appliance Repairing",
    shortDescription: "Servicing for electric dry and steam irons, immersion water rods, room heaters, table & pedestal fans.",
    commonIssues: [
      "Electric iron not heating or tripping home MCB / fuse",
      "Iron temperature regulator thermostat stuck or sparking",
      "Water immersion heater rod shock risk or slow heating",
      "Room quartz/halogen heater rods damaged or not glowing",
      "Table or ceiling fan humming without blade rotation"
    ],
    diagnosticProcess: "Electrical insulation testing to ensure zero shock hazards, thermostat calibration, and component replacement.",
    turnaroundEstimate: "Same-day servicing for irons & heaters",
    genuinePartsUsed: ["Mica & tubular heating elements", "Bi-metal thermostats", "Heat-resistant silicone wires", "Capacitors"],
    iconName: "Wrench",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "electrical-item-repair",
    title: "Electrical Item & Board Repairing",
    shortDescription: "Repair of multi-plug boards, extension cords, heavy appliance cables, distribution switches, and cutouts.",
    commonIssues: [
      "Extension board plug sockets loose or burnt from overload",
      "Main power cable broken internally or melted near plug head",
      "Rotary fan regulator burning out repeatedly",
      "Rechargeable emergency light battery dying too quickly",
      "Heavy load appliances tripping individual switches"
    ],
    diagnosticProcess: "Load check with multi-meter, inspecting copper contact tension, replacing melted plastic components with flame-retardant parts.",
    turnaroundEstimate: "Counter repair within 30–60 minutes",
    genuinePartsUsed: ["Brass contact socket strips", "FR grade 3-core cables", "Indicator LEDs & neon lamps", "High-amp toggle switches"],
    iconName: "Zap",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "sewing-machine-repair",
    title: "Sewing Machine-Related Repairs",
    shortDescription: "Timing recalibration, shuttle race jam clearing, electric motor retrofit, and tension regulator setting.",
    commonIssues: [
      "Thread breaking continuously or bunching up underneath fabric",
      "Needle hitting shuttle race or plate and snapping",
      "Heavy or stiff flywheel rotation requiring excessive force",
      "External electric sewing motor slipping or belt loose",
      "Skipped stitches on thicker fabrics or cotton weaves"
    ],
    diagnosticProcess: "Inspection of shuttle hook timing, needle-to-feed-dog synchronization, thread tension spring calibration, and deep lubrication.",
    turnaroundEstimate: "1 to 2 working days depending on mechanical wear",
    genuinePartsUsed: ["Hardened steel shuttle hooks", "Thread take-up springs", "High-torque V-belts", "Precision bobbin cases"],
    iconName: "Cog",
    image: "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "spare-parts-maintenance",
    title: "Spare Parts Replacement & Maintenance",
    shortDescription: "Quick-fit counter replacement for cooker safety valves, gaskets, mixer couplers, and periodic maintenance.",
    commonIssues: [
      "Pressure cooker whistling continuously or leaking steam around rim",
      "Safety valve melted or expired due to high temperature",
      "Mixer jar base loose or rattling violently during operation",
      "Gas stove regulator knob cracked or pipe hardening with age",
      "Seasonal cleaning & decarbonizing of heating appliances"
    ],
    diagnosticProcess: "Exact measurement of old parts with gauge caliper to ensure 100% airtight fit and pressure safety compatibility.",
    turnaroundEstimate: "Instant counter replacement (5–15 minutes)",
    genuinePartsUsed: ["Food-grade silicone & rubber gaskets", "ISI safety pressure fusible plugs", "Cast nylon jar couplers", "LPG rubber hoses"],
    iconName: "ShieldCheck",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80"
  }
];

export const REPAIR_PROCESS_STEPS = [
  {
    step: "01",
    title: "Bring Item to Our Store",
    desc: "Bring your appliance or equipment to our counter at Bhitiya Chauraha (near Walterganj Police Station, next to Jaiswal Sweets)."
  },
  {
    step: "02",
    title: "Transparent Problem Diagnosis",
    desc: "Our technician examines the fault right before you and explains what part is damaged and the expected repair cost."
  },
  {
    step: "03",
    title: "Genuine Parts Replacement",
    desc: "We use appropriate, exact-fit spare parts rather than unreliable temporary fixes, ensuring safety and durability."
  },
  {
    step: "04",
    title: "Tested & Handed Back",
    desc: "We test the repaired item under power or flame before handing it back to you with care instructions."
  }
];
