import React from 'react'
import "./Footer.scss";
import { BiSolidCheckboxChecked } from "react-icons/bi";
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation(["footerr", "general"]);

    return (
        <div className='footer'>
            <div className="container">
                <div className="left_part_footer">
                    <h1 className='left_part_footer_title'>{t("leftTitle")}</h1>
                    <p>
                        {t("leftSubtitle")}
                    </p>
                </div>
                <div className="center_part_footer">
                    <h1 className='center_part_footer_title'>{(t("general:whyChoiceUs"))}</h1>

                    <div className="icons">
                        {/* {["Luxury Linens", "Premium Quality", "Hotel-Grade Towels", "Unmatched Softness"].map((link) => { */}
                        {[(t("general:whyChoiceUs1")),(t("general:whyChoiceUs2")), (t("general:whyChoiceUs3")), (t("general:whyChoiceUs4")), (t("general:whyChoiceUs5")),].map((link) => {
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
                        {t("general:support")}
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