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
    id: 1,
    name: "Product A",
    price: "100₼",
    image: productIamge1,
    altname: "Product A Image Description"
  },
  {
    id: 2,
    name: "Product B",
    price: "120₼",
    image: productIamge2,
    altname: "Product B Image Description"
  },
  {
    id: 3,
    name: "Product C",
    price: "80₼",
    image: productIamge3 ,
    altname: "Product C Image Description"
  },
  {
    id: 4,
    name: "Product D",
    price: "150₼",
    image: productIamge4,
    altname: "Product D Image Description"
  },
  {
    id: 5,
    name: "Product E",
    price: "130₼",
    image: productIamge5,
    altname: "Product E Image Description"
  },
  {
    id: 6,
    name: "Product F",
    price: "110₼",
    image: productIamge6,
    altname: "Product F Image Description"
  },
  {
    id: 7,
    name: "Product G",
    price: "90₼",
    image: productIamge7,

    altname: "Product G Image Description"
  },
  {
    id: 8,
    name: "Product H",
    price: "140₼",
    image: productIamge8,
    altname: "Product H Image Description"
  },
  {
    id: 9,
    name: "Product I",
    price: "170₼",
    image: productIamge9,
    altname: "Product I Image Description"
  },
  {
    id: 10,
    name: "Product J",
    price: "160₼",
    image: productIamge10,
    altname: "Product J Image Description"
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
