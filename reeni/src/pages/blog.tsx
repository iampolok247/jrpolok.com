import PageShell from "./PageShell";
import Blogs from "@/components/common/Blogs";
import Services2 from "@/components/common/Services3";
import FaqSection from "@/components/common/FaqSection";
import Contact from "@/components/common/Contact2";

const meta = {
  title: "Blog | J R Polok",
  description:
    "Read practical articles on CRM systems, web development, SEO, paid ads, conversion strategy and digital growth by J R Polok.",
  keywords: "CRM blog, web development blog, SEO blog, paid ads strategy, digital marketing insights",
  canonical: "https://jrpolok.com/blog",
  ogImage: "https://jrpolok.com/assets/images/jrpolok/J-R-Polok-2nd.png",
};

export default function BlogPage() {
  return (
    <PageShell meta={meta}>
      <div style={{ paddingTop: "140px" }}>
        <Services2 />
        <Blogs parentClass="blog-and-news-are tmp-section-gapTop" />
        <FaqSection sectionClass="tmp-section-gap" />
        <Contact parentClass="get-in-touch-area tmp-section-gapTop" />
      </div>
    </PageShell>
  );
}
