import { services5 } from "@/data/services";
export default function Services3() {
  return (
    <section className="latest-service-area tmp-section-gapTop" id="service">
      <div className="container">
        <div className="section-head mb--50">
          <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
            <span className="subtitle">Core Expertise</span>
          </div>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            Building Complete Digital <br />
            Ecosystems
          </h2>
          <p className="description section-sm tmp-scroll-trigger tmp-fade-in animation-order-3">
            I combine software engineering, AI automation and digital marketing
            to design systems that are technically strong, growth-focused and
            ready for real-world execution.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-6">
            {services5.map((service, index) => (
              <div
                key={index}
                className={`service-card-v2 tmponhover tmp-scroll-trigger tmp-fade-in animation-order-${
                  index + 1
                }`}
              >
                <h2 className="service-card-num">
                  <span>{`0${index + 1}.`}</span>
                  {service.title}
                </h2>
                <p className="service-para">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="col-lg-6">
            <div className="service-card-user-image">
              <img
                loading="lazy"
                className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
                alt="J R Polok - Full Stack Engineer providing web development, AI automation and digital marketing services"
                src="/assets/images/jrpolok/J-R-Polok-2nd.png"
                width={1134}
                height={1176}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
