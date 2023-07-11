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
    name: "Products",
    link: "/products",
  },

  {
    name: "Contact us",
    link: "/products",
  },
];

const Header = () => {


  const changeValues = (linkName) => {

  };

  return (
    <div className="container">
      <div className="header">
        <Link to="/" className="logo">
          <img src={'/images/eeelite.png'} alt="" />
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
          </ul>
        </div>

        <div className="icons">
          {["Luxury Linens", "Premium Quality", "Hotel-Grade Towels","Unmatched Softness"].map((link) => {
            return (
              <div key={link}   >
                <span>
                  <BiSolidCheckboxChecked />
                </span>
                <span>
                  {link}
                </span>
              </div>
            );
          })}
        </div>
        <div className="hamburger_menu">
          <GiHamburgerMenu className="icon" style={{ cursor: "pointer" }} />
        </div>
      </div>
    </div>
  );
};

export default Header;
