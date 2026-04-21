import PageShell from "./PageShell";
import Contact from "@/components/common/Contact2";
import FaqSection from "@/components/common/FaqSection";

const meta = {
  title: "Contact | J R Polok",
  description:
    "Contact J R Polok for full stack engineering, SEO, AI automation, and digital growth projects. Open for UK and Europe opportunities.",
  keywords: "contact J R Polok, hire software engineer, hire SEO expert, UK Europe remote",
  canonical: "https://jrpolok.com/contact",
  ogImage: "https://jrpolok.com/assets/images/jrpolok/J-R-Polok-2nd.png",
};

export default function ContactPage() {
  return (
    <PageShell meta={meta}>
      <div style={{ paddingTop: "140px" }}>
        <Contact parentClass="get-in-touch-area tmp-section-gapTop" />
        <FaqSection sectionClass="tmp-section-gap" />
      </div>
    </PageShell>
  );
}
