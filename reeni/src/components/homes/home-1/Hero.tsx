import { Link } from "react-router-dom";
import { useSiteData } from "@/context/SiteDataContext";
export default function Hero() {
  const { data } = useSiteData();
  const hero = data.hero;

  return (
    <div className="tmp-banner-one-area">
      <div className="container">
        <div className="banner-one-main-wrapper">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="banner-right-content">
                <img
                  className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
                  alt="J R Polok - Digital Marketing & SEO Specialist, AI Automation & AI Agents"
                  src={hero.heroImage}
                  width={486}
                  height={781}
                />
                <h2 className="banner-big-text-1 up-down">{hero.name.toUpperCase()}</h2>
                <h2 className="banner-big-text-2 up-down-2">{hero.name.toUpperCase()}</h2>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="inner">
                <h1 className="title tmp-scroll-trigger tmp-fade-in animation-order-2">
                  {hero.headlineLine1}
                  <br />
                  {hero.headlineLine2}
                </h1>
                <p className="disc tmp-scroll-trigger tmp-fade-in animation-order-3">
                  {hero.description}
                </p>
                <p
                  className="tech-stack-line tmp-scroll-trigger tmp-fade-in animation-order-3"
                  style={{ opacity: 0.7, fontSize: "15px", letterSpacing: "0.02em" }}
                >
                  {hero.techStack.join(" • ")}
                </p>
                <div className="button-area-banner-one tmp-scroll-trigger tmp-fade-in animation-order-4">
                  <Link className="tmp-btn hover-icon-reverse radius-round" to={`/#resume`}>
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">View My Experience</span>
                      <span className="btn-icon">
                        <i className="fa-sharp fa-regular fa-arrow-right" />
                      </span>
                      <span className="btn-icon">
                        <i className="fa-sharp fa-regular fa-arrow-right" />
                      </span>
                    </span>
                  </Link>
                  <a
                    className="tmp-btn hover-icon-reverse radius-round btn-border"
                    href="/assets/files/JR-Polok-CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Download CV</span>
                      <span className="btn-icon">
                        <i className="fa-sharp fa-regular fa-arrow-down" />
                      </span>
                      <span className="btn-icon">
                        <i className="fa-sharp fa-regular fa-arrow-down" />
                      </span>
                    </span>
                  </a>
                </div>
                <p
                  className="availability-line tmp-scroll-trigger tmp-fade-in animation-order-4"
                  style={{ opacity: 0.65, fontSize: "14px", marginTop: "18px" }}
                >
                  {hero.availability}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
