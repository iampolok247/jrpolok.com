import { skillSections } from "@/data/skills";
export default function Skills({
  parentClass = "tmp-skill-area tmp-section-gapTop",
}) {
  return (
    <div className={parentClass}>
      <div className="container">
        <div className="row g-5">
          {skillSections.map((section, sectionIndex) => (
            <div className="col-lg-6 col-xl-3" key={sectionIndex}>
              <div className="progress-wrapper">
                <div className="content">
                  <h2 className="custom-title mb--30 tmp-scroll-trigger tmp-fade-in animation-order-1">
                    <i className={section.icon} style={{ marginRight: "10px" }} />
                    {section.title}
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
                  <div className="tag-items">
                    <ul>
                      {section.skills.map((skill, skillIndex) => (
                        <li key={skillIndex}>
                          <a href="#" className="tag-item">
                            {skill}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
