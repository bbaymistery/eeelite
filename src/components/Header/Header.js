import React from "react";
import { BiSolidCheckboxChecked } from "react-icons/bi";

import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./Header.scss";
export const headerLinks = [
  {
    name: "Home",
    link: "/",

  },
  {
    name: "About",
    link: "/aboutus",
  },

  {
    name: "Products",
    link: "/products",
  },

  {
    name: "Contact ",
    link: "/contactus",
  },
 
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

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
              {headerLinks.map((link) => {
                return (
                  <Link to={link.link} key={link.name} className={""} onClick={() => changeValues(link.name)}   >
                    {link.name}
                  </Link>
                );
              })}
              <div className='contact_us_catalog_div_mobile'>
                <a  className='contact_us_katalog_tag' href="/katalogTr.pdf" target='_blank'>
                   Catalog
                </a >
              </div >
            </ul>
          </div>
          {/* Mobile Menu */}
          <div className={`mobile_menu ${mobileMenuOpen ? "open" : ""}`}>
            <ul>
              {headerLinks.map((link) => {
                return (
                  <li key={link.name}>
                    <Link to={link.link} onClick={() => changeValues(link.name)}>
                      {link.name}
                    </Link>
                  </li>
                );
              })}
              <li>
                <a href="/katalogTr.pdf" target='_blank' rel='noreferrer'>
                   Catalog
                </a>
              </li>
            </ul>
          </div>
          <div className="icons">
            {/* {["Luxury Linens", "Premium Quality", "Hotel-Grade Towels", "Unmatched Softness"].map((link) => { */}
            {["Luxury Linens", "Premium Quality", "Hotel-Grade Towels",].map((link) => {
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
