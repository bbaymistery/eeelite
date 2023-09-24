import React, { useEffect } from "react";

import "./card.scss";
import AOS from "aos";
import "aos/dist/aos.css";
const Card = React.memo(({ pr }) => {
  useEffect(() => { AOS.init({ duration: 1200, easing: "ease-in-sine", delay: 100 }); }, []);

  return (
    <div className="card" key={pr.id}>
      <div className="img_div">
        <img className="card-img-top" data-aos="zoom-in" src={pr.image} alt={pr.altname} />
        <div className="card-body">
          {/* <p className="card-text">{pr.name}</p>
        <div className="card-price">{pr.price}₼</div> */}
          <img src={'/images/birdElite.png'} alt="" />

          <p>{pr.description}</p>
        </div>
      </div>
    </div>
  );
});

export default Card;
