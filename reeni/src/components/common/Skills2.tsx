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
                <h3 className="main-title">Full-Stack Web Development</h3>
                <p className="sub-title">PHP, Laravel, React, Node.js, MongoDB</p>
              </div>
              <p className="card-para">
                I build business websites, CRM systems and custom web
                applications with responsive UI, scalable backend logic and
                production-ready deployment.
              </p>
            </div>
            <button className="service-link modal-popup" />
          </div>
          <div className="service-item tmp-scroll-trigger tmp-fade-in animation-order-2">
            <div className="my-skill-card">
              <div className="card-icon">
                <i className="fa-light fa-bullhorn" />
              </div>
              <div className="card-title">
                <h3 className="main-title">Digital Marketing Execution</h3>
                <p className="sub-title">SEO, Meta Ads, Content, Social Media</p>
              </div>
              <p className="card-para">
                I run growth-focused campaigns that combine SEO, paid ads,
                content publishing and social media management to generate
                leads and improve ROI.
              </p>
            </div>
            <button className="service-link modal-popup" />
          </div>
          <div className="service-item tmp-scroll-trigger tmp-fade-in animation-order-3">
            <div className="my-skill-card">
              <div className="card-icon">
                <i className="fa-light fa-mobile-screen-button" />
              </div>
              <div className="card-title">
                <h3 className="main-title">Mobile, CRM & Automation</h3>
                <p className="sub-title">Flutter, Android, Lead Management Systems</p>
              </div>
              <p className="card-para">
                I work across Flutter-based app development, Android delivery,
                office CRM systems and workflow automation to streamline
                operations and support business growth.
              </p>
            </div>
            <button className="service-link modal-popup" />
          </div>
          <div className="active-bg wow fadeInUp mleave" />
        </div>
      </div>
    </section>
  );
}
