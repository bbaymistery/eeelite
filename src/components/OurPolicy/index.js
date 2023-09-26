import React from 'react'
import { useTranslation } from 'react-i18next';
import './ourpolicy.scss'
const OurPolicy = (props) => {
    let { bggray=false } = props
    const { t } = useTranslation(["qualityPolicy"]);
    return (
        <div className=" politikamiz_container" bggray={String(bggray)} >
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