import PageShell from "./PageShell";
import FaqSection from "@/components/common/FaqSection";
import Contact from "@/components/common/Contact2";

const meta = {
  title: "FAQ | J R Polok",
  description:
    "Frequently asked questions about hiring, tech stack, SEO work, and UK/Europe opportunity readiness for J R Polok.",
  keywords: "FAQ software engineer, hire full stack developer, UK Europe remote developer",
  canonical: "https://jrpolok.com/faq",
  ogImage: "https://jrpolok.com/assets/images/jrpolok/J-R-Polok-2nd.png",
};

export default function FaqPage() {
  return (
    <PageShell meta={meta}>
      <div style={{ paddingTop: "140px" }}>
        <FaqSection sectionClass="tmp-section-gapTop" />
        <Contact parentClass="get-in-touch-area tmp-section-gap" />
      </div>
    </PageShell>
  );
}
