import PageShell from "./PageShell";
import Contact from "@/components/common/Contact2";
import Services from "@/components/common/Services";
import Facts from "@/components/common/Facts";
import Awards from "@/components/common/Awards";
import FaqSection from "@/components/common/FaqSection";

const meta = {
  title: "Contact | J R Polok",
  description:
    "Contact J R Polok for full-stack development, CRM systems, SEO, paid ads, social media and business website projects.",
  keywords: "contact J R Polok, hire full stack developer, hire SEO specialist, CRM developer Bangladesh",
  canonical: "https://jrpolok.com/contact",
  ogImage: "https://jrpolok.com/assets/images/jrpolok/J-R-Polok-2nd.png",
};

export default function ContactPage() {
  return (
    <PageShell meta={meta}>
      <div style={{ paddingTop: "140px" }}>
        <Services />
        <Facts />
        <Contact parentClass="get-in-touch-area tmp-section-gapTop" />
        <Awards />
        <FaqSection sectionClass="tmp-section-gap" />
      </div>
    </PageShell>
  );
}
