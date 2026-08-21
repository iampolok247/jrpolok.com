import { educationExperienceData } from "@/data/education";
import { Link } from "react-router-dom";

const impactExamples = [
  {
    icon: "fa-light fa-arrow-trend-up",
    title: "SEO Automation",
    description:
      "Automating repetitive SEO research, content workflows and reporting.",
  },
  {
    icon: "fa-light fa-diagram-project",
    title: "Lead Management",
    description:
      "Connecting campaigns, CRM and automated follow-up workflows.",
  },
  {
    icon: "fa-light fa-robot",
    title: "AI Agents",
    description:
      "Building intelligent agents for business tasks, research and customer workflows.",
  },
  {
    icon: "fa-light fa-gears",
    title: "Marketing Automation",
    description:
      "Reducing manual work through connected tools, APIs and AI-powered processes.",
  },
];

const experienceHighlights = [
  {
    label: "2025 - Present",
    company: "Prime Academy Bangladesh",
    title: "Sr. Officer – Digital Marketing",
    description:
      "Managing SEO, paid ads, social media, CRM operations and high-converting lead generation landing pages for the organization.",
  },
  {
    label: "Add exact dates",
    company: "Zephyr Recruit",
    title: "Web Developer & Sr. Officer – Digital Marketing",
    description:
      "Built and maintained the recruitment platform while running digital marketing and lead generation for hiring campaigns.",
  },
  {
    label: "Add exact dates",
    company: "Workforce Training & Development Ltd",
    title: "Sr. Officer – Digital Marketing",
    description:
      "Managed SEO, paid campaigns and lead generation to support training enrollment and audience growth.",
  },
  {
    label: "Add exact dates",
    company: "The Prime College",
    title: "Sr. Officer – Digital Marketing",
    description:
      "Ran SEO, social media and paid advertising to support student admissions and brand visibility.",
  },
  {
    label: "2023 - 2024",
    company: "CodersFly",
    title: "Chief Technology Officer",
    description:
      "Led technology strategy, product delivery and team allocation while building scalable web applications and automation systems.",
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
            Marketing Meets AI & Technology
          </h2>
          <p className="description section-sm tmp-scroll-trigger tmp-fade-in animation-order-3">
            Combining marketing expertise with AI and technology to create
            more efficient digital growth systems.
          </p>
        </div>
        <div className="row g-5 mb--60">
          {impactExamples.map((item, index) => (
            <div className="col-lg-3 col-sm-6" key={index}>
              <div
                className={`education-experience-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-${index + 1}`}
              >
                <div className="card-icon" style={{ fontSize: "26px", color: "var(--color-primary, #f5a623)", marginBottom: "14px" }}>
                  <i className={item.icon} />
                </div>
                <h4 className="edu-sub-title">{item.title}</h4>
                <p className="edu-para">{item.description}</p>
              </div>
            </div>
          ))}
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
                <Link
                  className="tmp-btn hover-icon-reverse radius-round btn-border mt--20"
                  to="/resume"
                >
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">View Full Experience</span>
                    <span className="btn-icon">
                      <i className="fa-sharp fa-regular fa-arrow-right" />
                    </span>
                    <span className="btn-icon">
                      <i className="fa-sharp fa-regular fa-arrow-right" />
                    </span>
                  </span>
                </Link>
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
