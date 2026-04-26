export interface Award {
  id: number;
  title: string;
  issuer: string;
  year: string;
  category: "award" | "certificate";
  description: string;
  icon: string;
  imageSrc?: string;
}

export const awardsData: Award[] = [
  {
    id: 1,
    title: "National Digital Innovation Award - 1st Place",
    issuer: "Bangladesh Government",
    year: "2022",
    category: "award",
    description:
      "Recognized nationally for developing a mobile application supporting birth and death registration services and government service access.",
    icon: "fa-solid fa-trophy",
  },
  {
    id: 2,
    title: "Cyber Security & Ethical Hacking Career Track",
    issuer: "Ostad",
    year: "2026",
    category: "certificate",
    description:
      "Completed practical cybersecurity training covering ethical hacking, network security, vulnerability assessment and Kali Linux tool usage.",
    icon: "fa-solid fa-certificate",
  },
  {
    id: 3,
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
    year: "2023",
    category: "certificate",
    description:
      "Completed professional training in generative AI concepts, tools and practical business applications.",
    icon: "fa-solid fa-medal",
  },
  {
    id: 4,
    title: "Chief Technology Officer Career Guide",
    issuer: "LinkedIn",
    year: "2023",
    category: "certificate",
    description:
      "Completed leadership-focused learning around technical decision-making, product direction and engineering team management.",
    icon: "fa-solid fa-award",
  },
  {
    id: 5,
    title: "Certificate of Appreciation",
    issuer: "Prime Academy Bangladesh",
    year: "2025",
    category: "certificate",
    description:
      "Recognized for developing a customized software system that improved operational efficiency and technology-driven delivery.",
    icon: "fa-solid fa-medal",
  },
];
