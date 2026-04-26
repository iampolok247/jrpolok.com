import Nav1 from "./Nav1";

import { Link } from "react-router-dom";

import { useModalUI } from "@/context/ModalUIContext";
import { useEffect, useState } from "react";

export default function Header1({
  darkLogo = "/assets/images/jrpolok/jrpolok-logo.png",
  lightLogo = "/assets/images/jrpolok/jrpolok-logo.png",
}) {
  const { openModal } = useModalUI();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsSticky(window.scrollY > 150);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`tmp-header-area-start header-one header--sticky header--transparent ${
        isSticky ? "sticky" : ""
      } `}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="header-content">
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
              <nav className="tmp-mainmenu-nav d-none d-xl-block">
                <Nav1 />
              </nav>
              <div className="tmp-header-right">
                <div className="social-share-wrapper d-none d-md-block">
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
                <div className="actions-area">
                  <div className="tmp-side-collups-area d-none d-xl-block">
                    <button
                      className="tmp-menu-bars tmp_button_active"
                      onClick={() => openModal("sidebar")}
                    >
                      <i className="fa-regular fa-bars-staggered" />
                    </button>
                  </div>
                  <div className="tmp-side-collups-area d-block d-xl-none">
                    <button
                      className="tmp-menu-bars humberger_menu_active"
                      onClick={() => openModal("mobileMenu1")}
                    >
                      <i className="fa-regular fa-bars-staggered" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
