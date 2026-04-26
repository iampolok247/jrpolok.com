import PageShell from "./PageShell";
import Portfolio from "@/components/common/Portfolio2";
import Brands from "@/components/common/Brands";
import Facts from "@/components/common/Facts";
import Services2 from "@/components/common/Services3";
import FaqSection from "@/components/common/FaqSection";
import Contact from "@/components/common/Contact2";

const meta = {
  title: "Portfolio | J R Polok",
  description:
    "Browse selected projects by J R Polok across LMS platforms, CRM systems, company websites, recruitment products and growth-driven delivery.",
  keywords:
    "portfolio, CRM projects, LMS projects, web development projects, recruitment platform projects",
  canonical: "https://jrpolok.com/portfolio",
  ogImage: "https://jrpolok.com/assets/images/jrpolok/J-R-Polok-2nd.png",
};

export default function PortfolioPage() {
  return (
    <PageShell meta={meta}>
      <div style={{ paddingTop: "140px" }}>
        <Facts />
        <Services2 />
        <Portfolio />
        <Brands />
        <FaqSection sectionClass="tmp-section-gap" />
        <Contact parentClass="get-in-touch-area tmp-section-gapTop" />
      </div>
    </PageShell>
  );
}
