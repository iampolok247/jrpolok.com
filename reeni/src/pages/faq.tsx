import PageShell from "./PageShell";
import FaqSection from "@/components/common/FaqSection";
import Contact from "@/components/common/Contact2";
import Services2 from "@/components/common/Services3";
import Awards from "@/components/common/Awards";

const meta = {
  title: "FAQ | J R Polok",
  description:
    "Frequently asked questions about services, tech stack, project process, SEO execution and collaboration with J R Polok.",
  keywords: "FAQ full stack developer, digital marketing FAQ, CRM development FAQ, hire J R Polok",
  canonical: "https://jrpolok.com/faq",
  ogImage: "https://jrpolok.com/assets/images/jrpolok/J-R-Polok-2nd.png",
};

export default function FaqPage() {
  return (
    <PageShell meta={meta}>
      <div style={{ paddingTop: "140px" }}>
        <Services2 />
        <FaqSection sectionClass="tmp-section-gapTop" />
        <Awards />
        <Contact parentClass="get-in-touch-area tmp-section-gap" />
      </div>
    </PageShell>
  );
}
