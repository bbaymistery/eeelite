import React from 'react'
import "./Footer.scss";
import { BiSolidCheckboxChecked } from "react-icons/bi";

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="left_part_footer">
                    <h1 className='left_part_footer_title'>The EE Elite Promise</h1>

                        {/* <img src={'/images/eeelite.png'} alt="" /> */}

                        <p>
                            Under the <span>'EE ELITE'</span>  brand, we specialize in textiles for hotels, hospitals, spas, and beauty centers.

                            With a diverse collection and a commitment to quality, we prioritize customer satisfaction and aim to
                            lead the industry in comfort
                        </p>
                </div>
                <div className="center_part_footer">
                    <h1 className='center_part_footer_title'>Why choice us?</h1>
                  
                    <div className="icons">
                        {/* {["Luxury Linens", "Premium Quality", "Hotel-Grade Towels", "Unmatched Softness"].map((link) => { */}
                        {["Quick Delivery", "Competitive Prices", "Eco-Friendly Materials", "Durable & Long-Lasting ", "Custom Design Options ",   ].map((link) => {
                            return (
                                <div key={link}   >
                                    <span> <BiSolidCheckboxChecked />  </span>
                                    <span> {link} </span>
                                </div>
                            );
                        })}
                    </div>
                    <p className={"copy__desc"}>
                        Copyright © 2023 EE Elite
                        <i className={`fa-solid fa-heart ${"icon"}`}></i>
                    </p>
                </div>
                <div className="right_part_footer">
                    <h1>
                       Customer Support
                    </h1>
                    <a href="tel:+447365678714">+44  73 656 78714</a>
                    <a href="tel:+994506330135">+994 50 633 0135</a>
                    <a href="tel:+994773054363">+994 77 305 4363</a>
                  
                    <a href="mailto:eeeliteinfo@gmail.com">eeeliteinfo@gmail.com</a>

                </div>

            </div>
    
        </div>
    )
}

export default Footer