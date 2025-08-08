export type Course = {
  id: string;
  level: "N5" | "N4";
  title: string;
  durationWeeks: number;
  schedule: string[];
  priceKES: number;
  description: string;
  features: string[];
};

export type RouteItem = {
  id: string;
  title: string;
  summary: string;
  steps: string[];
  notes?: string;
};

export type Partner = {
  id: string;
  name: string;
  country: string;
  category: string;
  website?: string;
};

export type Story = {
  id: string;
  name: string;
  levelAchieved: string;
  outcome: string;
  quote: string;
};

export const brand = {
  name: "Nippon Bridge Academy",
  shortName: "NBA",
  tagline: "Learn, Experience, Connect",
  description:
    "Japanese language school in Kenya helping learners progress from JLPT N5 to N4 and discover study and work opportunities in Japan.",
  colors: {
    background: "#E9F6F9", // pale blue inspired by the logo background
    primary: "#0E0E10", // sumi black
    accent: "#E36C7C", // sakura pink
    navy: "#1C2A44", // deep indigo
  },
  contact: {
    email: "info@nipponbridge.ac.ke",
    phone: "+254 700 000 000",
    whatsapp: "https://wa.me/254700000000",
    address: "Nairobi, Kenya",
  },
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    youtube: "https://youtube.com/",
  },
};

export const courses: Course[] = [
  {
    id: "n5-standard",
    level: "N5",
    title: "Beginner N5 (Foundation)",
    durationWeeks: 12,
    schedule: ["Weekday evenings", "Saturday bootcamp"],
    priceKES: 35000,
    description:
      "Start from zero, master hiragana/katakana, basic kanji, everyday grammar and conversation for survival Japanese.",
    features: [
      "Hiragana + Katakana mastery",
      "200+ essential kanji",
      "Listening & speaking labs",
      "JLPT-style quizzes",
      "Community conversation club",
    ],
  },
  {
    id: "n4-standard",
    level: "N4",
    title: "Lower-Intermediate N4",
    durationWeeks: 14,
    schedule: ["Weekday evenings", "Weekend intensive"],
    priceKES: 42000,
    description:
      "Build grammar and kanji to navigate daily life and work, preparing for JLPT N4.",
    features: [
      "450+ new kanji",
      "Dialog drills & role plays",
      "JLPT mock exams",
      "Career Japanese basics (keigo intro)",
      "Progress tracking & feedback",
    ],
  },
];

export const routes: RouteItem[] = [
  {
    id: "study-language-to-work",
    title: "Study in Japan → Vocational College → Work",
    summary:
      "Complete N5–N4 locally, join a Japanese language school (1–2 years) then progress to a senmon (vocational) college and employment.",
    steps: [
      "N5–N4 at NBA (Kenya)",
      "Enroll in language school in Japan (student visa)",
      "JLPT N3–N2 while in Japan",
      "Enter senmon school (specialized field)",
      "Job hunting and work placement",
    ],
    notes: "Popular route for long-term study and career in Japan.",
  },
  {
    id: "ssw",
    title: "Specified Skilled Worker (SSW)",
    summary:
      "Pathway for skilled work in designated sectors after language proficiency and skills tests.",
    steps: [
      "Achieve JLPT N4/N3",
      "Sector skills test (as required)",
      "Match with licensed recruiters/partners",
      "Obtain SSW visa & relocation",
    ],
  },
  {
    id: "university-degree",
    title: "University Degree Route",
    summary:
      "Prepare for EJU/JLPT, apply to Japanese universities for undergraduate or postgraduate programs.",
    steps: [
      "N4→N3 prep at NBA",
      "EJU guidance and documentation",
      "Apply to universities & scholarships",
      "Relocate for studies",
    ],
  },
  {
    id: "cultural-exchange",
    title: "Short-term Cultural/Exchange Programs",
    summary:
      "Join short programs, language camps, or internships to experience Japan before committing long-term.",
    steps: ["N5 foundation", "Program matching", "Travel arrangements"],
  },
];

export const partners: Partner[] = [
  { id: "lang-tokyo", name: "Tokyo Language Institute", country: "Japan", category: "Language School", website: "https://example.jp" },
  { id: "senmon-tech", name: "Kansai Tech College", country: "Japan", category: "Vocational College" },
  { id: "recruit-ssw", name: "Global SSW Recruit", country: "Japan", category: "Recruitment Agency" },
];

export const stories: Story[] = [
  {
    id: "mary-n4",
    name: "Mary W.",
    levelAchieved: "JLPT N4",
    outcome: "Language school admission in Osaka",
    quote:
      "NBA gave me the confidence to speak with natives. I passed N4 and received my CoE within 3 months of applying!",
  },
  {
    id: "brian-ssw",
    name: "Brian K.",
    levelAchieved: "N4→N3 ongoing",
    outcome: "Matched for SSW caregiving track",
    quote:
      "The mock interviews and kanji clinics made all the difference for my skills test and job screening.",
  },
];

export const trialVideos = [
  { id: "n5-lesson-1", title: "N5 Trial: Greetings & Hiragana", src: "/videos/n5-trial-lesson-1.mp4" },
  { id: "n4-lesson-1", title: "N4 Trial: Te-form Review", src: "/videos/n4-trial-lesson-1.mp4" },
];