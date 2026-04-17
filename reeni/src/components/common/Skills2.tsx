export default function Skills2() {
  return (
    <section className="my-skill tmp-section-gapTop">
      <div className="container">
        <div className="section-head text-align-left mb--50">
          <div className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
            <span className="subtitle">Specialized Strengths</span>
          </div>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            Technology, AI and Marketing <br />
            in One Unified Approach
          </h2>
        </div>
        <div className="services-widget v1">
          <div className="service-item current tmp-scroll-trigger tmp-fade-in animation-order-1">
            <div className="my-skill-card">
              <div className="card-icon">
                <i className="fa-light fa-building-columns" />
              </div>
              <div className="card-title">
                <h3 className="main-title">Full Stack Web Development</h3>
                <p className="sub-title">JavaScript, PHP, Django, Laravel</p>
              </div>
              <p className="card-para">
                I architect and build secure, scalable applications with modern
                frameworks, clean backend logic and business-focused execution.
              </p>
              <a href="#" className="read-more-btn">
                Read More
                <span className="read-more-icon">
                  <i className="fa-solid fa-angle-right" />
                </span>
              </a>
            </div>
            <button className="service-link modal-popup" />
          </div>
          <div className="service-item tmp-scroll-trigger tmp-fade-in animation-order-2">
            <div className="my-skill-card">
              <div className="card-icon">
                <i className="fa-light fa-calendar" />
              </div>
              <div className="card-title">
                <h3 className="main-title">AI Automation & Agent Systems</h3>
                <p className="sub-title">Code + No-Code Workflows</p>
              </div>
              <p className="card-para">
                I develop intelligent workflows using prompt engineering,
                generative AI and decision support to automate repetitive tasks
                and boost productivity.
              </p>
              <a href="#" className="read-more-btn">
                Read More
                <span className="read-more-icon">
                  <i className="fa-solid fa-angle-right" />
                </span>
              </a>
            </div>
            <button className="service-link modal-popup" />
          </div>
          <div className="service-item tmp-scroll-trigger tmp-fade-in animation-order-3">
            <div className="my-skill-card">
              <div className="card-icon">
                <i className="fa-light fa-pen-nib" />
              </div>
              <div className="card-title">
                <h3 className="main-title">Digital Marketing Execution</h3>
                <p className="sub-title">SEO, Paid Ads, Social Growth</p>
              </div>
              <p className="card-para">
                I create and execute data-driven campaigns that improve online
                visibility, engagement and sustainable business growth.
              </p>
              <a href="#" className="read-more-btn">
                Read More
                <span className="read-more-icon">
                  <i className="fa-solid fa-angle-right" />
                </span>
              </a>
            </div>
            <button className="service-link modal-popup" />
          </div>
          <div className="active-bg wow fadeInUp mleave" />
        </div>
      </div>
    </section>
  );
}
