import React, { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next';
import './ourpolicy.scss'
import useIntersectionObserverOrijinal from '../../hooks/useIntersectionObserverOrijinal';
import { useState } from 'react';
const options = { root: null, rootMargin: '0px', threshold: 0.3 };
const OurPolicy = (props) => {
    let { bggray = false } = props
    const { t } = useTranslation(["qualityPolicy"]);
    const mainDiv = useRef(null);
    const boxes = useRef(null);

    useIntersectionObserverOrijinal(mainDiv, (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                boxes.current.forEach((choiceElement, index) => {
                    const animationDelay = `${0.33 * (index + 1)}s`;
                    choiceElement.classList.add('bottom_to_top_animation2');
                    choiceElement.style.animationDelay = animationDelay;
                });
            } else {
                boxes.current.forEach((choiceElement) => {
                    choiceElement.classList.remove('bottom_to_top_animation2');
                    choiceElement.style.animationDelay = '0s';
                });
            }
        });
    }, options);

    useEffect(() => {
        boxes.current = mainDiv.current.querySelectorAll('.box');

    }, []);

    return (
        <div className=" politikamiz_container" bggray={String(bggray)} ref={mainDiv}>
            <div className="politikamiz container">
                <div className="politikamiz_title">
                    {t("title")}
                </div>
                <div className="boxes">
                    <div className="box">
                        <p className='box_title'>
                            {t("subtitle1_title")}
                        </p>
                        <div className="box_desc">
                            {t("subtitle1_title_description")}
                        </div>
                    </div>
                    <div className="box">
                        <p className='box_title'>
                            {t("subtitle2_title")}
                        </p>
                        <div className="box_desc">
                            {t("subtitle2_title_description")}

                        </div>
                    </div>
                    <div className="box">
                        <p className='box_title'>
                            {t("subtitle3_title")}

                        </p>
                        <div className="box_desc">
                            {t("subtitle3_title_description")}

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default OurPolicy