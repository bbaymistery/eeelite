import React, { useEffect, useRef } from "react";
import { features } from "../../constants/features";
import './features.scss';
import { useTranslation } from 'react-i18next';
import { useWindowSize } from "../../hooks/useWindowSize";
import useIntersectionObserverOrijinal from "../../hooks/useIntersectionObserverOrijinal";

const options = { root: null, rootMargin: '0px', threshold: 0.3 };
const Features = () => {
  const { t } = useTranslation(["shipping"]);  // <-- Use the hook here


  let size = useWindowSize();
  let { width } = size

  const boxes = useRef(null);
  const mainDiv = useRef(null);
  useIntersectionObserverOrijinal(mainDiv, (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (boxes.current) {
          boxes.current.forEach((choiceElement, index) => {
            const animationDelay = `${0.3 * (index + 1)}s`;
            choiceElement.classList.add('bottom_to_top_animation2');
            choiceElement.style.animationDelay = animationDelay;
          });
        }
      } else {
        if (boxes.current) {
          boxes.current.forEach((choiceElement) => {
            choiceElement.classList.remove('bottom_to_top_animation2');
            choiceElement.style.animationDelay = '0s';
          });
        }
      }
    });
  }, options);

  useEffect(() => {
    if (features.length > 0) {
      if (mainDiv.current) {
        boxes.current = mainDiv.current.querySelectorAll('.box');
      }
    }
  }, []);
  return (
    <div className="features_wrapper" ref={mainDiv}>
      <div className="container">

        <div className="features_divs">
          {features.map((link) => {
            const { id, icon, headingKey, subheadingKey } = link;  // <-- Get the keys here
            return (
              <div className="box" key={id} data-aos={width < 990 ? "" : "flip-up"}>
                <div className="icon">{icon}</div>
                <div>
                  <h2>{t(headingKey)}</h2> 
                  <p>{t(subheadingKey)}</p> 
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
