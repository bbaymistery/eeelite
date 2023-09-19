import React from 'react'
import "./contactus.scss";
import elgunVisitcard from '../images/elgunVisitCardEn.png';
import ElidaVisitcard from '../images/elidaVisitcardTr.png';
const ContactUs = () => {
  return (
    <div className={"contact_us"}>
      <div className='container'>
        <br />
        <h1 className='contact_us_title'>
          We'd love to hear from you

        </h1>
        <p className='contact_us_title_description'>
          Send us a message and we'll respond as soon as possible
        </p>
        <br />

        <div className='contact_us_images'>

          <div>
            <a href="https://wa.me/994506330135?text=Interested%20in%20Working%20Together%3F" target="_blank" rel="noopener noreferrer">
              <i class="fa-brands fa-whatsapp">
              </i>
            </a>


            <img  src={elgunVisitcard} alt="Director - Elgun's Visit Card" />
          </div>
          <div >
            <a href="https://wa.me/994773054363?text=Interested%20in%20Working%20Together%3F" target="_blank" rel="noopener noreferrer">
              <i class="fa-brands fa-whatsapp"></i>
            </a>
            <img  src={ElidaVisitcard} alt="Sales Manager - Elida's Visit Card" />
          </div>
        </div>

        <div>
        </div>

      </div>
    </div>
  )
}

export default ContactUs