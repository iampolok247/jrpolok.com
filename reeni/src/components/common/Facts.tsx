import OdometerComponent from "./OdometerComponent";
import { counters, heroCounter } from "@/data/facts";

export default function Facts() {
  return (
    <section className="counter-area">
      <div className="container">
        <div className="row g-5">
          <div className="col-12 col-lg-6 col-xl-6 col-xxl-6">
            <div className="year-of-expariance-wrapper bg-blur-style-one tmp-scroll-trigger tmp-fade-in animation-order-1">
              <div className="year-expariance-wrap">
                <h2 className="counter year-number">
                  <OdometerComponent max={heroCounter.count} />
                  {heroCounter.suffix}
                </h2>
                <h3 className="year-title">{heroCounter.title}</h3>
              </div>
              <p className="year-para">
                From digital marketing and SEO to AI automation and AI agents,
                I deliver practical solutions that improve visibility, generate
                leads and streamline business operations.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-6 col-xxl-6">
            <div className="counter-area-right-content">
              <div className="row g-5">
                {counters.map((item, index) => (
                  <div className="col-lg-6 col-sm-6 col-12" key={index}>
                    <div
                      className={`counter-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-${item.order}`}
                    >
                      <h3 className="counter counter-title">
                        {item.isText ? (
                          item.value
                        ) : (
                          <>
                            <OdometerComponent max={item.count as number} />
                            {item.suffix}
                          </>
                        )}
                      </h3>
                      <p className="counter-para">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
