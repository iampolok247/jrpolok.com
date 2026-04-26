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
import Services from "@/components/common/Services";
import Services2 from "@/components/common/Services3";
import Skills from "@/components/common/Skills";
import Skills2 from "@/components/common/Skills2";
import Testimonials from "@/components/homes/home-1/Testimonials";
import FaqSection from "@/components/common/FaqSection";

import Awards from "@/components/common/Awards";
import MetaComponent from "@/components/common/Metacomponent";

const metadata = {
  title: "J R Polok | Digital Marketing Specialist and Full-Stack Developer",
  description:
    "J R Polok is a Digital Marketing Specialist and Full-Stack Developer with 10+ years of experience in SEO, paid ads, CRM systems, automation solutions, web development and lead generation.",
  keywords:
    "J R Polok, Digital Marketing Specialist Bangladesh, Full Stack Developer Bangladesh, CRM Developer Bangladesh, SEO Specialist Bangladesh, Laravel Developer Bangladesh, React Developer Bangladesh, Lead Generation Expert Bangladesh, Web Developer Bangladesh",
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
