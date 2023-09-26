import React from 'react'
import "./contactus.scss";
import elgunVisitcardEn from '../images/VisitCard/elgunVisitCardEN.png';
import ElidaVisitcardEn from '../images/VisitCard/elidaVisitCardEN.png';
import elgunVisitcardTr from '../images/VisitCard/elgunVisitCardTR.png';
import ElidaVisitcardTr from '../images/VisitCard/elidaVisitCardTR.png';
import { useTranslation } from 'react-i18next';
const ContactUs = () => {
  const { t } = useTranslation(["contact"]);

  return (
    <div className={"contact_us"}>
      <div className='container'>
        <br />
        <h1 className='contact_us_title'>
          {t("welcome")}
        </h1>
        <p className='contact_us_title_description'>
          {t("subwelcome")}

        </p>
        <br />

        <div className='contact_us_images'>

          <div>
            <a href="https://wa.me/994506330135?text=Interested%20in%20Working%20Together%3F" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-whatsapp">
              </i>
            </a>


            {localStorage.getItem("languageKey") && localStorage.getItem("languageKey") === "tr" ?
              <img src={elgunVisitcardTr} alt="Director - Elgun's Visit Card" /> :
              <img src={elgunVisitcardEn} alt="Director - Elgun's Visit Card" />
            }
          </div>
          <div >
            <a href="https://wa.me/994773054363?text=Interested%20in%20Working%20Together%3F" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            {localStorage.getItem("languageKey") && localStorage.getItem("languageKey") === "tr" ?
              <img src={ElidaVisitcardTr} alt="Sales Manager - Elida's Visit Card" />
              : <img src={ElidaVisitcardEn} alt="Sales Manager - Elida's Visit Card" />
            }

          </div>

          <div className='contact_us_catalog_div_mobile'>
            {localStorage.getItem("languageKey") && localStorage.getItem("languageKey") === "tr" ?
              <a href="/katalogTr.pdf" target='_blank' rel="noopener noreferrer">
                {t(`${"catalogCheck"}`)}

              </a> :
              <a href="/katalogEn.pdf" target='_blank' rel="noopener noreferrer">
                {t(`${"catalogCheck"}`)}

              </a>
            }
          </div>
        </div>

        <div className='contact_us_catalog_div'>
          <a className='contact_us_katalog_tag' href="/katalogTr.pdf" target='_blank'>
            {localStorage.getItem("languageKey") && localStorage.getItem("languageKey") === "tr" ?
              <a href="/katalogTr.pdf" target='_blank' rel="noopener noreferrer">
                {t(`${"catalogCheck"}`)}

              </a> :
              <a href="/katalogEn.pdf" target='_blank' rel="noopener noreferrer">
                {t(`${"catalogCheck"}`)}

              </a>
            }


          </a>
        </div>
        <div>
        </div>

      </div>
    </div>
  )
}

export default ContactUs