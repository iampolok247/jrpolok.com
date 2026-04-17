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

import Awards from "@/components/common/Awards";
import MetaComponent from "@/components/common/Metacomponent";

const metadata = {
  title: "J R Polok | Best Software Engineer, Web Developer, SEO Expert & Digital Marketer in Bangladesh",
  description:
    "J R Polok is the Best Software Engineer, Best Web Developer, Top SEO Expert and Best Digital Marketer in Bangladesh. National Award-Winning Full Stack Engineer, AI Automation Specialist & Digital Marketing Executive. Expert in Laravel, Django, React, SEO, Paid Ads, and Cybersecurity.",
  keywords:
    "Best Software Engineer in Bangladesh, Best Web Developer in Bangladesh, Best Digital Marketer in Bangladesh, SEO Expert in Bangladesh, J R Polok, Full Stack Developer Bangladesh, AI Automation Specialist Bangladesh, Digital Marketing Executive Bangladesh, Laravel Developer Bangladesh, React Developer Bangladesh, Web Development Bangladesh, SEO Bangladesh, Cyber Security Bangladesh",
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
      <Footer1 />
      <Copyright />
    </>
  );
}
