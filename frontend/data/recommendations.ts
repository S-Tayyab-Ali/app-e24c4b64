import { Resource } from './resources';

export interface Recommendation {
  id: string;
  title: string;
  description: string;
  type: 'DIY' | 'Low-Cost' | 'Professional';
  priority: 'High' | 'Medium' | 'Low';
  costRange: '$' | '$$' | '$$$';
  relatedResourceIds: string[];
  triggerLogic: (answers: Record<string, string>) => boolean;
  guidance?: {
    whoToAsk: string;
    whatToAsk: string[];
  };
}

export const recommendations: Recommendation[] = [
  {
    id: "rec_grab_bars",
    title: "Install Grab Bars in the Bathroom",
    description: "Falls often happen in the bathroom. Installing grab bars near the toilet and in the shower/tub provides essential support. Do not rely on towel racks, as they are not designed to hold weight.",
    type: "Low-Cost",
    priority: "High",
    costRange: "$$",
    relatedResourceIds: ["res_rebuilding", "res_home_safety_services", "res_taskrabbit"],
    triggerLogic: (answers) => answers["q4"] === "grab_bars_unsafe" || answers["q4"] === "grab_bars_none" || answers["q2"] === "falls_multiple" || answers["q2"] === "falls_once",
    guidance: {
      whoToAsk: "Handyman or Contractor",
      whatToAsk: [
        "Do you anchor the grab bars into the studs?",
        "Are you familiar with ADA placement guidelines for grab bars?",
        "Can you install a textured bar for better grip?"
      ]
    }
  },
  {
    id: "rec_lighting",
    title: "Improve Home Lighting",
    description: "Good lighting is crucial for preventing falls. Add nightlights in hallways and bathrooms, and ensure stairways are well-lit. Consider motion-sensor lights for hands-free illumination.",
    type: "DIY",
    priority: "Medium",
    costRange: "$",
    relatedResourceIds: ["res_taskrabbit", "res_dayle_mcintosh"],
    triggerLogic: (answers) => answers["q3"] === "lighting_dim" || answers["q3"] === "lighting_poor",
    guidance: {
      whoToAsk: "Electrician or Handyman",
      whatToAsk: [
        "Can you install motion-sensor switches?",
        "What type of bulbs provide the best brightness without glare?",
        "Can we add under-cabinet lighting in the kitchen?"
      ]
    }
  },
  {
    id: "rec_stairs",
    title: "Secure Your Stairways",
    description: "Stairs are a high-risk area. Ensure handrails are on both sides and extend beyond the top and bottom steps. Remove loose rugs and ensure good visibility.",
    type: "Professional",
    priority: "High",
    costRange: "$$$",
    relatedResourceIds: ["res_home_safety_services", "res_certified_aging", "res_rebuilding"],
    triggerLogic: (answers) => answers["q1"] === "multi_story" && (answers["q2"] !== "falls_none"),
    guidance: {
      whoToAsk: "Contractor or CAPS Specialist",
      whatToAsk: [
        "Can you install a second handrail on the opposite wall?",
        "Is a stair lift a feasible option for this staircase?",
        "How can we improve the visibility of the step edges?"
      ]
    }
  },
  {
    id: "rec_emergency_alert",
    title: "Consider a Medical Alert System",
    description: "Living alone increases the risk if a fall occurs. A wearable medical alert button ensures you can get help immediately if you can't reach a phone.",
    type: "Low-Cost",
    priority: "High",
    costRange: "$$",
    relatedResourceIds: ["res_lifeline", "res_aaa"],
    triggerLogic: (answers) => answers["q5"] === "living_alone" || answers["q2"] === "falls_multiple",
    guidance: {
      whoToAsk: "Service Provider Sales Rep",
      whatToAsk: [
        "Does this system require a landline or does it work with cellular?",
        "Is there a contract or cancellation fee?",
        "Does it have automatic fall detection?"
      ]
    }
  },
  {
    id: "rec_funding",
    title: "Explore Home Repair Funding",
    description: "There are local programs that can help cover the cost of critical home repairs and safety modifications for eligible homeowners.",
    type: "Professional",
    priority: "Medium",
    costRange: "$",
    relatedResourceIds: ["res_habitat", "res_cap", "res_rebuilding", "res_liheap"],
    triggerLogic: (answers) => answers["q7"] === "finance_maybe" || answers["q7"] === "finance_unsure" || answers["q6"] === "concern_cost",
    guidance: {
      whoToAsk: "Program Coordinator",
      whatToAsk: [
        "What are the income eligibility requirements?",
        "Is this a grant or a loan that needs to be repaid?",
        "How long is the application process?"
      ]
    }
  },
  {
    id: "rec_contractor_vetting",
    title: "Vet Contractors Carefully",
    description: "Finding trustworthy help is important. Always ask for references, check licenses, and get written estimates before starting work.",
    type: "DIY",
    priority: "Medium",
    costRange: "$",
    relatedResourceIds: ["res_council_aging", "res_certified_aging"],
    triggerLogic: (answers) => answers["q6"] === "concern_trust",
    guidance: {
      whoToAsk: "Contractor",
      whatToAsk: [
        "Can you provide proof of insurance and licensing?",
        "Do you have references from recent clients?",
        "Will you provide a written contract detailing the scope and cost?"
      ]
    }
  },
  {
    id: "rec_declutter",
    title: "Clear Walkways and Remove Hazards",
    description: "Simple changes like removing throw rugs, securing cords, and clearing clutter from walkways can significantly reduce fall risk.",
    type: "DIY",
    priority: "High",
    costRange: "$",
    relatedResourceIds: ["res_taskrabbit", "res_dayle_mcintosh"],
    triggerLogic: (answers) => answers["q2"] !== "falls_none", // General recommendation for anyone with fall risk
    guidance: {
      whoToAsk: "Family Member or Organizer",
      whatToAsk: [
        "Can you help me rearrange furniture to open up walkways?",
        "Can we tape down these cords or move them behind furniture?",
        "Let's look for loose rugs that need to be removed."
      ]
    }
  }
];

