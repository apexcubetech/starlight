export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const mainNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Philosophy",
    href: "/philosophy",
    // children: [
    //   { label: "Manuscript", href: "/philosophy" },
    //   { label: "Articles", href: "/philosophy/articles" },
    // ],
  },
  // { label: "The Book", href: "/book" },
  { label: "Story Submission", href: "/story-submission" },
  // { label: "Script Evaluation", href: "/script-evaluation" },
  // { label: "Projects", href: "/projects" },
  // { label: "Gallery", href: "/gallery" },
  // { label: "Videos", href: "/videos" },
  // { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export const siteConfig = {
  name: "Starlight Reels",
  personName: "N. Sathaiah",
  personNameTamil: "ந. சாத்தையா",
  tagline: "Tamil cinema • criticism • stories • ideas • writing",
  taglineTamil: "தமிழ் சினிமா • விமர்சனம் • கதைகள் • சிந்தனைகள் • எழுத்து",
  description:
    "Starlight Reels — the personal website of N. Sathaiah, Tamil film critic, story listener, and champion of storytellers.",
  url: "https://starlightreels.com",
  facebookUrl: "https://www.facebook.com/profile.php?id=61590577206664",
  email: "sathaiah.consultancy@gmail.com",
};
