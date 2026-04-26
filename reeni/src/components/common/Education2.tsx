import { educationExperienceData } from "@/data/education";

const experienceHighlights = [
  {
    label: "2015 - 2019",
    company: "Niloy IT Farm",
    title: "Digital Marketing Specialist",
    description:
      "Generated B2B leads through web research and targeted outreach while maintaining lead databases and sales support workflows.",
  },
  {
    label: "2020 - 2021",
    company: "Quality Coders Inc.",
    title: "Frontend Developer",
    description:
      "Developed responsive user interfaces, optimized website performance and collaborated closely with backend teams on product delivery.",
  },
  {
    label: "2021 - 2023",
    company: "Global Technologies Enterprises",
    title: "Digital Marketing Strategist & Android Developer",
    description:
      "Managed Android app publishing, paid campaigns, social content and SEO/ASO activities to support audience growth and visibility.",
  },
  {
    label: "2023 - 2024",
    company: "CodersFly",
    title: "Chief Technology Officer & Co-Founder",
    description:
      "Led technology strategy, product delivery and team allocation while building scalable web applications and automation systems.",
  },
  {
    label: "2025 - Present",
    company: "Prime Academy Bangladesh",
    title: "Digital Marketing Specialist",
    description:
      "Managing SEO, paid ads, social media, CRM operations and high-converting lead generation landing pages for the organization.",
  },
];

export default function Education() {
  return (
    <section className="education-experience tmp-section-gapTop" id="resume">
      <div className="container">
        <div className="section-head mb--50">
          <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
            <span className="subtitle">Education &amp; Experience</span>
          </div>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            Building Innovation Through <br />
            Technology & Strategy
          </h2>
          <p className="description section-sm tmp-scroll-trigger tmp-fade-in animation-order-3">
            My background combines software development, digital marketing,
            CRM operations and product execution across agency, startup and
            education-driven organizations.
          </p>
        </div>
        <h2 className="custom-title mb-32 tmp-scroll-trigger tmp-fade-in animation-order-1">
          Education
          <span>
            <img
              loading="lazy"
              alt="custom-line"
              src="/assets/images/custom-line/custom-line.png"
              width={81}
              height={6}
            />
          </span>
        </h2>
        <div className="row g-5">
          {educationExperienceData.map((item, index) => (
            <div className="col-lg-6 col-sm-6" key={index}>
              <div
                className={`education-experience-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-${item.animationOrder}`}
              >
                <h4 className="edu-sub-title">{item.role}</h4>
                <h2 className="edu-title">{item.duration}</h2>
                <p className="edu-para">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="experiences-wrapper">
          <div className="row">
            <div className="col-lg-6">
              <div className="experiences-wrap-left-content">
                <h2 className="custom-title mb-32 tmp-scroll-trigger tmp-fade-in animation-order-1">
                  Experiences
                  <span>
                    <img
                      loading="lazy"
                      alt="custom-line"
                      src="/assets/images/custom-line/custom-line.png"
                      width={81}
                      height={6}
                    />
                  </span>
                </h2>
                {experienceHighlights.map((item, index) => (
                  <div
                    className={`experience-content tmp-scroll-trigger tmp-fade-in animation-order-${index + 1}`}
                    key={item.company}
                  >
                    <p className="ex-subtitle">{item.label}</p>
                    <h2 className="ex-name">{item.company}</h2>
                    <h3 className="ex-title">{item.title}</h3>
                    <p className="ex-para">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="experiences-wrap-right-content">
                <img
                  loading="lazy"
                  className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
                  alt="expert-img"
                  src="/assets/images/experiences/expert-img.jpg"
                  width={945}
                  height={719}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
