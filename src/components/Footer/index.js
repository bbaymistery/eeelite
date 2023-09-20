import React from 'react'
import "./Footer.scss";

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="left_part_footer">
                    <img src={'/images/eeelite.png'} alt="" />

                    <p>
                        Under the <span>'EE ELITE'</span>  brand, we specialize in textiles for hotels, hospitals, spas, and beauty centers.

                        With a diverse collection and a commitment to quality, we prioritize customer satisfaction and aim to
                        lead the industry in comfort
                    </p>
                </div>
                <div className="center_part_footer"><p>
                    <p className='center_part_footer_title'>Have Questions</p>
                    <a href="tel:+994506330135">+994 50 633 0135</a>
                    <br />
                    <a href="tel:+994773054363">+994 77 305 4363</a>
                    <br />
                    <span>
                        24/7 Dedicated Customer Support
                    </span>
                </p></div>
                <div className="right_part_footer">
                    <p>
                        E-Mail             

                    </p>
                    <a href="mailto:elidamahmudlu@gmail.com">elidamahmudlu@gmail.com</a>
                    <br />
                    <a href="mailto:elgun.ezmemmedov@gmail.com">elgun.ezmemmedov@gmail.com</a>

                </div>

            </div>
        </div>
    )
}

export default Footer