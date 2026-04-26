import PageShell from "./PageShell";
import Education from "@/components/common/Education2";
import Awards from "@/components/common/Awards";
import Skills2 from "@/components/common/Skills2";

const meta = {
  title: "Resume | J R Polok",
  description:
    "View the resume of J R Polok including work experience, education, awards, certifications and full-stack plus digital marketing strengths.",
  keywords:
    "J R Polok resume, digital marketing specialist resume, full stack developer Bangladesh, CRM developer resume",
  canonical: "https://jrpolok.com/resume",
  ogImage: "https://jrpolok.com/assets/images/jrpolok/J-R-Polok-2nd.png",
};

export default function ResumePage() {
  return (
    <PageShell meta={meta}>
      <div style={{ paddingTop: "140px" }}>
        <Education />
        <Awards />
        <Skills2 />
      </div>
    </PageShell>
  );
}
