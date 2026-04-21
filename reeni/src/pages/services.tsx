import PageShell from "./PageShell";
import Services from "@/components/common/Services";
import Services2 from "@/components/common/Services3";
import Facts from "@/components/common/Facts";
import Skills from "@/components/common/Skills";
import FaqSection from "@/components/common/FaqSection";

const meta = {
  title: "Services | J R Polok",
  description:
    "Explore software engineering, AI automation, SEO, and digital growth services by J R Polok for global businesses and UK/Europe-ready teams.",
  keywords:
    "software engineering services, SEO services, AI automation, full stack developer, UK remote developer",
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
