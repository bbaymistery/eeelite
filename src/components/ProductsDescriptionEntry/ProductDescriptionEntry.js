import React from 'react'
import { useTranslation } from 'react-i18next';

const ProductDescriptionEntry = () => {
    const { t } = useTranslation(["productsCategories"]);  // <-- Use the hook here

  return (
      <div className="desc">
          <p className='bottom_to_top_animation1' style={{ animationDelay: "0.7s" }}>
              {t("urungiris1")}
          </p>
          {localStorage.getItem("i18nextLng") === "tr" ?
              <p className='bottom_to_top_animation1' style={{ animationDelay: "0.95s" }}>
                  Bizim ürünlerimizde, istediğiniz ürünü istediğiniz <span>renkte ve ölçüde </span> sipariş verebilirsiniz.
              </p> : ""}
          {localStorage.getItem("i18nextLng") === "ru" ?
              <p className='bottom_to_top_animation1' style={{ animationDelay: "0.95s" }}>
                  В нашей продукции вы можете заказать желаемый товар в нужном вам <span> цвете и размере</span> .
              </p> : ""}
          {localStorage.getItem("i18nextLng") === "en" ?
              <p className='bottom_to_top_animation1' style={{ animationDelay: "0.95s" }}>
                  In our products, you can order the product you want in the <span>color and size</span> you want.
              </p> : ""}

          {localStorage.getItem("i18nextLng") === "tr" ?
              <p className='bottom_to_top_animation1' style={{ animationDelay: "1.2s" }}>
                  Beğendiğiniz ürünün üzerine tıklayarak
                  <a href="https://wa.me/994773054363?text=Interested%20in%20Working%20Together%3F"
                      className='bold pointer ' target="_blank" rel="noopener noreferrer">
                      WhatsApp
                  </a>
                  üzerinden bizimle iletişime geçebilirsiniz.
              </p> : ""}

          {localStorage.getItem("i18nextLng") === "en" ?
              <p className='bottom_to_top_animation1' style={{ animationDelay: "1.2s" }}>
                  You can contact us via
                  <a href="https://wa.me/994773054363?text=Interested%20in%20Working%20Together%3F"
                      className='bold pointer ' target="_blank" rel="noopener noreferrer">
                      WhatsApp
                  </a>
                  by    clicking on the product you like.
              </p> : ""}
          {localStorage.getItem("i18nextLng") === "ru" ?
              <p className='bottom_to_top_animation1' style={{ animationDelay: "1.2s" }}>
                  Вы можете связаться с нами через
                  <a href="https://wa.me/994773054363?text=Interested%20in%20Working%20Together%3F"
                      className='bold pointer ' target="_blank" rel="noopener noreferrer">
                      WhatsApp
                  </a>
                  , нажав на понравившийся товар.
              </p> : ""}
      </div>
  )
}

export default ProductDescriptionEntry