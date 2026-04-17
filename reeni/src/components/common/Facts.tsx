import OdometerComponent from "./OdometerComponent";
import { counters } from "@/data/facts";

export default function Facts() {
  return (
    <section className="counter-area">
      <div className="container">
        <div className="row g-5">
          <div className="col-12 col-lg-6 col-xl-6 col-xxl-6">
            <div className="year-of-expariance-wrapper bg-blur-style-one tmp-scroll-trigger tmp-fade-in animation-order-1">
              <div className="year-expariance-wrap">
                {/* <h2 class="year-number"><span class="counter">25 </span> </h2> */}
                <h2 className="counter year-number">
                  <OdometerComponent max={8} />
                </h2>
                <h3 className="year-title">
                  Years Building <br />
                  Digital Solutions
                </h3>
              </div>
              <p className="year-para">
                From software engineering to AI automation and digital
                marketing, I deliver practical solutions that improve business
                outcomes and long-term growth.
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
                        <OdometerComponent max={item.count} />
                        {item.suffix}
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
