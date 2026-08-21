export interface CreativeItem {
  id: number;
  imageSrc: string;
  alt: string;
}

// Replace these placeholder image paths with real Canva creative exports
// saved into public/assets/images/canva/.
export const creativeItems: CreativeItem[] = [
  { id: 1, imageSrc: "/assets/images/canva/creative-1.jpg", alt: "Social media campaign creative" },
  { id: 2, imageSrc: "/assets/images/canva/creative-2.jpg", alt: "Promotional creative" },
  { id: 3, imageSrc: "/assets/images/canva/creative-3.jpg", alt: "Marketing campaign creative" },
  { id: 4, imageSrc: "/assets/images/canva/creative-4.jpg", alt: "Landing page creative" },
];
