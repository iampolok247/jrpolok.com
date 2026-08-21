import { useSiteData } from "@/context/SiteDataContext";

import { Link } from "react-router-dom";
export default function Portfolio({ isLight = false }) {
  const { data } = useSiteData();
  const portfolioItems2 = data.portfolio;
  return (
    <div
      className="latest-portfolio-area custom-column-grid tmp-section-gapTop"
      id="portfolio"
    >
      <div className="container">
        <div className="section-head mb--60">
          <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
            <span className="subtitle">Selected Works</span>
          </div>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            Selected Projects
          </h2>
          <p className="description section-sm tmp-scroll-trigger tmp-fade-in animation-order-3">
            Real-world solutions across digital marketing, AI, automation and
            web technology.
          </p>
        </div>
        <div className="row">
          {portfolioItems2.map((item) => (
            <div className="col-lg-6 col-sm-6" key={item.id}>
              <div
                className={`latest-portfolio-card tmp-hover-link tmp-scroll-trigger tmp-fade-in animation-order-${item.animationOrder}`}
              >
                <div className="portfoli-card-img">
                  <div className="img-box v2">
                    <Link
                      className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
                      to={
                        item.projectUrl ??
                        `/project-details${isLight ? "-white" : ""}/${item.slug}`
                      }
                      target={item.projectUrl ? "_blank" : undefined}
                      rel={item.projectUrl ? "noopener noreferrer" : undefined}
                    >
                      <img
                        loading="lazy"
                        className="w-100"
                        alt={item.title}
                        src={item.imageSrc}
                        width={item.width}
                        height={item.height}
                      />
                    </Link>
                  </div>
                </div>
                <div className="portfolio-card-content-wrap">
                  <div className="content-left">
                    <h3 className="portfolio-card-title">
                      <Link
                        className="link"
                        to={
                          item.projectUrl ??
                          `/project-details${isLight ? "-white" : ""}/${item.slug}`
                        }
                        target={item.projectUrl ? "_blank" : undefined}
                        rel={item.projectUrl ? "noopener noreferrer" : undefined}
                      >
                        {item.title}
                      </Link>
                    </h3>
                    {item.problem && item.solution && item.impact ? (
                      <div className="portfoli-card-para">
                        <p>
                          <strong>Problem:</strong> {item.problem}
                        </p>
                        <p>
                          <strong>Solution:</strong> {item.solution}
                        </p>
                        <p>
                          <strong>Impact:</strong> {item.impact}
                        </p>
                      </div>
                    ) : (
                      <p className="portfoli-card-para">{item.description}</p>
                    )}
                    {item.tags && item.tags.length > 0 && (
                      <div className="tag-items">
                        <ul>
                          {item.tags.map((tag, tagIndex) => (
                            <li key={tagIndex}>
                              <a href="#" className="tag-item">
                                {tag}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <Link
                    to={
                      item.projectUrl ??
                      `/project-details${isLight ? "-white" : ""}/${item.slug}`
                    }
                    target={item.projectUrl ? "_blank" : undefined}
                    rel={item.projectUrl ? "noopener noreferrer" : undefined}
                    className="tmp-arrow-icon-btn"
                  >
                    <div className="btn-inner">
                      <i className="tmp-icon fa-solid fa-arrow-up-right" />
                      <i className="tmp-icon-bottom fa-solid fa-arrow-up-right" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
