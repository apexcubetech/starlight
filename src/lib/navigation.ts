export type NavItem = {
  label: string;
  labelTamil: string;
  href: string;
  children?: NavItem[];
};

export const mainNavigation: NavItem[] = [
  { label: "Home", labelTamil: "முகப்பு", href: "/" },
  { label: "About", labelTamil: "பற்றி", href: "/about" },
  {
    label: "Philosophy",
    labelTamil: "தத்துவம்",
    href: "/philosophy",
  },
  {
    label: "Submit Your Details",
    labelTamil: "விவரங்களை சமர்ப்பிக்கவும்",
    href: "/story-submission",
  },
  { label: "Connect", labelTamil: "தொடர்பு", href: "/contact" },
];

export const siteConfig = {
  name: "Starlight Reels",
  personName: "N. Sathaiah",
  personNameTamil: "N. சாத்தையா",
  tagline: "Tamil cinema • criticism • stories • ideas • writing",
  taglineTamil: "தமிழ் சினிமா • விமர்சனம் • கதைகள் • சிந்தனைகள் • எழுத்து",
  description:
    "Official website of N. Sathaiah. Tamil Film Critic, story listener, and discoverer of storytellers.",
  descriptionTamil:
    "N. சாத்தையாவின் அதிகாரப்பூர்வ வலைத்தளம். தமிழ் திரைப்பட விமர்சகர், கதை கேட்பவர், கதை சொல்லிகளைக் கண்டறிபவர்.",
  footerRole: "Tamil Film Critic",
  footerRoleTamil: "தமிழ் திரைப்பட விமர்சகர்",
  url: "https://starlightreels.com",
  email: "starlightreels@gmail.com",
  whatsappNumber: "919791190881",
  whatsappDisplay: "97911 90881",
};

export const uiStrings = {
  navigation: { en: "Navigation", ta: "வழிசெலுத்தல்" },
  connect: { en: "Connect", ta: "தொடர்பு" },
  email: { en: "Email", ta: "மின்னஞ்சல்" },
  whatsapp: { en: "WhatsApp", ta: "வாட்ஸ்அப்" },
  explorePhilosophy: {
    en: "Explore Our Philosophy →",
    ta: "எங்கள் தத்துவத்தை ஆராயுங்கள் →",
  },
  submitDetails: {
    en: "Submit Your Details",
    ta: "விவரங்களை சமர்ப்பிக்கவும்",
  },
  aboutSathaiah: { en: "About Sathaiah", ta: "சாத்தையா பற்றி" },
  getInTouch: { en: "Get in Touch", ta: "தொடர்பு கொள்ளுங்கள்" },
  readChapter: { en: "Read chapter", ta: "அத்தியாயம் படிக்க" },
  viewAllProjects: { en: "View all projects →", ta: "அனைத்து திட்டங்களும் →" },
  learnMore: { en: "Learn more →", ta: "மேலும் அறிய →" },
  chapter: { en: "Chapter", ta: "அத்தியாயம்" },
  carouselPrevious: { en: "Previous chapters", ta: "முந்தைய அத்தியாயங்கள்" },
  carouselNext: { en: "Next chapters", ta: "அடுத்த அத்தியாயங்கள்" },
  carouselPages: { en: "Chapter pages", ta: "அத்தியாயப் பக்கங்கள்" },
  carouselPage: { en: "Page", ta: "பக்கம்" },
  whatsappNotice: {
    en: "All enquiries will be handled through WhatsApp messages only. Please do not call.",
    ta: "அனைத்து விசாரணைகளும் வாட்ஸ்அப் செய்திகள் மூலமே கையாளப்படும். தயவுசெய்து அழைக்க வேண்டாம்.",
  },
  copyright: {
    en: "© {year} Starlight Reels. N. Sathaiah. All rights reserved.",
    ta: "© {year} Starlight Reels. N. Sathaiah. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
  },
};
