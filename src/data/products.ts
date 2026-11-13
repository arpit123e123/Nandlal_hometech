export interface Product {
  id: string;
  slug: string;
  name: string;
  categoryId: string;
  brand: string;
  priceNote: string;
  indicativePrice?: string;
  availabilityStatus: "In Stock at Store" | "Available on Order" | "Popular Counter Item";
  shortDescription: string;
  fullDescription: string;
  image: string;
  additionalImages?: string[];
  keySpecs: { label: string; value: string }[];
  features: string[];
  isFeatured?: boolean;
}

export const PRODUCTS: Product[] = [
  // Kitchen Appliances
  {
    id: "nh-ka-01",
    slug: "heavy-duty-mixer-grinder-750w",
    name: "Heavy-Duty 750W Mixer Grinder (3 Stainless Steel Jars)",
    categoryId: "kitchen-appliances",
    brand: "Popular Indian Make (Demo)",
    priceNote: "Contact for in-store price & offers",
    indicativePrice: "₹2,450 (Indicative MRP ₹3,200)",
    availabilityStatus: "In Stock at Store",
    shortDescription: "Pure copper wound 750W motor with 3 heavy-gauge stainless steel jars for tough Indian masala grinding.",
    fullDescription: "Built specifically to handle dry spices, tough turmeric, wet batters, and daily chutneys. Features overload protection trip switch, food-grade rubber gaskets, flow breaker jar designs, and sharp hardened stainless steel blades.",
    image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
    ],
    keySpecs: [
      { label: "Motor Power", value: "750 Watts 100% Copper Winding" },
      { label: "Jars Included", value: "3 (1.5L Wet, 1.0L Dry, 0.4L Chutney)" },
      { label: "Speed Controls", value: "3 Speed with Incher / Pulse" },
      { label: "Safety Switch", value: "Overload Thermal Cutout at Base" },
      { label: "Blade Material", value: "Hardened Stainless Steel 304" }
    ],
    features: [
      "Heavy base prevents counter vibration during dry grinding",
      "Leak-resistant locking lids with food-safe rings",
      "Easy-to-replace coupler mechanism supported at our repair desk",
      "Low power consumption with high torque output"
    ],
    isFeatured: true
  },
  {
    id: "nh-ka-02",
    slug: "smart-induction-cooktop-2000w",
    name: "Smart Preset 2000W Induction Cooktop",
    categoryId: "kitchen-appliances",
    brand: "Standard Brand (Demo)",
    priceNote: "Contact for in-store price & offers",
    indicativePrice: "₹2,150 (Indicative MRP ₹2,890)",
    availabilityStatus: "In Stock at Store",
    shortDescription: "Fast heating electromagnetic cooktop with pre-programmed Indian cooking modes and voltage surge protection.",
    fullDescription: "Safe, flameless cooking ideal for families, students, and small setups. Pre-programmed Indian menus including Roti/Dosa, Milk Boiled, Pressure Cook, Deep Fry, and Idli. Built-in dual heat sensors and automatic pan detection.",
    image: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?auto=format&fit=crop&w=800&q=80",
    keySpecs: [
      { label: "Rated Wattage", value: "2000 Watts" },
      { label: "Glass Surface", value: "Polished Crystal Toughened Glass" },
      { label: "Presets", value: "7 Indian Cooking Menu Buttons" },
      { label: "Timer", value: "Up to 3 Hours Auto-Off" },
      { label: "Voltage Range", value: "Wide input 160V – 260V protection" }
    ],
    features: [
      "Flameless, cool-to-touch surface edges for child safety",
      "Automatic shut-off when cookware is removed",
      "Digital LED display with push-button touch response",
      "Compatible with induction-bottom steel and cast iron cookware"
    ],
    isFeatured: true
  },
  {
    id: "nh-ka-03",
    slug: "stainless-steel-electric-kettle-1-8l",
    name: "Stainless Steel Rapid Boil Cordless Electric Kettle (1.8L)",
    categoryId: "kitchen-appliances",
    brand: "Popular Make (Demo)",
    priceNote: "Contact for in-store price & offers",
    indicativePrice: "₹680 (Indicative MRP ₹1,100)",
    availabilityStatus: "In Stock at Store",
    shortDescription: "Double-layer stainless steel inner body with auto-cut off thermostat and 360-degree swivel base.",
    fullDescription: "Boils water in minutes for tea, coffee, baby feeding, and instant noodles. Cordless convenience with 360-degree rotational power base, cool-touch handle, lockable hinged lid, and boil-dry protection.",
    image: "https://images.unsplash.com/photo-1594213114663-d94db9b17125?auto=format&fit=crop&w=800&q=80",
    keySpecs: [
      { label: "Capacity", value: "1.8 Litres" },
      { label: "Power", value: "1500 Watts" },
      { label: "Body Material", value: "Grade 201 Stainless Steel Body" },
      { label: "Auto Shut-Off", value: "Steam Sensor Bi-metal Cutoff" }
    ],
    features: [
      "Concealed heating element for effortless descaling",
      "Single-touch spring lock safety lid",
      "Illuminated power indicator switch",
      "Comfortable ergonomic heat-insulated handle"
    ],
    isFeatured: false
  },

  // Gas Stoves & Cooktops
  {
    id: "nh-gs-01",
    slug: "toughened-glass-3-burner-gas-stove",
    name: "Toughened Glass 3-Burner Gas Stove (Tri-Pin Brass Burners)",
    categoryId: "gas-stoves-cooktops",
    brand: "Showroom Grade (Demo)",
    priceNote: "Contact for in-store price & offers",
    indicativePrice: "₹3,100 (Indicative MRP ₹4,400)",
    availabilityStatus: "In Stock at Store",
    shortDescription: "7mm shatter-resistant black toughened glass cooktop with heavy tri-pin brass burners and spill-proof design.",
    fullDescription: "A stylish modern cooktop designed for heavy Indian kitchens. Accommodates three vessels simultaneously with ample pan clearance. Features powder-coated sturdy pan supports, drip trays, and smooth 360-degree revolving gas inlet nozzle.",
    image: "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80",
    keySpecs: [
      { label: "Burner Count", value: "3 (1 Small, 1 Medium, 1 Jumbo)" },
      { label: "Burner Material", value: "100% Forged Tri-Pin Brass" },
      { label: "Top Material", value: "7mm Shatter-Resistant Toughened Glass" },
      { label: "Frame", value: "Rust-Resistant Black Coated Steel" },
      { label: "Inlet Nozzle", value: "360-Degree Swivel Brass Inlet" }
    ],
    features: [
      "Fuel-saving brass burners provide steady blue flames",
      "Removable stainless steel drip trays for quick wipe down",
      "Heavy non-slip rubber legs prevent movement during rotis",
      "Spare nozzles and repair support available at our store"
    ],
    isFeatured: true
  },
  {
    id: "nh-gs-02",
    slug: "classic-stainless-steel-2-burner-stove",
    name: "Classic Heavy-Gauge Stainless Steel 2-Burner Gas Stove",
    categoryId: "gas-stoves-cooktops",
    brand: "Traditional High-Durability (Demo)",
    priceNote: "Contact for in-store price & offers",
    indicativePrice: "₹1,850 (Indicative MRP ₹2,400)",
    availabilityStatus: "In Stock at Store",
    shortDescription: "Jointless heavy-sheet stainless steel body built for extreme durability and effortless maintenance.",
    fullDescription: "The timeless workhorse of Indian homes. Resistant to scratches, rust, and heavy utensil drops. Features two high-grade brass burners, smooth precision gas valves, and sturdy vitreous enameled pan supports.",
    image: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&w=800&q=80",
    keySpecs: [
      { label: "Burner Configuration", value: "2 Burners (1 Big, 1 Small)" },
      { label: "Body Material", value: "Heavy-Gauge Magnetic Stainless Steel" },
      { label: "Ignition Type", value: "Manual Match / Spark Ignition" },
      { label: "Gas Type", value: "Standard Domestic LPG" }
    ],
    features: [
      "Jointless stamped body without sharp corners",
      "High thermal efficiency brass burner heads",
      "Sturdy enough for large milk pots and heavy iron kadhais",
      "Complete replacement parts readily stocked in our shop"
    ],
    isFeatured: false
  },

  // Cookers & Cookware
  {
    id: "nh-cw-01",
    slug: "outer-lid-pressure-cooker-5-litre",
    name: "Heavy Base Outer Lid Pressure Cooker (5 Litres)",
    categoryId: "cookers-cookware",
    brand: "Trusted Indian Standard (Demo)",
    priceNote: "Contact for in-store price & offers",
    indicativePrice: "₹1,450 (Indicative MRP ₹1,950)",
    availabilityStatus: "In Stock at Store",
    shortDescription: "Virgin aluminium heavy base cooker with fusible metallic safety plug and food-grade silicone gasket.",
    fullDescription: "Ideal family cooker for dals, rice, curries, and legumes. Engineered with thick heat-diffusing base that eliminates hotspots and prevents food sticking. Features durable stay-cool bakelite handles with twin screw assembly.",
    image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=800&q=80",
    keySpecs: [
      { label: "Capacity", value: "5.0 Litres (Ideal for 4-7 persons)" },
      { label: "Body Type", value: "Outer Lid with Precision Weight Valve" },
      { label: "Material", value: "Food-Safe Pure Virgin Aluminium" },
      { label: "Safety System", value: "Gasket Release System + Fusible Alloy Plug" }
    ],
    features: [
      "Sturdy handles designed for balanced carrying",
      "Controlled pressure release whistle with anti-clog vent tube",
      "Original replacement gaskets and safety plugs always in stock",
      "Tested and certified to Indian safety standards"
    ],
    isFeatured: true
  },
  {
    id: "nh-cw-02",
    slug: "hard-anodized-deep-kadhai-with-lid",
    name: "Hard Anodized Deep Fry Kadhai with Glass Lid (2.5L)",
    categoryId: "cookers-cookware",
    brand: "Premium Kitchenware (Demo)",
    priceNote: "Contact for in-store price & offers",
    indicativePrice: "₹980 (Indicative MRP ₹1,350)",
    availabilityStatus: "Popular Counter Item",
    shortDescription: "Non-toxic, non-reactive hard anodized surface twice as hard as stainless steel, with stay-cool riveted handles.",
    fullDescription: "Cook tangy tomato gravies, deep fry samosas, and saute vegetables with zero metal reaction. The dark hard-anodized surface absorbs heat faster, cuts LPG usage, and will not peel or pit over years of rigorous use.",
    image: "https://images.unsplash.com/photo-1544033527-b192daee1f5b?auto=format&fit=crop&w=800&q=80",
    keySpecs: [
      { label: "Capacity", value: "2.5 Litres" },
      { label: "Coating Type", value: "Electrolytically Anodized Non-Teflon" },
      { label: "Thickness", value: "3.25mm Heavy Gauge Base" },
      { label: "Handles", value: "Heavy Riveted Stainless Steel" }
    ],
    features: [
      "Metal-spoon friendly and scratch-resistant",
      "Faster thermal distribution saves cooking gas",
      "Toughened glass lid with steam exhaust vent",
      "Ideal for high-heat frying and slow curries"
    ],
    isFeatured: false
  },

  // Electrical Products
  {
    id: "nh-el-01",
    slug: "fire-retardant-copper-house-wire-90m",
    name: "FR Grade 100% Pure Copper House Wire (90m Roll, 1.5 sq mm)",
    categoryId: "electrical-products",
    brand: "Standard Electricals (Demo)",
    priceNote: "Contact for bundle rates & contractor pricing",
    indicativePrice: "₹1,650 per 90m roll",
    availabilityStatus: "In Stock at Store",
    shortDescription: "Fire-retardant virgin electrolytic copper building wire certified for residential and commercial wiring.",
    fullDescription: "High-conductivity, 99.97% pure oxygen-free copper wires with multi-strand flexibility. Formulated with flame-retardant PVC insulation that self-extinguishes during electrical short circuits, protecting home wiring.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
    keySpecs: [
      { label: "Conductor", value: "99.97% Bare Annealed Copper" },
      { label: "Cross Section", value: "1.5 sq mm (Also available in 2.5 & 4 sq mm)" },
      { label: "Length", value: "90 Meters Coil" },
      { label: "Insulation", value: "FR Type A PVC compound (Oxygen index > 29%)" }
    ],
    features: [
      "Zero spark propagation insulation",
      "Low electrical resistance reduces electricity meter wastage",
      "Easy conduit pulling without kinks or jacket peeling",
      "Full range of gauges (0.75 sq mm to 6 sq mm) in stock"
    ],
    isFeatured: true
  },
  {
    id: "nh-el-02",
    slug: "heavy-duty-4-way-extension-board",
    name: "Heavy-Duty 4-Way Surge Protected Extension Board (4m Cord)",
    categoryId: "electrical-products",
    brand: "Utility Safe (Demo)",
    priceNote: "Contact for in-store price & offers",
    indicativePrice: "₹420 (Indicative MRP ₹650)",
    availabilityStatus: "In Stock at Store",
    shortDescription: "Universal 4-socket power strip with master neon switch, reset fuse, and heavy-gauge 4-meter copper cord.",
    fullDescription: "Designed for television units, home computer setups, refrigerators, and portable tools. Fitted with heavy brass internal strips for tight plug retention and an ergonomic wall mount hook.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    keySpecs: [
      { label: "Sockets", value: "4 Universal Sockets with shutter" },
      { label: "Rating", value: "6 Ampere / 250V AC" },
      { label: "Cord Length", value: "4 Meters Heavy Duty 3-Core" },
      { label: "Protection", value: "Built-in Resettable Circuit Breaker" }
    ],
    features: [
      "Pure brass busbars prevent sparking and loose contact",
      "Sturdy shock-proof ABS casing",
      "Smooth on/off rocker switch with red glow indicator",
      "Repairable switch & fuse design"
    ],
    isFeatured: false
  },

  // Torches & Lighting
  {
    id: "nh-tl-01",
    slug: "kisan-long-range-rechargeable-torch",
    name: "Kisan Heavy-Duty Long-Range LED Rechargeable Torch",
    categoryId: "torches-lighting",
    brand: "Rural Tech Series (Demo)",
    priceNote: "Contact for in-store price & offers",
    indicativePrice: "₹780 (Indicative MRP ₹1,150)",
    availabilityStatus: "Popular Counter Item",
    shortDescription: "Ultra-bright 1-kilometer focused beam with high-capacity lithium battery, dual charging, and side emergency lantern.",
    fullDescription: "Specially designed for field navigation, night watch, farm rounds, and rural power outages. Features an aircraft-grade aluminum reflector, deep parabolic housing, shoulder strap, and an integrated side reading light.",
    image: "https://images.unsplash.com/photo-1546554137-f86b9593a222?auto=format&fit=crop&w=800&q=80",
    keySpecs: [
      { label: "Beam Range", value: "Up to 1000m Visible Focus" },
      { label: "Battery", value: "Rechargeable Heavy Lithium-Ion Pack" },
      { label: "Backup Time", value: "Up to 8-12 Hours on Full Charge" },
      { label: "Dual Lighting", value: "Front Long Beam + Side Flood Lantern" }
    ],
    features: [
      "Tough impact-resistant ABS body with comfortable pistol grip",
      "Direct AC charging cable included",
      "Low battery indicator alert",
      "Sturdy carrying sling for hands-free agricultural use"
    ],
    isFeatured: true
  },
  {
    id: "nh-tl-02",
    slug: "emergency-inverter-led-bulb-9w",
    name: "Automatic Emergency Inverter LED Bulb (9W)",
    categoryId: "torches-lighting",
    brand: "BrightLight (Demo)",
    priceNote: "Contact for in-store price & offers",
    indicativePrice: "₹340 (Indicative MRP ₹499)",
    availabilityStatus: "In Stock at Store",
    shortDescription: "Operates as a regular 9W home bulb and stays ON automatically for 4 hours when electricity goes out.",
    fullDescription: "Fits into standard B22 bulb holders without any separate inverter wiring. Charges itself while the wall switch is on during normal electricity, and seamlessly continues illumination during sudden power cuts.",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80",
    keySpecs: [
      { label: "Wattage", value: "9 Watts (Cool Daylight 6500K)" },
      { label: "Cap Type", value: "Standard Indian B22 Bayonet" },
      { label: "Backup Duration", value: "3.5 to 4 Hours Continuous" },
      { label: "Charging Time", value: "8-10 Hours on Normal Supply" }
    ],
    features: [
      "Instant switch-over within 0.02 seconds of power cut",
      "Can also be used as a handheld portable light fixture",
      "Surge protected driver withstands village voltage fluctuations",
      "Tested and verified counter warranty"
    ],
    isFeatured: false
  },

  // Sewing Machine Accessories
  {
    id: "nh-sm-01",
    slug: "domestic-sewing-machine-motor-kit",
    name: "High-Torque Sewing Machine Motor Kit with Foot Pedal",
    categoryId: "sewing-machine-accessories",
    brand: "TailorCraft (Demo)",
    priceNote: "Contact for in-store price & offers",
    indicativePrice: "₹1,250 (Indicative MRP ₹1,700)",
    availabilityStatus: "In Stock at Store",
    shortDescription: "Complete bolt-on conversion kit to electrify any manual hand or treadle sewing machine.",
    fullDescription: "Converts manual domestic sewing machines into effortless electric operation. Includes variable-speed step-down foot controller, heavy copper winding motor bracket, durable rubber drive belt, and mounting bolts.",
    image: "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80",
    keySpecs: [
      { label: "Motor Power", value: "100W High Speed Copper Motor" },
      { label: "Speed Control", value: "Electronic Foot Treadle Pedal" },
      { label: "Compatibility", value: "Standard domestic machines (Singer, Usha, Merrit style)" },
      { label: "In the Box", value: "Motor, Foot Pedal, Drive Belt, Bracket & Screws" }
    ],
    features: [
      "Smooth variable speed response from delicate slow stitch to fast run",
      "Easy mounting onto existing body bracket holes",
      "In-store installation assistance available at our counter",
      "Low noise copper-core motor construction"
    ],
    isFeatured: true
  },
  {
    id: "nh-sm-02",
    slug: "shuttle-race-and-bobbin-case-set",
    name: "Steel Shuttle Race Assembly & Bobbin Case Set",
    categoryId: "sewing-machine-accessories",
    brand: "Master Fit (Demo)",
    priceNote: "Contact for in-store price & offers",
    indicativePrice: "₹240 complete assembly",
    availabilityStatus: "Popular Counter Item",
    shortDescription: "Precision CNC milled hardened steel shuttle hook assembly for jam-free, smooth stitching.",
    fullDescription: "Replaces worn, scratched, or loose shuttle hooks that cause thread snapping, skipped stitches, and cloth chewing. Includes shuttle ring, lock levers, hardened hook, and precision steel bobbin case.",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    keySpecs: [
      { label: "Component", value: "Complete Shuttle Race + Hook + Bobbin Case" },
      { label: "Material", value: "Case-Hardened Anti-Rust Tool Steel" },
      { label: "Fitment", value: "Universal Domestic Round-Bobbin Machines" }
    ],
    features: [
      "Eliminates thread jams and needle breakages",
      "Ultra-smooth surface polish prevents thread fraying",
      "Direct counter fitment check available at our repair desk",
      "Includes genuine tension spring screw"
    ],
    isFeatured: false
  },

  // Household Essentials
  {
    id: "nh-he-01",
    slug: "heavy-weight-dry-iron-1000w",
    name: "Heavy-Weight 1000W Classic Dry Iron (Golden Non-Stick Soleplate)",
    categoryId: "household-essentials",
    brand: "Standard Home (Demo)",
    priceNote: "Contact for in-store price & offers",
    indicativePrice: "₹820 (Indicative MRP ₹1,200)",
    availabilityStatus: "In Stock at Store",
    shortDescription: "Traditional heavy 1.6kg dry iron that glides smoothly over crisp cottons, sarees, and formal shirts.",
    fullDescription: "The preferred iron for Indian households who demand crisp creases on cotton shirts, kurtas, and heavy linens without exerting arm pressure. Heavy cast-iron body with golden non-stick soleplate, 360-degree swivel cord, and multi-fabric thermostat.",
    image: "https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=800&q=80",
    keySpecs: [
      { label: "Power", value: "1000 Watts Rapid Heating" },
      { label: "Weight", value: "Approx. 1.6 kg Heavy Cast Base" },
      { label: "Soleplate", value: "Golden Ceramic Non-Stick Coating" },
      { label: "Cord", value: "Cotton Braided 360 Swivel Cord" }
    ],
    features: [
      "Heavy weight removes stubborn wrinkles with a single pass",
      "Precision thermostat dial for Cotton, Linen, Wool, Silk, Rayon",
      "Thermal fuse prevents overheating or burnout",
      "Repairable element and thermostat available in our workshop"
    ],
    isFeatured: true
  },
  {
    id: "nh-he-02",
    slug: "shockproof-immersion-water-heater-rod",
    name: "Shockproof Waterproof Immersion Water Heater Rod (1500W)",
    categoryId: "household-essentials",
    brand: "Safety First (Demo)",
    priceNote: "Contact for in-store price & offers",
    indicativePrice: "₹460 (Indicative MRP ₹750)",
    availabilityStatus: "In Stock at Store",
    shortDescription: "Nickel plated copper element with bucket hook and completely sealed waterproof handle.",
    fullDescription: "Quick, economical bath water heating for winter months. Features sealed waterproof bakelite head that prevents accidental water ingress and electric shock hazards, paired with an anti-corrosive copper tube.",
    image: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=800&q=80",
    keySpecs: [
      { label: "Power", value: "1500 Watts" },
      { label: "Heating Tube", value: "Nickel-Plated Pure Copper" },
      { label: "Safety Hook", value: "Holding Clip with Max/Min Water Indicator" },
      { label: "Cord", value: "Heavy 16A 3-Pin Molded Plug" }
    ],
    features: [
      "Heating efficiency reaches bath temperature within 10 minutes",
      "Specially insulated handle for complete electrical safety",
      "Corrosion-resistant plating extends seasonal lifespan",
      "Tested on counter before delivery"
    ],
    isFeatured: false
  },

  // Appliance Spare Parts
  {
    id: "nh-sp-01",
    slug: "universal-mixer-grinder-blade-coupler-set",
    name: "Universal Mixer Grinder Jar Blade & Drive Coupler Set",
    categoryId: "appliance-spare-parts",
    brand: "FitMax Spares (Demo)",
    priceNote: "Contact for in-store price & offers",
    indicativePrice: "₹120 – ₹250 depending on model",
    availabilityStatus: "Popular Counter Item",
    shortDescription: "Food-grade stainless steel replacement blades and heavy nylon motor couplers for all major brands.",
    fullDescription: "Restore sluggish, blunt, or leaking mixer jars without buying an entire new jar. We stock brass-bushed replacement blades, hardened drive teeth, jar nuts, and rubber washers for all domestic brands.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    keySpecs: [
      { label: "Material", value: "Grade 304 Stainless Steel Blades + Virgin Nylon Couplers" },
      { label: "Shaft Diameter", value: "Standard 8mm & 6mm Center Shafts" },
      { label: "Compatibility", value: "Universal multi-groove teeth" }
    ],
    features: [
      "Brings dull mixer jars back to factory grinding speed",
      "Free fitting and alignment at our Bhitiya Chauraha repair desk",
      "Food-safe brass bushing eliminates black residue",
      "Available for Wet, Dry, and Chutney jar sizes"
    ],
    isFeatured: true
  },
  {
    id: "nh-sp-02",
    slug: "certified-pressure-cooker-gasket-safety-valve",
    name: "Certified Food-Grade Cooker Gaskets & Safety Valve Combos",
    categoryId: "appliance-spare-parts",
    brand: "SafeSeal (Demo)",
    priceNote: "Contact for in-store price & offers",
    indicativePrice: "₹50 – ₹110",
    availabilityStatus: "Popular Counter Item",
    shortDescription: "Food-grade nitrile and silicone rubber gaskets (2L to 12L) and certified safety fusible plugs.",
    fullDescription: "Pressure cooker leaking steam or whistle stopped functioning? Don't compromise family safety. Our genuine food-grade gaskets retain steam pressure properly and safety valves melt instantly if excess pressure builds.",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80",
    keySpecs: [
      { label: "Sizes Available", value: "2L, 3L, 5L, 7.5L, 10L, 12L" },
      { label: "Types", value: "Outer Lid & Inner Lid Profiles" },
      { label: "Safety Plug", value: "Certified Fusible Low-Melting Alloy Core" }
    ],
    features: [
      "100% food grade rubber that doesn't smell or leach into food",
      "Eliminates messy stove-top water sputtering",
      "Brings back proper timed whistling",
      "Installed and tested immediately at our counter"
    ],
    isFeatured: false
  }
];

export function getWhatsAppProductEnquiryUrl(product: Product): string {
  const text = encodeURIComponent(
    `Hello Nandlal Hometech & Utility,\n\nI am interested in:\n• Product: ${product.name}\n• Category: ${product.categoryId}\n• Ref ID: ${product.id}\n\nPlease share current in-store availability, latest price, and available brand models at your Bhitiya Chauraha store.\n\nThank you!`
  );
  return `https://wa.me/919450000000?text=${text}`;
}

export function getWhatsAppRepairEnquiryUrl(serviceName: string, applianceType?: string, problemDesc?: string): string {
  const text = encodeURIComponent(
    `Hello Nandlal Hometech & Utility Repair Desk,\n\nI need repair service assistance for:\n• Service: ${serviceName}\n• Appliance Type: ${applianceType || "Home Appliance"}\n• Issue Description: ${problemDesc || "Need diagnosis & repair estimate"}\n\nWhen can I bring this to your Bhitiya Chauraha store for inspection?\n\nThank you!`
  );
  return `https://wa.me/919450000000?text=${text}`;
}
