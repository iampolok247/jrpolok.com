import PageShell from "./PageShell";
import Blogs from "@/components/common/Blogs";

const meta = {
  title: "Blog | J R Polok",
  description:
    "Read practical articles on software engineering, SEO, AI automation, cybersecurity, and digital strategy by J R Polok.",
  keywords: "software engineering blog, SEO blog, AI automation blog, cybersecurity insights",
  canonical: "https://jrpolok.com/blog",
  ogImage: "https://jrpolok.com/assets/images/jrpolok/J-R-Polok-2nd.png",
};

export default function BlogPage() {
  return (
    <PageShell meta={meta}>
      <div style={{ paddingTop: "140px" }}>
        <Blogs parentClass="blog-and-news-are tmp-section-gapTop" />
      </div>
    </PageShell>
  );
}
