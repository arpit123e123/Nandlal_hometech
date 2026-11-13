export interface Category {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  itemCountDemo: string;
  featuredItems: string[];
  bannerHighlight: string;
}

export const CATEGORIES: Category[] = [
  {
    id: "kitchen-appliances",
    name: "Kitchen Appliances",
    slug: "kitchen-appliances",
    shortDescription: "Mixer grinders, induction cooktops, electric kettles, juicers, hand blenders, and food prep essentials.",
    fullDescription: "Upgrade your everyday cooking with heavy-duty mixer grinders, energy-efficient induction cooktops, rapid electric kettles, and dependable kitchen appliances designed for Indian cooking needs.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
    itemCountDemo: "18+ Display Models",
    featuredItems: ["Heavy-duty Mixer Grinders", "Induction Cooktops (2000W)", "Cordless Electric Kettles", "Hand Blenders & Choppers"],
    bannerHighlight: "Durable copper motors & trusted cooking performance"
  },
  {
    id: "gas-stoves-cooktops",
    name: "Gas Stoves & Cooktops",
    slug: "gas-stoves-cooktops",
    shortDescription: "Stainless steel & toughened glass gas stoves in 2, 3, and 4 burner configurations with brass burners.",
    fullDescription: "Safe, fuel-efficient gas stoves made for daily heavy cooking. Available in rust-proof stainless steel bodies and modern toughened glass finishes with high-efficiency tri-pin brass burners.",
    image: "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80",
    itemCountDemo: "12+ Cooktop Models",
    featuredItems: ["2-Burner Stainless Steel Stoves", "3-Burner Toughened Glass Cooktops", "Heavy Brass Burners", "ISI Certified Gas Regulators & Pipes"],
    bannerHighlight: "Heavy-gauge steel & thermal toughened glass options"
  },
  {
    id: "cookers-cookware",
    name: "Cookers & Cookware",
    slug: "cookers-cookware",
    shortDescription: "Inner & outer lid pressure cookers, hard-anodized kadhais, non-stick cookware, and stainless steel utensils.",
    fullDescription: "Premium cooking essentials including aluminium and stainless steel pressure cookers with certified safety valves, deep fry pans, tawa, milk boilers, and complete cookware sets.",
    image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=800&q=80",
    itemCountDemo: "25+ Cookware Essentials",
    featuredItems: ["Inner/Outer Lid Pressure Cookers (2L–10L)", "Hard Anodized Kadhais", "Granite Coating Non-Stick Frypans", "Dosa & Roti Tawas"],
    bannerHighlight: "ISI certified pressure valves & thick induction-ready bases"
  },
  {
    id: "electrical-products",
    name: "Electrical Products",
    slug: "electrical-products",
    shortDescription: "Modular switches, distribution boards, copper cables, extension strips, ceiling fan regulators, and MCBs.",
    fullDescription: "Reliable electrical equipment and wiring essentials for homes, shops, and renovations. Safe modular switches, fire-retardant copper cables, sturdy multi-plugs, and protective circuit breakers.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
    itemCountDemo: "40+ Electrical Utilities",
    featuredItems: ["Modular Switches & Sockets", "FR Grade Copper House Wires", "Surge-Protected Spike Guards", "MCBs & Main Switch Cutouts"],
    bannerHighlight: "ISI standard wiring & spark-resistant copper components"
  },
  {
    id: "torches-lighting",
    name: "Torches & Lighting",
    slug: "torches-lighting",
    shortDescription: "Long-range rechargeable LED torches, solar/emergency lanterns, LED batten tubes, and bright bulb fixtures.",
    fullDescription: "High-luminance rechargeable torches built for village and rural utility, emergency power backup lights, solar study lamps, and power-saving home LED bulbs.",
    image: "https://images.unsplash.com/photo-1546554137-f86b9593a222?auto=format&fit=crop&w=800&q=80",
    itemCountDemo: "15+ Lighting Models",
    featuredItems: ["Long-Range Kisan Rechargeable Torches", "Automatic Emergency LED Lanterns", "Energy Saver 9W/12W/18W LED Bulbs", "Outdoor LED Floodlights"],
    bannerHighlight: "High-battery backup for unannounced power cuts"
  },
  {
    id: "sewing-machine-accessories",
    name: "Sewing Machine Accessories",
    slug: "sewing-machine-accessories",
    shortDescription: "Replacement needles, bobbins, shuttle races, drive belts, machine motors, foot pedals, and lubricating oil.",
    fullDescription: "Comprehensive accessories and spare parts for domestic tailors, boutique makers, and household sewing machines. Precision bobbins, genuine shuttle assemblies, drive belts, and smooth-running electric attachments.",
    image: "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80",
    itemCountDemo: "30+ Tailoring Parts",
    featuredItems: ["Universal Machine Needles (Sizes 11–18)", "Steel Bobbin Cases & Bobbins", "Shuttle Race Assemblies", "Electric Sewing Motors & Belts"],
    bannerHighlight: "Compatible with standard domestic & artisan sewing machines"
  },
  {
    id: "household-essentials",
    name: "Household Essentials",
    slug: "household-essentials",
    shortDescription: "Dry & steam electric irons, immersion water heater rods, room heating utilities, and durable daily utility goods.",
    fullDescription: "Everyday utility hardware including quick-heating heavy electric irons, shock-safe water immersion rods, room heaters, plastic tubs, and essential household utility items.",
    image: "https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=800&q=80",
    itemCountDemo: "20+ Home Utilities",
    featuredItems: ["Heavy Weight Dry Irons (1000W)", "Shockproof Immersion Water Rods", "Room Radiant Heaters", "Sturdy Storage Baskets & Utility Racks"],
    bannerHighlight: "Tested heating elements for long seasonal longevity"
  },
  {
    id: "appliance-spare-parts",
    name: "Appliance Spare Parts",
    slug: "appliance-spare-parts",
    shortDescription: "Mixer jar blades, cooker rubber gaskets, stove brass nozzles, thermal cutouts, motor carbon, and couplers.",
    fullDescription: "Genuine replacement components to revive existing appliances. Don't throw away a valuable appliance when a simple original gasket, safety plug, blade assembly, or switch can restore it like new.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    itemCountDemo: "50+ Spare Components",
    featuredItems: ["Food-Grade Cooker Gaskets (1L–12L)", "Mixer Grinder Jar Couplers & Blades", "Gas Stove Brass Jet Nozzles & Knobs", "Carbon Brushes & Element Wires"],
    bannerHighlight: "Save money by repairing with exact-fit spare parts"
  }
];
