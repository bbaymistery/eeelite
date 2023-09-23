import React from 'react'
import './aboutus.scss'
const AboutUs = () => {
    return (
        <div className='about'>
            <div className="container">
                <h1>  About Us</h1>
                <div className="info">
                    <p>Established in 2023, our company sources premium products from <span>Turkey's </span>
                        deep-rooted and high-quality towel manufacturing centers, offering them to
                        a wide range of customers from hotels to massage parlors. With our young,
                        dynamic, and innovative structure, we make a difference in the industry.
                        Always prioritizing customer satisfaction, we are rapidly becoming a recognized
                        and preferred brand in the sector.</p>



                    <p>With our commitment to quality, personalized designs,
                        and flexible production capacity, we produce tailored
                        solutions for every customer's needs.
                        Aiming to add value to our global customers
                        with rapid delivery, superior customer service,
                        and competitive pricing policies, we strive for excellence.</p>

                    <p>Representing  <span>Turkey's </span>
                        rich textile tradition at
                        international standards, our
                        company aims to achieve a leading position in
                        the industry by providing the highest quality towel solution.

                    </p>
                </div>
                <div className="politikamiz">
                    <div className="politikamiz_title">
                        Our quality policy
                    </div>
                    <div className="boxes">
                        <div className="box">
                            <p className='box_title'>Customer-Centric Approach</p>
                            <div className="box_desc">
                                Our company meticulously addresses each process with the aim of maintaining
                                the highest level of customer satisfaction.
                                To offer solutions that best meet the needs of our wide range of customers,
                                from hotels to massage parlors, we continuously conduct market research and feedback analyses.
                            </div>
                        </div>
                        <div className="box">
                            <p className='box_title'>Continuous Innovation</p>
                            <div className="box_desc">
                                We closely follow developments in the towel
                                industry and always offer our customers the latest,
                                most functional, and aesthetically pleasing
                                products. Thanks to our innovative approach,
                                we aim to lead the sector by developing products
                                and services that exceed customer expectations.
                            </div>
                        </div>
                        <div className="box">
                            <p className='box_title'>Superior Quality Assurance</p>
                            <div className="box_desc">
                                The quality of our products is rigorously controlled from the moment of procurement to the final
                                delivery to the customer. To represent Turkey's
                                rich textile tradition at international standards,
                                we use the latest technologies and methods in the industry for our production.
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutUs