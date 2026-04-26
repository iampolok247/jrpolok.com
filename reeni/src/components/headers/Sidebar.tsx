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
              Digital Marketing Specialist and Full-Stack Developer with 10+ years of practical experience.
            </h5>
            <p className="disc">
              I help businesses improve operations and growth through web
              development, CRM systems, lead generation funnels, digital
              marketing execution and custom automation solutions.
            </p>
            <div className="short-contact-area">
              {/* single contact information */}
              <div className="single-contact">
                <i className="fa-solid fa-phone" />
                <div className="information tmp-link-animation">
                  <span>Phone</span>
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
                  <span>Location</span>
                  <span className="number">Meherpur, Khulna, Bangladesh</span>
                </div>
              </div>
              {/* single contact information end */}
            </div>
            {/* social area start */}
            <div className="social-wrapper mt--20">
              <span className="subtitle">find with me</span>
              <div className="social-link">
                <a href="https://github.com/iampolok247" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-github" />
                </a>
                <a href="https://bd.linkedin.com/in/engnrpolok" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-linkedin-in" />
                </a>
                <a href="https://wa.me/8801410573107" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-whatsapp" />
                </a>
                <a href="https://www.facebook.com/primeacademy.org" target="_blank" rel="noreferrer">
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
