import React, { useEffect } from "react";

import "./card.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
const Card = React.memo(({ pr, translationhook = "carousel", descriptionProduct ="description"}) => {
  useEffect(() => { AOS.init({ duration: 1200, easing: "ease-in-sine", delay: 100 }); }, []);
  const { t } = useTranslation([translationhook]);

  return (
    <div className="card" key={pr.id}>
      <div className="img_div">
        <img className="card-img-top" data-aos="zoom-in" src={pr.image} alt={pr.altname} />
        <div className="card-body">
          <a href="https://wa.me/994773054363?text=Interested%20in%20Working%20Together%3F" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-whatsapp bold cursor"></i>
          </a>
          <img src={'/images/birdElite.png'} alt=""  loading="lazy" />
          <p>{t(descriptionProduct)}</p>
        </div>
      </div>
    </div>
  );
});

export default Card;
