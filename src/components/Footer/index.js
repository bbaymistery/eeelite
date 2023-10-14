import React, { useEffect, useRef } from 'react'
import "./Footer.scss";
import { BiSolidCheckboxChecked } from "react-icons/bi";
import { useTranslation } from 'react-i18next';
const options = { root: null, rootMargin: '0px', threshold: 0.2 };
const Footer = () => {
    const { t } = useTranslation(["footerr", "general"]);

    const footerRef = useRef(null);
    useEffect(() => {
        const footerElement = footerRef.current;
        const choiceElements = footerElement.querySelectorAll('.choice');
        const hizmetElements = footerElement.querySelectorAll('.hizmet');
        // IntersectionObserver configuration


        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // When the footer is at least 20% visible, add animation to .choice elements
                    choiceElements.forEach((choiceElement, index) => {
                        const animationDelay = `${0.2 * (index + 1)}s`;
                        choiceElement.classList.add('bottom_to_top_animation2');
                        choiceElement.style.animationDelay = animationDelay;
                    });
                    hizmetElements.forEach((hzElement, index) => {
                        const animationDelay = `${0.2 * (index + 1)}s`;
                        hzElement.classList.add('bottom_to_top_animation2');
                        hzElement.style.animationDelay = animationDelay;
                    });
                } else {
                    // When not visible, remove the added classes and reset animation delay
                    choiceElements.forEach((choiceElement) => {
                        choiceElement.classList.remove('bottom_to_top_animation2');
                        choiceElement.style.animationDelay = '0s';
                    });
                    // When not visible, remove the added classes and reset animation delay
                    hizmetElements.forEach((hzElement) => {
                        hzElement.classList.remove('bottom_to_top_animation2');
                        hzElement.style.animationDelay = '0s';
                    });
                }
            });
        }, options);

        // Start observing the footer
        if (footerElement) {
            observer.observe(footerElement);
        }

        // Clean up the observer when the component unmounts
        return () => {
            if (footerElement) {
                observer.unobserve(footerElement);
            }
        };
    }, []);

    return (
        <div className='footer' ref={footerRef}>
            <div className="container">
                <div className="left_part_footer">
                    <h1 className='left_part_footer_title choice'>{t("leftTitle")}</h1>
                    <p className='choice'>
                        {t("leftSubtitle")}
                    </p>
                </div>
                <div className="center_part_footer">
                    <h1 className='center_part_footer_title choice'>{(t("general:whyChoiceUs"))}</h1>

                    <div className="icons">
                        {/* {["Luxury Linens", "Premium Quality", "Hotel-Grade Towels", "Unmatched Softness"].map((link) => { */}
                        {[(t("general:whyChoiceUs1")), (t("general:whyChoiceUs2")), (t("general:whyChoiceUs3")), (t("general:whyChoiceUs4")), (t("general:whyChoiceUs5")),].map((link) => {

                            return (
                                <div key={link} className="choice">
                                    <span> <BiSolidCheckboxChecked />  </span>
                                    <span> {link} </span>
                                </div>
                            );
                        })}
                    </div>
                    <p className={"copy__desc choice"}>
                        Copyright © 2023 EE Elite
                        <i className={`fa-solid fa-heart ${"icon"}`}></i>
                    </p>
                </div>
                <div className="right_part_footer">
                    <h1 className='hizmet'>
                        {t("general:support")}
                    </h1>
                    <a className='hizmet' href="tel:+447365678714">+44  73 656 78714</a>
                    <a className='hizmet' href="tel:+994506330135">+994 50 633 0135</a>
                    <a className='hizmet' href="tel:+994773054363">+994 77 305 4363</a>

                    <a className='hizmet' href="mailto:eeeliteinfo@gmail.com">eeeliteinfo@gmail.com</a>

                </div>

            </div>

        </div>
    )
}

export default Footer