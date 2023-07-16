import React, { useEffect, useState } from "react";
import "./Slider.scss";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Slider = () => {
  const [index, setIndex] = useState(0);



  return (
    <div className="slider_container">
      <div className="slider sliderrr">
  

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
