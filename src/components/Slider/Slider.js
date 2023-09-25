import React, { useEffect, useState } from "react";
import "./Slider.scss";

import { slideImages } from "../../constants/slideImages";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useTranslation } from "react-i18next";
const Slider = () => {
  const [index, setIndex] = useState(0);
  const [cars] = useState(slideImages);
  const [typewriterText, setTypewriterText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const { t } = useTranslation(["homePageSlider"]);

  useEffect(() => {
    const lastIndex = cars.length - 1;

    // Ensure the index stays within the valid range
    if (index < 0) setIndex(lastIndex);
    if (index > lastIndex) setIndex(0);

    // Auto slide functionality
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let newIndex = oldIndex + 1;
        if (newIndex > lastIndex) newIndex = 0;
        return newIndex;
      });
    }, 5000);

    // Cleanup the interval when the component is unmounted
    return () => {
      clearInterval(slider);
    };
  }, [index, cars]);

  const phrase = t("typeWriterText");
  useEffect(() => {
    const timeout = setTimeout(() => {
      // If it's not at the end of the phrase, continue typing
      if (charIndex < phrase.length) {
        setTypewriterText((prev) => prev + phrase[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        // If it's at the end of the phrase, reset to start typing again
        setTypewriterText("");
        setCharIndex(0);
      }
    }, 200);  // Adjust the typing speed if necessary

    return () => clearTimeout(timeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typewriterText, charIndex]);
  return (
    <div className="slider_container">
      <div className="slider sliderrr">
        {/* Render slides */}
        {slideImages.map((image, carIndex) => {
          let position = "nextSlide";
          if (carIndex === index) position = "activeSlide";
          if (carIndex === index - 1 || (index === 0 && carIndex === cars.length - 1))
            position = "lastSlide";

          return (
            <div
              className={`slide ${position} eachslider`}
              key={image.id}
              style={{ backgroundImage: `url(${image.img})` }}
            >
              {/* Slide content */}
              <div className="container_auto_center">
                <div className="intro">
                  <h1 className="intro_welcome"> {t(`title`)}</h1>
                  <h2 className="intro_header">
                    {t(`subtitle`)}
                  </h2>
                  <p className="intro_desc">
                    {t(`description`)}
                  </p>
                  <div className="login_register">
                    <a href="/products">
                      <button className="typewriter-text login_register_button" >{typewriterText}</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Navigation buttons */}
        <div className="navigation">
          <AiOutlineLeft className="prev_btn" onClick={() => setIndex(index - 1)} />
          <AiOutlineRight className="next_btn" onClick={() => setIndex(index + 1)} />
        </div>

        {/* Clickable navigations */}
        <div className="visibility_navigation">
          <div className={`slide_icon ${index === 0 ? "activeNavigationSlider" : ""}`} onClick={() => setIndex(0)}></div>
          <div className={`slide_icon ${index === 1 ? "activeNavigationSlider" : ""}`} onClick={() => setIndex(1)}></div>
          <div className={`slide_icon ${index === 2 ? "activeNavigationSlider" : ""}`} onClick={() => setIndex(2)}></div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
