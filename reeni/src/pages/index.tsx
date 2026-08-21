import Copyright from "@/components/footers/Copyright";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Blogs from "@/components/common/Blogs";
import Brands from "@/components/common/Brands";
import Contact from "@/components/common/Contact2";
import Education from "@/components/common/Education2";
import Facts from "@/components/common/Facts";
import Hero from "@/components/homes/home-1/Hero";
import Portfolio from "@/components/common/Portfolio2";
import ImpactProcess from "@/components/common/ImpactProcess";
import CanvaCreative from "@/components/common/CanvaCreative";
import Services from "@/components/common/Services";
import Services2 from "@/components/common/Services3";
import Skills from "@/components/common/Skills";
import Skills2 from "@/components/common/Skills2";
import Testimonials from "@/components/homes/home-1/Testimonials";
import FaqSection from "@/components/common/FaqSection";

import Awards from "@/components/common/Awards";
import MetaComponent from "@/components/common/Metacomponent";

const metadata = {
  title: "J R Polok | Digital Marketing & SEO Specialist | AI Automation & AI Agents",
  description:
    "J R Polok is a Digital Marketing & SEO Specialist with expertise in AI Automation and AI Agents, combining performance marketing, SEO, PHP/Laravel and Canva to build smarter growth systems.",
  keywords:
    "J R Polok, Digital Marketing Specialist, SEO Specialist, AI Automation Specialist, AI Agents, Performance Marketing, Lead Generation Expert, PHP Laravel Developer, Canva Designer",
  canonical: "https://jrpolok.com/",
  ogImage: "https://jrpolok.com/assets/images/jrpolok/J-R-Polok-2nd.png",
};
export default function HomePage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <Hero />
      <Services />
      <Facts />
      <Skills />
      <Services2 />
      <Education />
      <Awards />
      <Brands />
      <Portfolio />
      <ImpactProcess />
      <CanvaCreative />
      <Skills2 />
      <Testimonials />
      <Contact />
      <Blogs />
      <FaqSection sectionClass="tmp-section-gap" />
      <Footer1 />
      <Copyright />
    </>
  );
}
