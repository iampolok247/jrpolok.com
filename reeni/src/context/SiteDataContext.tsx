import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { awardsData } from "@/data/awards";
import type { Award } from "@/data/awards";
import { blogData2 } from "@/data/blogs";
import { portfolioItems2 } from "@/data/portfolio";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface BlogItem {
  id: number;
  animationOrder: string;
  imageSrc: string;
  altText: string;
  author: string;
  date: string;
  title: string;
  description: string;
  tags: string[];
  categories: string[];
  slug: string;
}

export interface PortfolioItem {
  id: number;
  animationOrder: number;
  imageSrc: string;
  width: number;
  height: number;
  title: string;
  description: string;
  slug: string;
}

export interface HeroData {
  name: string;
  subtitle: string;
  description: string;
  roles: string[];
  heroImage: string;
}

export interface SiteData {
  hero: HeroData;
  blogs: BlogItem[];
  portfolio: PortfolioItem[];
  awards: Award[];
}

// ─── Default data ─────────────────────────────────────────────────────────────

const defaultSiteData: SiteData = {
  hero: {
    name: "J R Polok",
    subtitle: "Digital Marketing Specialist and Full-Stack Developer",
    description:
      "Digital Marketing Specialist and Full-Stack Developer with 10+ years of experience across SEO, paid advertising, social media marketing, CRM systems, automation solutions and high-converting web development.",
    roles: [
      "Full-Stack Developer.",
      "Digital Marketing Specialist.",
      "CRM & Automation Builder.",
      "Flutter App Developer.",
      "SEO & Lead Generation Strategist.",
    ],
    heroImage: "/assets/images/jrpolok/J-R-Polok%20-Hero.png",
  },
  blogs: blogData2 as BlogItem[],
  portfolio: portfolioItems2 as PortfolioItem[],
  awards: awardsData,
};

const STORAGE_KEY = "jrpolok_site_data_v2";

// ─── Context ──────────────────────────────────────────────────────────────────

interface SiteDataContextType {
  data: SiteData;
  updateHero: (hero: HeroData) => void;
  updateBlogs: (blogs: BlogItem[]) => void;
  updatePortfolio: (portfolio: PortfolioItem[]) => void;
  updateAwards: (awards: Award[]) => void;
  resetToDefaults: () => void;
}

const SiteDataContext = createContext<SiteDataContextType | null>(null);

export function SiteDataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<SiteData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as Partial<SiteData>;
        return {
          hero: parsed.hero ?? defaultSiteData.hero,
          blogs: parsed.blogs ?? defaultSiteData.blogs,
          portfolio: parsed.portfolio ?? defaultSiteData.portfolio,
          awards: parsed.awards ?? defaultSiteData.awards,
        };
      }
    } catch {
      // ignore
    }
    return defaultSiteData;
  });

  // Persist to localStorage on every change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  const updateHero = (hero: HeroData) =>
    setData((prev) => ({ ...prev, hero }));

  const updateBlogs = (blogs: BlogItem[]) =>
    setData((prev) => ({ ...prev, blogs }));

  const updatePortfolio = (portfolio: PortfolioItem[]) =>
    setData((prev) => ({ ...prev, portfolio }));

  const updateAwards = (awards: Award[]) =>
    setData((prev) => ({ ...prev, awards }));

  const resetToDefaults = () => {
    localStorage.removeItem(STORAGE_KEY);
    setData(defaultSiteData);
  };

  return (
    <SiteDataContext.Provider
      value={{
        data,
        updateHero,
        updateBlogs,
        updatePortfolio,
        updateAwards,
        resetToDefaults,
      }}
    >
      {children}
    </SiteDataContext.Provider>
  );
}

export function useSiteData() {
  const ctx = useContext(SiteDataContext);
  if (!ctx) throw new Error("useSiteData must be used within SiteDataProvider");
  return ctx;
}
