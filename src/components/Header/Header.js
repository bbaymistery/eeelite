import React from "react";
import { BiSolidCheckboxChecked } from "react-icons/bi";

import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./Header.scss";
import LanguageSelector from "../LanguageSelector/Index";
import { useTranslation } from "react-i18next";
import { useWindowSize } from "../../hooks/useWindowSize";

export const headerLinks = [
  {
    name: "home",
    link: "/",

  },
  {
    name: "about",
    link: "/aboutus",
  },

  {
    name: "products",
    link: "/products",
  },

  {
    name: "contact",
    link: "/contactus",
  },

];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  //arranging language
  const { t } = useTranslation(["navbar"]);
  const changeValues = (linkName) => {
    setMobileMenuOpen(!mobileMenuOpen)
  };
  let size = useWindowSize();
  let { width } = size
  return (
    <div>
      <div className="wrapper_header">
        <div className="container">
          <div className="header">
            <Link to="/" className="logo">
              <img src={'/images/eeelite.png'} alt="EE ELITE logo" />
            </Link>
            <div className="list">
              <ul>
                {headerLinks.map((link, i) => {
                  return (
                    <Link to={link.link} key={link.name} className={""} onClick={() => changeValues(link.name)}   >
                      {t(`${link.name}`)}
                    </Link>
                  );
                })}
                <div className='contact_us_catalog_div_mobile'>
                  {localStorage.getItem("languageKey") && localStorage.getItem("languageKey") === "tr" ?
                    <a href="/katalogTr.pdf" target='_blank' rel="noopener noreferrer">
                      {t(`${"catalog"}`)}

                    </a> :
                    <a href="/katalogEn.pdf" target='_blank' rel="noopener noreferrer">
                      {t(`${"catalog"}`)}

                    </a>
                  }
                </div >
                <LanguageSelector />

              </ul>
            </div>
            {/* Mobile Menu */}
            <div className={`mobile_menu ${mobileMenuOpen ? "open" : ""}`}>

              <ul>
                {headerLinks.map((link,index) => {
                  const animationDelay = `${0.2 * (index + 1)}s`;

                  return (
                    <li style={{animationDelay}} key={link.name} className={`${mobileMenuOpen ? "bottom_to_top_animation2" : ""}`}>
                      <Link to={link.link} onClick={() => changeValues(link.name)}>
                        {t(`${link.name}`)}
                      </Link>
                    </li>
                  );
                })}
                <li style={{ animationDelay:"1s" }} className={`${mobileMenuOpen ? "bottom_to_top_animation2" : ""}`}>
                  {localStorage.getItem("languageKey") && localStorage.getItem("languageKey") === "tr" ?
                    <a href="/katalogTr.pdf" target='_blank' rel="noopener noreferrer">
                      {t(`${"catalog"}`)}

                    </a> :
                    <a href="/katalogEn.pdf" target='_blank' rel="noopener noreferrer">
                      {t(`${"catalog"}`)}

                    </a>
                  }

                </li>



              </ul>
            </div>
            <div className="icons">

              {/* {["Luxury Linens", "Premium Quality", "Hotel-Grade Towels", "Unmatched Softness"].map((link) => { */}
              {[t(`${"luxury"}`), t(`${"premium"}`), t(`${"hotelGrade"}`),].map((link) => {
                return (
                  <div key={link}   >
                    <span> <BiSolidCheckboxChecked />  </span>
                    <span> {link} </span>
                  </div>
                );
              })}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center",gap:"1rem" }}>
              <li style={{ listStyle: "none" }}>
                <LanguageSelector mobile={width < 671 ? false : true} mobileMenuOpen={mobileMenuOpen} />
              </li>
              <div className="hamburger_menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>

                <GiHamburgerMenu className="icon" style={{ cursor: "pointer" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
