import { Link } from "react-router-dom";
import TyperComponent from "@/components/common/TyperComponent";
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
                  alt="J R Polok - Full Stack Software Engineer & AI Automation Specialist"
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
                <span className="sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                  {hero.subtitle}
                </span>
                <h1 className="title tmp-scroll-trigger tmp-fade-in animation-order-2 mt--5">
                  I’m {hero.name}, a <br />
                  <span className="header-caption">
                    <span className="cd-headline clip is-full-width">
                      <TyperComponent strings={hero.roles} />
                    </span>
                  </span>
                </h1>
                <p className="disc tmp-scroll-trigger tmp-fade-in animation-order-3">
                  {hero.description}
                </p>
                <div className="button-area-banner-one tmp-scroll-trigger tmp-fade-in animation-order-4">
                  <Link className="tmp-btn hover-icon-reverse radius-round" to={`/#portfolio`}>
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Explore My Work</span>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
