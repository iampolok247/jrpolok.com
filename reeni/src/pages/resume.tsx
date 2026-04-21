import PageShell from "./PageShell";
import Education from "@/components/common/Education2";
import Awards from "@/components/common/Awards";
import Skills2 from "@/components/common/Skills2";

const meta = {
  title: "Resume | J R Polok",
  description:
    "View the resume of J R Polok including full stack engineering experience, awards, certifications, and technical strengths relevant for UK and Europe roles.",
  keywords:
    "J R Polok resume, software engineer resume, full stack developer Bangladesh, UK Europe job application",
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
