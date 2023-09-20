import React, { useEffect } from "react";
import { features } from "../../constants/features";
import './features.scss';
import AOS from "aos";
import "aos/dist/aos.css";
const Features = () => {
  useEffect(() => { AOS.init({ duration: 1200, easing: "ease-in-sine", delay: 150 }); }, []);

  return (
    <div className="features_wrapper" >
      <div className="container">

        <div className="features_divs">
          {features.map((link) => {
            const { id, icon, heading, subheading } = link;
            return (
              <div className="box" key={id} data-aos="flip-up">
                <div className="icon">{icon}</div>
                <div>
                  <h2>{heading}</h2>
                  <p>{subheading}</p>
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
