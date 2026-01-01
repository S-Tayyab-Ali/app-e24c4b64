export interface Question {
  id: string;
  text: string;
  options: Option[];
}

export interface Option {
  id: string;
  text: string;
  value: string; // Used for logic mapping
}

export const questions: Question[] = [
  {
    id: "q1",
    text: "Do you live in a single-story home or a multi-story home?",
    options: [
      { id: "q1_opt1", text: "Single-story home (or apartment on one floor)", value: "single_story" },
      { id: "q1_opt2", text: "Multi-story home with stairs", value: "multi_story" },
      { id: "q1_opt3", text: "Mobile home / Manufactured home", value: "mobile_home" }
    ]
  },
  {
    id: "q2",
    text: "Have you or your loved one experienced a fall in the last 12 months?",
    options: [
      { id: "q2_opt1", text: "Yes, more than once", value: "falls_multiple" },
      { id: "q2_opt2", text: "Yes, once", value: "falls_once" },
      { id: "q2_opt3", text: "No, but I worry about it", value: "falls_worry" },
      { id: "q2_opt4", text: "No, I feel steady", value: "falls_none" }
    ]
  },
  {
    id: "q3",
    text: "How is the lighting in your home, especially in hallways and bathrooms?",
    options: [
      { id: "q3_opt1", text: "Bright and well-lit everywhere", value: "lighting_good" },
      { id: "q3_opt2", text: "Some areas are dim or dark", value: "lighting_dim" },
      { id: "q3_opt3", text: "I often struggle to see clearly at night", value: "lighting_poor" }
    ]
  },
  {
    id: "q4",
    text: "Do you have grab bars installed in your bathroom (shower/tub and near toilet)?",
    options: [
      { id: "q4_opt1", text: "Yes, professionally installed", value: "grab_bars_yes" },
      { id: "q4_opt2", text: "No, but I use towel racks or walls for support", value: "grab_bars_unsafe" },
      { id: "q4_opt3", text: "No, I don't have any", value: "grab_bars_none" }
    ]
  },
  {
    id: "q5",
    text: "Do you live alone?",
    options: [
      { id: "q5_opt1", text: "Yes, I live alone", value: "living_alone" },
      { id: "q5_opt2", text: "No, I live with a spouse/partner", value: "living_spouse" },
      { id: "q5_opt3", text: "No, I live with family/caregivers", value: "living_family" }
    ]
  },
  {
    id: "q6",
    text: "What is your primary concern regarding home maintenance?",
    options: [
      { id: "q6_opt1", text: "Cost of repairs", value: "concern_cost" },
      { id: "q6_opt2", text: "Finding trustworthy contractors", value: "concern_trust" },
      { id: "q6_opt3", text: "Physical ability to do chores", value: "concern_ability" },
      { id: "q6_opt4", text: "No major concerns", value: "concern_none" }
    ]
  },
  {
    id: "q7",
    text: "Are you currently receiving any financial assistance for home repairs?",
    options: [
      { id: "q7_opt1", text: "Yes", value: "finance_yes" },
      { id: "q7_opt2", text: "No, but I might qualify", value: "finance_maybe" },
      { id: "q7_opt3", text: "No, and I don't think I qualify", value: "finance_no" },
      { id: "q7_opt4", text: "I'm not sure", value: "finance_unsure" }
    ]
  }
];

