import React, { useEffect, useState } from "react";
import "./Slider.scss";

import { slideImages } from "../../constants/slideImages";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
const Slider = () => {
  const [index, setIndex] = useState(0);
  const [cars] = useState(slideImages);
  const [typewriterText, setTypewriterText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const phrase = "Your Comfort, Our Craft";

  useEffect(() => {
    let timeout;

    if (charIndex < phrase.length) {
      timeout = setTimeout(() => {
        setTypewriterText((prev) => prev + phrase[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 200); // Adjust the typing speed if necessary
    } else {
      timeout = setTimeout(() => {
        setTypewriterText("");
        setCharIndex(0);
      }, 2000);  // 2 seconds pause before retyping
    }

    return () => clearTimeout(timeout);
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
                  <h1 className="intro_welcome">Welcome to EE Elite</h1>
                  <h2 className="intro_header">
                    Discover Premium Products <br /> for Your Every Need
                  </h2>
                  <p className="intro_desc">
                    Elevate your lifestyle with our exclusive selection of high-quality products,
                    meticulously curated to provide you with unmatched comfort and satisfaction.
                  </p>
                  <div className="login_register">
                    <a href="/products">
                      <button
                        className="typewriter-text login_register_button"
                        style={{ display: typewriterText.length === 0 ? 'none' : 'block' }}
                      >
                        {typewriterText}
                      </button>
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
