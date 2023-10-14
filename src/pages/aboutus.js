import React from 'react'
import './aboutus.scss'
import { useTranslation } from 'react-i18next';
import OurPolicy from '../components/OurPolicy';
const AboutUs = () => {
    const { t } = useTranslation(["about"]);

    return (
        <>
            <div className='about'>
                <div className="container">
                    <h1>{t("title")}</h1>
                    <div className="info">
                        <p>{t("subtitle1")}</p>
                        <p>{t("subtitle2")}</p>
                        <p>{t("subtitle3")}</p>
                    </div>

                </div>
            </div>
            <OurPolicy bggray={true} />
        </>

    )
}

export default AboutUs