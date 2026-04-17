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
    title: "National Award – Best Innovative Software",
    issuer: "Digital Innovation Fair, Bangladesh",
    year: "2022",
    category: "award",
    description:
      "Recognized nationally for developing impactful real-world software solutions at the Digital Innovation Fair 2022, hosted by ICT Division, Bangladesh.",
    icon: "fa-solid fa-trophy",
  },
  {
    id: 2,
    title: "LEDP Certified Instructor",
    issuer: "ICT Division, Government of Bangladesh",
    year: "2021",
    category: "certificate",
    description:
      "Certified as an official instructor under the Learning and Earning Development Project (LEDP) by the ICT Division of Bangladesh.",
    icon: "fa-solid fa-certificate",
  },
  {
    id: 3,
    title: "Full Stack Web Development",
    issuer: "University of the People, California",
    year: "2020",
    category: "certificate",
    description:
      "Completed advanced coursework in full stack web development covering frontend, backend and database systems.",
    icon: "fa-solid fa-medal",
  },
  {
    id: 4,
    title: "Digital Marketing Mastery",
    issuer: "Google & Meta (Coursera)",
    year: "2023",
    category: "certificate",
    description:
      "Certified in digital marketing strategy covering SEO, Paid Ads, Social Media Marketing and Analytics.",
    icon: "fa-solid fa-award",
  },
];
