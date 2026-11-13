export interface StoreInfo {
  name: string;
  tagline: string;
  address: {
    line1: string;
    line2: string;
    landmark: string;
    city: string;
    district: string;
    state: string;
    country: string;
    pincode: string;
    fullFormatted: string;
  };
  contact: {
    phonePlaceholder: string;
    phoneDisplay: string;
    whatsappNumber: string;
    whatsappDisplay: string;
    emailPlaceholder: string;
  };
  timings: {
    weekdays: string;
    sunday: string;
    lunchBreak?: string;
    statusText: string;
  };
  navigationHelp: {
    nearbyPoints: string[];
    travelNote: string;
  };
}

export const STORE_INFO: StoreInfo = {
  name: "NANDLAL HOMETECH & UTILITY",
  tagline: "Everything for Your Home, All in One Place.",
  address: {
    line1: "Bhitiya Chauraha",
    line2: "Near Walterganj Police Station, Next to Jaiswal Sweets",
    landmark: "Next to Jaiswal Sweets, Walterganj Road",
    city: "Basti",
    district: "Basti",
    state: "Uttar Pradesh",
    country: "India",
    pincode: "272182",
    fullFormatted: "Bhitiya Chauraha, Near Walterganj Police Station, Next to Jaiswal Sweets, Basti, Uttar Pradesh, India"
  },
  contact: {
    phonePlaceholder: "+91 94500 00000",
    phoneDisplay: "+91 94500 00000 (Store Desk)",
    whatsappNumber: "919450000000",
    whatsappDisplay: "+91 94500 00000",
    emailPlaceholder: "contact@nandlalhometech.in"
  },
  timings: {
    weekdays: "Monday – Saturday: 9:00 AM – 8:30 PM",
    sunday: "Sunday: 9:30 AM – 6:00 PM",
    statusText: "Open Today for In-Store Shopping & Repairs"
  },
  navigationHelp: {
    nearbyPoints: [
      "Next to Jaiswal Sweets (Landmark)",
      "Near Walterganj Police Station (200m)",
      "Bhitiya Chauraha Central Market Junction",
      "Easily accessible from Walterganj and nearby Basti villages"
    ],
    travelNote: "Convenient parking available outside the showroom for two-wheelers and local transport."
  }
};

export const VALUE_PROPOSITIONS = [
  {
    id: "multi-category",
    title: "Multiple Household Categories",
    description: "From modern kitchen appliances to electrical wiring and sewing accessories, get complete home solutions under one single roof."
  },
  {
    id: "trusted-local",
    title: "Local & Trusted Service",
    description: "A welcoming, family-run retail store built on honest neighborhood relationships, clear advice, and fair local prices."
  },
  {
    id: "repairing-experience",
    title: "Hands-on Repairing Knowledge",
    description: "In-store technician desk with practical repair experience, genuine spare parts, and dependable problem-solving."
  },
  {
    id: "personal-assistance",
    title: "Personal Customer Assistance",
    description: "We help you select the exact equipment, wattage, or replacement part suited for your home or village power condition."
  },
  {
    id: "convenient-location",
    title: "Convenient Store Location",
    description: "Centrally positioned at Bhitiya Chauraha near Walterganj Police Station, saving you long trips into city center."
  }
];
