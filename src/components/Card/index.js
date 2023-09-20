import React, { useEffect } from "react";

import "./card.scss";
import AOS from "aos";
import "aos/dist/aos.css";
const Card = React.memo(({ pr }) => {
  useEffect(() => { AOS.init({ duration: 1200, easing: "ease-in-sine" }); }, []);

  return (
    <div  className="card" key={pr.id}>
      {/* <div className="card-icon">
        <FiLink />
      </div> */}
      <div className="img_div">
        {/* <LazyLoad height={100}> */}
        <img className="card-img-top" data-aos="zoom-in" src={pr.image} alt={pr.altname} />
        {/* </LazyLoad> */}
      </div>
      {/* <div className="card-body">
        <p className="card-text">{pr.name}</p>
        <div className="card-price">{pr.price}₼</div>
      </div> */}
    </div>
  );
});

export default Card;
