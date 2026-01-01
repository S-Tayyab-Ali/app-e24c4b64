export interface Resource {
  id: string;
  name: string;
  category: 'Funding' | 'Contractors' | 'Support Services';
  description: string;
  servicesOffered: string[];
  contactPhone: string;
  contactEmail?: string;
  website: string;
  address?: string;
  costRange: '$' | '$$' | '$$$';
  tags: string[]; // Used for matching with recommendations
}

export const resources: Resource[] = [
  {
    id: "res_aaa",
    name: "Orange County Office on Aging",
    category: "Support Services",
    description: "The primary local agency providing information, referrals, and assistance for older adults and caregivers in Orange County.",
    servicesOffered: ["Information & Referral", "Caregiver Support", "Nutrition Programs", "Legal Assistance"],
    contactPhone: "(800) 510-2020",
    website: "https://www.officeonaging.ocgov.com",
    address: "1300 S. Grand Ave, Bldg. B, Santa Ana, CA 92705",
    costRange: "$",
    tags: ["general", "funding", "support"]
  },
  {
    id: "res_habitat",
    name: "Habitat for Humanity OC - Home Repair Program",
    category: "Funding",
    description: "Provides critical home repairs for low-income homeowners to address health and safety issues.",
    servicesOffered: ["Roof Repair", "Accessibility Modifications", "Painting", "Landscaping"],
    contactPhone: "(714) 434-6200",
    website: "https://www.habitatoc.org",
    costRange: "$",
    tags: ["repairs", "funding", "construction"]
  },
  {
    id: "res_meals",
    name: "Meals on Wheels Orange County",
    category: "Support Services",
    description: "Delivers nutritious meals to homebound older adults and provides safety checks.",
    servicesOffered: ["Home-Delivered Meals", "Adult Day Services", "Care Coordination"],
    contactPhone: "(714) 220-0224",
    website: "https://www.mealsonwheelsoc.org",
    costRange: "$",
    tags: ["food", "support", "living_alone"]
  },
  {
    id: "res_cap",
    name: "Community Action Partnership of Orange County",
    category: "Funding",
    description: "Offers utility assistance and weatherization programs to make homes more energy-efficient and safe.",
    servicesOffered: ["Utility Assistance", "Weatherization", "Home Safety Checks"],
    contactPhone: "(714) 667-0717",
    website: "https://www.capoc.org",
    costRange: "$",
    tags: ["utilities", "funding", "maintenance"]
  },
  {
    id: "res_rebuilding",
    name: "Rebuilding Together Orange County",
    category: "Contractors",
    description: "Non-profit organization providing free critical home repairs and safety modifications for low-income seniors.",
    servicesOffered: ["Grab Bar Installation", "Ramp Construction", "Electrical Repairs", "Plumbing"],
    contactPhone: "(714) 667-8174",
    website: "https://www.rebuildingtogetheroc.org",
    costRange: "$",
    tags: ["repairs", "grab_bars", "accessibility"]
  },
  {
    id: "res_council_aging",
    name: "Council on Aging - Southern California",
    category: "Support Services",
    description: "Provides advocacy, protection, and education for older adults.",
    servicesOffered: ["HICAP (Medicare Counseling)", "Ombudsman", "Friendly Visitor Program"],
    contactPhone: "(714) 479-0107",
    website: "https://www.coasc.org",
    costRange: "$",
    tags: ["advocacy", "support", "insurance"]
  },
  {
    id: "res_dayle_mcintosh",
    name: "Dayle McIntosh Center",
    category: "Support Services",
    description: "Independent Living Center providing services to people with disabilities and older adults.",
    servicesOffered: ["Assistive Technology", "Home Modification Consultations", "Peer Support"],
    contactPhone: "(714) 621-3300",
    website: "https://www.daylemcintosh.org",
    costRange: "$",
    tags: ["disability", "technology", "accessibility"]
  },
  {
    id: "res_certified_aging",
    name: "Certified Aging-in-Place Specialists (CAPS)",
    category: "Contractors",
    description: "Directory of professionals trained in designing and building accessible home environments.",
    servicesOffered: ["Home Remodeling", "Bathroom Modifications", "Kitchen Accessibility"],
    contactPhone: "N/A (Search Directory)",
    website: "https://www.nahb.org/caps-directory",
    costRange: "$$$",
    tags: ["professional", "remodel", "contractor"]
  },
  {
    id: "res_oc_transport",
    name: "OCTA ACCESS Service",
    category: "Support Services",
    description: "Shared-ride service for people who are unable to use the regular fixed-route bus service because of functional limitations.",
    servicesOffered: ["Door-to-Door Transportation", "Wheelchair Accessible Rides"],
    contactPhone: "(877) 628-2232",
    website: "https://www.octa.net",
    costRange: "$",
    tags: ["transportation", "mobility"]
  },
  {
    id: "res_alzoc",
    name: "Alzheimer's Orange County",
    category: "Support Services",
    description: "Provides support, education, and resources for individuals with memory loss and their caregivers.",
    servicesOffered: ["Helpline", "Support Groups", "Education Classes", "Care Consultations"],
    contactPhone: "(844) 435-7259",
    website: "https://www.alzoc.org",
    costRange: "$",
    tags: ["memory", "dementia", "caregiver"]
  },
  {
    id: "res_211",
    name: "2-1-1 Orange County",
    category: "Support Services",
    description: "A free, 24-hour information and referral system linking people to health and human services.",
    servicesOffered: ["Crisis Support", "Housing Information", "Food Assistance"],
    contactPhone: "2-1-1",
    website: "https://www.211oc.org",
    costRange: "$",
    tags: ["general", "emergency", "referral"]
  },
  {
    id: "res_home_safety_services",
    name: "Home Safety Services, Inc.",
    category: "Contractors",
    description: "Specializes in fall prevention and home safety modifications.",
    servicesOffered: ["Grab Bars", "Stair Lifts", "Ramps", "Safety Poles"],
    contactPhone: "(888) 388-3811",
    website: "https://www.homesafety.net",
    costRange: "$$",
    tags: ["safety", "falls", "modifications"]
  },
  {
    id: "res_taskrabbit",
    name: "TaskRabbit (Handyman Services)",
    category: "Contractors",
    description: "Platform to find local help for small home repairs and tasks.",
    servicesOffered: ["Furniture Assembly", "Minor Repairs", "Mounting", "Moving Help"],
    contactPhone: "Online Only",
    website: "https://www.taskrabbit.com",
    costRange: "$$",
    tags: ["handyman", "small_jobs", "diy_help"]
  },
  {
    id: "res_lifeline",
    name: "Philips Lifeline",
    category: "Support Services",
    description: "Medical alert systems for 24/7 emergency response.",
    servicesOffered: ["Medical Alert Buttons", "Fall Detection", "Medication Dispensing"],
    contactPhone: "(855) 681-5351",
    website: "https://www.lifeline.philips.com",
    costRange: "$$",
    tags: ["emergency", "alert", "technology"]
  },
  {
    id: "res_liheap",
    name: "Low Income Home Energy Assistance Program (LIHEAP)",
    category: "Funding",
    description: "Federally funded program to assist low-income households with energy bills.",
    servicesOffered: ["Bill Payment Assistance", "Energy Crisis Support", "Weatherization"],
    contactPhone: "(866) 675-6623",
    website: "https://www.csd.ca.gov/Pages/LIHEAP.aspx",
    costRange: "$",
    tags: ["utilities", "funding", "energy"]
  }
];

