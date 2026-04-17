import { useModalUI } from "@/context/ModalUIContext";

export default function Sidebar() {
  const { openModals, closeModal } = useModalUI();
  return (
    <div className="d-none d-xl-block">
      <div
        className={`tmp-sidebar-area tmp_side_bar ${
          openModals.sidebar ? "tmp_side_bar_open" : ""
        }`}
      >
        <div className="inner">
          <div className="top-area">
            <a href="index.html" className="logo">
              <img
                loading="lazy"
                className="logo-dark"
                alt="Reeni - Personal Portfolio HTML Template for developers and freelancers"
                src="/assets/images/jrpolok/jrpolok-logo.png"
                width={121}
                height={41}
              />
              <img
                loading="lazy"
                className="logo-white"
                alt="Reeni - Personal Portfolio HTML Template for developers and freelancers"
                src="/assets/images/jrpolok/jrpolok-logo.png"
                width={121}
                height={40}
              />
            </a>
            <div className="close-icon-area">
              <button
                className="tmp-round-action-btn close_side_menu_active"
                onClick={() => closeModal("sidebar")}
              >
                <i className="fa-sharp fa-light fa-xmark" />
              </button>
            </div>
          </div>
          <div className="content-wrapper">
            <div className="image-area-feature">
              <a href="index.html">
                <img
                  loading="lazy"
                  alt="personal-logo"
                  src="/assets/images/jrpolok/J-R-Polok-Sidebar.png"
                  width={340}
                  height={196}
                />
              </a>
            </div>
            <h5 className="title mt--30">
              National Award-Winning Full Stack Engineer, AI Automation Specialist and Digital Marketing Executive.
            </h5>
            <p className="disc">
              I help businesses build complete digital ecosystems through
              scalable web development, AI-driven automation, cyber-security
              aware implementation and growth-focused marketing strategy.
            </p>
            <div className="short-contact-area">
              {/* single contact information */}
              <div className="single-contact">
                <i className="fa-solid fa-phone" />
                <div className="information tmp-link-animation">
                  <span>Professional Focus</span>
                  <a href="tel:+8801410573107" className="number">
                    +8801410573107
                  </a>
                </div>
              </div>
              {/* single contact information end */}
              {/* single contact information */}
              <div className="single-contact">
                <i className="fa-solid fa-envelope" />
                <div className="information tmp-link-animation">
                  <span>Email</span>
                  <a href="mailto:hello@jrpolok.com" className="number">
                    hello@jrpolok.com
                  </a>
                </div>
              </div>
              {/* single contact information end */}
              {/* single contact information */}
              <div className="single-contact">
                <i className="fa-solid fa-location-crosshairs" />
                <div className="information tmp-link-animation">
                  <span>Current Role</span>
                  <span className="number">Prime Academy Bangladesh</span>
                </div>
              </div>
              {/* single contact information end */}
            </div>
            {/* social area start */}
            <div className="social-wrapper mt--20">
              <span className="subtitle">find with me</span>
              <div className="social-link">
                <a href="https://www.facebook.com/jrpolok" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-instagram" />
                </a>
                <a href="https://bd.linkedin.com/in/engnrpolok" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-linkedin-in" />
                </a>
                <a href="https://www.facebook.com/jrpolok" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-twitter" />
                </a>
                <a href="https://www.facebook.com/jrpolok" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-facebook-f" />
                </a>
              </div>
            </div>
            {/* social area end */}
          </div>
        </div>
      </div>
      <a
        className="overlay_close_side_menu close_side_menu_active"
        onClick={() => closeModal("sidebar")}
        href="#"
      />
    </div>
  );
}
