import React, { useEffect, useRef } from 'react'
import "./adress.scss";
import { useTranslation } from 'react-i18next';
const options = { root: null, rootMargin: '0px', threshold: 0.2 };

//for contact us
const AdressInformations = () => {
    const { t } = useTranslation(["contact"]);

    const contactRef = useRef(null);
    useEffect(() => {
        const contactElement = contactRef.current;
        const choiceElements = contactElement.querySelectorAll('li');
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

                } else {
                    // When not visible, remove the added classes and reset animation delay
                    choiceElements.forEach((choiceElement) => {
                        choiceElement.classList.remove('bottom_to_top_animation2');
                        choiceElement.style.animationDelay = '0s';
                    });
                    // When not visible, remove the added classes and reset animation delay

                }
            });
        }, options);

        //! Start observing the footer
        if (contactElement) {
            observer.observe(contactElement);
        }

        // Clean up the observer when the component unmounts
        return () => {
            if (contactElement) {
                observer.unobserve(contactElement);
            }
        };
    }, []);
    return (
        <div className={"form_box"} ref={contactRef}>
            <div className={"form_title_wrap"}>
                <div className={"form_title_wrap"}>
                    <h3 className={"title"}>  {t("contact")}</h3>
                </div>

                <div className={"form_content"}>
                    <div className={"address_book"}>
                        <ul tabIndex="-1">
                            <li tabIndex="-1">
                                <i className="fa-solid fa-phone"></i>
                                <h5 className="title font-size-16 pb-1">{t("contact724")}</h5>

                                <a href="tel:+994993054363">+994 99 305 4363</a>
                            </li>
                            <li tabIndex="-1">
                                <i className="fa-solid fa-globe"></i>
                                <h5 className="title font-size-16 pb-1"> {t("abroad")}</h5>
                                <a href="tel:+447365678714" >+44 73 6567 8714</a>
                            </li>
                            <li tabIndex="-1">
                                <i className="fa-brands fa-whatsapp"></i>
                                <h5 className="title font-size-16 pb-1">WhatsApp</h5>
                                <a tabIndex="-1" target="_blank" href="https://wa.me/447365678714" rel="noreferrer">
                                    +44 73 6567 87 14
                                </a>
                                <br />
                                <a tabIndex="-1" target="_blank" href="https://wa.me/994993054363" rel="noreferrer">
                                    +994 99 305 43 63
                                </a>
                                <br />
                                <a tabIndex="-1" target="_blank" href="https://wa.me/994506330135" rel="noreferrer">
                                    +994 50 633 01 35
                                </a>
                            </li>


                            <li tabIndex="-1">
                                <i className="fa-solid fa-envelope"></i>
                                <h5 className="title font-size-16 pb-1">{t("email")}</h5>
                                <a href="mailto: eeeliteinfo@gmail.com"> eeeliteinfo@gmail.com</a>
                            </li>


                            <li>
                                <i className="fa-solid fa-briefcase"></i>
                                <h5 className="title font-size-16 pb-1">{t("accountDepartment")}</h5>
                                <p>
                                    <span>  Ms. Elida Mahmudlu</span>
                                    <br />
                                    <a href="mailto: elidamahxmudlu@gmail.com"> elidamahxmudlu@gmail.com</a>
                                </p>
                            </li>

                            <li>
                                <i className="fa-solid fa-building-user"></i>
                                <h5 className="title font-size-16 pb-1"> {t("director")}</h5>
                                <p>
                                    <span>  Mr. Elgun Ezmemmedov</span>
                                    <br />
                                    <a href="mailto: elgun.ezmemmedov@mail.ru"> elgun.ezmemmedov@mail.ru</a>
                                </p>
                            </li>



                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdressInformations