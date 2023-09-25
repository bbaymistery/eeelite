import React from "react";
import { BiSolidCheckboxChecked } from "react-icons/bi";

import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./Header.scss";
import LanguageSelector from "../LanguageSelector/Index";
import { useTranslation } from "react-i18next";

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

  };

  return (
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
                <a className='contact_us_katalog_tag' href="/katalogTr.pdf" target='_blank' rel="noopener noreferrer">
                  {t(`${"catalog"}`)}
                </a >
              </div >
              <LanguageSelector />

            </ul>
          </div>
          {/* Mobile Menu */}
          <div className={`mobile_menu ${mobileMenuOpen ? "open" : ""}`}>
            <ul>
              {headerLinks.map((link) => {
                return (
                  <li key={link.name}>
                    <Link to={link.link} onClick={() => changeValues(link.name)}>
                      {t(`${link.name}`)}
                    </Link>
                  </li>
                );
              })}
              <li>
                <a href="/katalogTr.pdf" target='_blank' rel="noopener noreferrer">
                  {t(`${"catalog"}`)}

                </a>
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
          <div className="hamburger_menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <GiHamburgerMenu className="icon" style={{ cursor: "pointer" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
