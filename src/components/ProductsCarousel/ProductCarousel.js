/* eslint-disable react-hooks/rules-of-hooks */
import "./carousel.scss";
import React, { useEffect, useRef } from "react";
import Card from "../Card";
import useOnScreen from "../../hooks/useOnScreen/useOnScreen";
import AOS from "aos";
import "aos/dist/aos.css";
import productIamge1 from '../../images/products/10.jpg'
import productIamge2 from '../../images/products/14.jpg'
import productIamge3 from '../../images/products/2.jpg'
import productIamge4 from '../../images/products/3.jpg'
import productIamge5 from '../../images/products/42.jpg'
import productIamge6 from '../../images/products/34.jpg'
import productIamge7 from '../../images/products/5.jpg'
import productIamge8 from '../../images/products/6.jpg'
import productIamge9 from '../../images/products/bornoz.jpg'
import productIamge10 from '../../images/products/mehraba.jpg'
const allProducts = [
  {
    id: 8,
    name: "Product H",
    image: productIamge8,
    altname: "EE ELITE products",
    description: " Premier textiles for hotels, spas, and more. Where quality meets comfort."
  },
  {
    id: 9,
    name: "Product I",
    image: productIamge9,
    altname: "EE ELITE products",
    description: " Premier textiles for hotels, spas, and more. Where quality meets comfort."
  },
  {
    id: 10,
    name: "Product J",
    image: productIamge10,
    altname: "EE ELITE products",
    description: " Premier textiles for hotels, spas, and more. Where quality meets comfort."
  },
  {
    id: 1,
    name: "Product A",
    image: productIamge1,
    altname: "EE ELITE products",
    description: " Premier textiles for hotels, spas, and more. Where quality meets comfort."
  },
  {
    id: 2,
    name: "Product B",
    image: productIamge2,
    altname: "EE ELITE products",
    description: " Premier textiles for hotels, spas, and more. Where quality meets comfort."
  },
  {
    id: 3,
    name: "Product C",
    image: productIamge3,
    altname: "EE ELITE products",
    description: " Premier textiles for hotels, spas, and more. Where quality meets comfort."
  },
  {
    id: 4,
    name: "Product D",
    image: productIamge4,
    altname: "EE ELITE products",
    description: " Premier textiles for hotels, spas, and more. Where quality meets comfort."
  },
  {
    id: 5,
    name: "Product E",
    image: productIamge5,
    altname: "EE ELITE products",
    description: " Premier textiles for hotels, spas, and more. Where quality meets comfort."
  },
  {
    id: 6,
    name: "Product F",
    image: productIamge6,
    altname: "EE ELITE products",
    description: " Premier textiles for hotels, spas, and more. Where quality meets comfort."
  },
  {
    id: 7,
    name: "Product G",
    image: productIamge7,
    altname: "EE ELITE products",
    description: " Premier textiles for hotels, spas, and more. Where quality meets comfort."
  },
];

const ProductCarousel = React.memo(() => {

  //!setting displaying with hook
  const headerTwoRef = useRef();
  const visible = useOnScreen(headerTwoRef, "-150px");

  useEffect(() => { AOS.init({ duration: 1200, easing: "ease-in-sine" }); }, []);



  return (
    <div className="container product_carousel">
      <h3 className="title" ref={headerTwoRef} data-aos="zoom-in">
        {visible && "Some of our products"}
      </h3>
      <div className="carousel_list">
        <div className="slider">
          <div className="slider_track">
            {allProducts.slice(0, 5).map((pr) => (
              <div key={pr.id + 1} className="slide">
                <Card pr={pr} />
              </div>
            ))}

            {/* doubled */}
            {allProducts.slice(5, 10).map((pr) => (
              <div key={pr.id + 1} className="slide">
                <Card pr={pr} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default ProductCarousel;
/**
 *

 */
