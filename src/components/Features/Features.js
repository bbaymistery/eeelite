import React, { useEffect } from "react";
import { features } from "../../constants/features";
import './features.scss';
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from 'react-i18next';

const Features = () => {
  const { t } = useTranslation(["shipping"]);  // <-- Use the hook here

  useEffect(() => { AOS.init({ duration: 1200, easing: "ease-in-sine", delay: 150 }); }, []);

  return (
    <div className="features_wrapper" >
      <div className="container">

        <div className="features_divs">
          {features.map((link) => {
            const { id, icon, headingKey, subheadingKey } = link;  // <-- Get the keys here
            return (
              <div className="box" key={id} data-aos="flip-up">
                <div className="icon">{icon}</div>
                <div>
                  <h2>{t(headingKey)}</h2>  {/* <-- Use the t function to translate */}
                  <p>{t(subheadingKey)}</p>  {/* <-- Use the t function to translate */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>

  );
};

export default Features;
