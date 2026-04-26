import PageShell from "./PageShell";
import Services from "@/components/common/Services";
import Services2 from "@/components/common/Services3";
import Facts from "@/components/common/Facts";
import Skills from "@/components/common/Skills";
import FaqSection from "@/components/common/FaqSection";

const meta = {
  title: "Services | J R Polok",
  description:
    "Explore full-stack development, CRM systems, SEO, paid ads, mobile app and digital growth services by J R Polok.",
  keywords:
    "full stack development services, CRM development, SEO services, paid ads management, mobile app developer",
  canonical: "https://jrpolok.com/services",
  ogImage: "https://jrpolok.com/assets/images/jrpolok/J-R-Polok-2nd.png",
};

export default function ServicesPage() {
  return (
    <PageShell meta={meta}>
      <div style={{ paddingTop: "140px" }}>
        <Services />
        <Facts />
        <Skills />
        <Services2 />
        <FaqSection sectionClass="tmp-section-gap" />
      </div>
    </PageShell>
  );
}
