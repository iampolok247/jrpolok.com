import { Link } from "react-router-dom";
import Demomodal from "../modals/Demomodal";
import Chat from "../common/Chat";
import DemoToggler from "../common/DemoToggler";
import ScrollTop from "../common/ScrollTop";
import Sidebar from "../headers/Sidebar";
import MobileMenu from "../headers/MobileMenu";
import MobileMenuOnepage from "../headers/MobileMenuOnepage";
import { footerLinks, footerLinksWhite } from "@/data/footerLinks";
export default function Footer1({
  darkLogo = "/assets/images/jrpolok/jrpolok-logo.png",
  lightLogo = "/assets/images/jrpolok/jrpolok-logo.png",
}) {
  return (
    <>
      <footer className="footer-area footer-style-one-wrapper bg-color-footer bg_images tmp-section-gap">
        <div className="container">
          <div className="footer-main footer-style-one">
            <div className="row g-5">
              <div className="col-lg-5 col-md-6">
                <div className="single-footer-wrapper border-right mr--20">
                  <div className="logo">
                    <Link to={`/`}>
                      <img
                        loading="lazy"
                        className="logo-dark"
                        alt="J R Polok - Full Stack Engineer & AI Specialist"
                        src={darkLogo}
                        width={121}
                        height={41}
                      />
                      <img
                        loading="lazy"
                        className="logo-white"
                        alt="J R Polok - Full Stack Engineer & AI Specialist"
                        src={lightLogo}
                        width={121}
                        height={40}
                      />
                    </Link>
                  </div>
                  <p className="description">
                    <span>J R Polok</span> | Full Stack, AI & Marketing
                  </p>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="newsletter-form-1 mt--40"
                  >
                    <input type="email" placeholder="Email Adress" />
                    <span className="form-icon">
                      <i className="fa-regular fa-envelope" />
                    </span>
                  </form>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-footer-wrapper quick-link-wrap">
                  <h5 className="ft-title">Quick Link</h5>
                  <ul className="ft-link tmp-link-animation dark-content">
                    {footerLinks.map((item, index) => (
                      <li key={index}>
                        <Link to={item.href}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                  <ul className="ft-link tmp-link-animation light-content2">
                    {footerLinksWhite.map((item, index) => (
                      <li key={index}>
                        <Link to={item.href}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-footer-wrapper contact-wrap">
                  <h5 className="ft-title">Contact</h5>
                  <ul className="ft-link tmp-link-animation">
                    <li>
                      <span className="ft-icon">
                        <i className="fa-solid fa-envelope" />
                      </span>
                      <a href="mailto:hello@jrpolok.com">hello@jrpolok.com</a>
                    </li>
                    <li>
                      <span className="ft-icon">
                        <i className="fa-solid fa-location-dot" />
                      </span>
                      Bangladesh
                    </li>
                    <li>
                      <span className="ft-icon">
                        <i className="fa-solid fa-phone" />
                      </span>
                      <a href="tel:+8801410573107">+8801410573107</a>
                    </li>
                  </ul>
                  <div className="social-link footer">
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
              </div>
            </div>
          </div>
        </div>
      </footer>{" "}
      <Demomodal />
      <Chat />
      <DemoToggler /> <ScrollTop />
      <Sidebar />
      <MobileMenu />
      <MobileMenuOnepage />
    </>
  );
}
