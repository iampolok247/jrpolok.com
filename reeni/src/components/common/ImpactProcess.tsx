const impactSteps = [
  {
    title: "Analyse",
    description:
      "Understand the business, audience, funnel and current performance.",
  },
  {
    title: "Optimise",
    description:
      "Improve SEO, campaigns, content, landing pages and conversion paths.",
  },
  {
    title: "Automate",
    description:
      "Identify repetitive processes and automate them using AI, APIs and workflows.",
  },
  {
    title: "Scale",
    description:
      "Use data, automation and continuous optimisation to build sustainable growth.",
  },
];

export default function ImpactProcess() {
  return (
    <section className="latest-service-area tmp-section-gapTop" id="process">
      <div className="container">
        <div className="section-head mb--50">
          <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
            <span className="subtitle">Approach</span>
          </div>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            How I Create Impact
          </h2>
        </div>
        <div className="row g-5">
          {impactSteps.map((step, index) => (
            <div className="col-lg-3 col-sm-6" key={index}>
              <div
                className={`service-card-v2 tmponhover tmp-scroll-trigger tmp-fade-in animation-order-${
                  index + 1
                }`}
              >
                <h2 className="service-card-num">
                  <span>{`0${index + 1}.`}</span>
                  {step.title}
                </h2>
                <p className="service-para">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
