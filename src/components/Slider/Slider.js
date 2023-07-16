import React, { useEffect } from "react";
import "./Slider.scss";

import { slideImages } from "../../constants/slideImages";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

const Slider = () => {
  //https://www.youtube.com/watch?v=tphDji-XZCE
  const [index, setIndex] = React.useState(0);
  const [cars, setCars] = React.useState(slideImages);
  useEffect(() => {
    const lastIndex = cars.length - 1;
    if (index < 0) setIndex(lastIndex);
    if (index > lastIndex) setIndex(0);
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1;
        if (index > cars.length - 1) index = 0;
        return index;
      });
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index, cars]);
  const handleClick = (par) => {
    console.log("das");

  }
  return (
    <div className={"slider_container"}>
      <div className={"slider sliderrr"}>
        {slideImages.map((image, carIndex) => {
          let position = "nextSlide";
          if (carIndex === index) position = "activeSlide";
          if (carIndex === index - 1 || (index === 0 && carIndex === cars.length - 1)) position = "lastSlide";

          return (
            <div className={`slide ${position} eachslider`} key={image.id} style={{ backgroundImage: `url(${image.img})` }} >
              {/* <img src={image.img} alt="" /> */}
              <div className={"container_auto_center"}>
                <div className={"intro"}>
                  <h1 className={"intro_welcome"}>Welcome to EE Elite</h1>
                  <h2 className={"intro_header"}>
                    Discover Premium Products <br /> for Your Every Need
                  </h2>
                  <p className={"intro_desc"}>
                    Elevate your lifestyle with our exclusive selection of high-quality products, meticulously curated to provide you with unmatched comfort and satisfaction.
                  </p>
                  <div className={"login_register"}>
                    <a href="/products">
                      <button onClick={handleClick} className={"login_register_button"}>
                        Explore Our Collection
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className={"navigation"}>
          <AiOutlineLeft className={"prev_btn"} onClick={() => setIndex(index - 1)} />
          <AiOutlineRight className={"next_btn"} onClick={() => setIndex(index + 1)} />
        </div>

        {/* //!clickable navigations */}
        <div className={"visibility_navigation"}>
          <div className={`slide_icon ${index === 0 ? "activeNavigationSlider" : ""}`} onClick={() => setIndex(0)}></div>
          <div className={` slide_icon ${index === 1 ? "activeNavigationSlider" : ""}`} onClick={() => setIndex(1)}></div>
          <div className={`slide_icon ${index === 2 ? "activeNavigationSlider" : ""}`} onClick={() => setIndex(2)} ></div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
