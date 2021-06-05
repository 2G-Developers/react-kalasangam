import React from 'react'
import {IoIosCall} from 'react-icons/io'
import {HiMail} from 'react-icons/hi'
import {ImWhatsapp} from 'react-icons/im'
// import Fade from 'react-reveal/Fade';

const Contact = ({dark}) => {
    return (
        <section className={dark ? 'contact contact--dark': 'contact'}>
            <div className="container">
                <div className="row">
                    <div className="contact__wrapper">
                        {/* <Fade left duration={1000}> */}
                            <div className="contact__container">
                                <div className="gallery__heading-wrapper" style={{alignItems: "flex-start"}}>
                                    <div className="gallery__heading">
                                        <h1>Find Us on Map</h1>
                                    </div>
                                </div>
                                

                                <div className="contact__bottom">
                                    

                                    <div className="contact__paragraph" style={{marginBottom: 0}}>
                                        <p>Via Birkenweg 37, Bruck, Erlangen 91058</p>
                                    </div>

                                    <div className="contact__map">
                                        <iframe style={{pointerEvents: 'none'}} width="100%" height="100%" title="map" src="https://maps.google.com/maps?q=Birkenweg%2037%2C%20Bruck%2C%20Erlangen%2091058&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                                    </div>
                                </div>
                            </div>
                        {/* </Fade> */}
                    </div>
                    <div className="contact__wrapper contact__wrapper--secondary">
                        {/* <Fade right duration={1000}> */}
                            <div className="contact__container">
                                <div className="gallery__heading-wrapper">
                                    <div className="gallery__heading">
                                        <h1>Contact us</h1>
                                    </div>
                                </div>

                                <div className="contact__paragraph">
                                    <p>
                                    Get in touch to know more about joining our team, dance classes and performances.
                                    </p>
                                </div>

                                <div className="contact__details">
                                        <a href="tel:00491726188531" className="contact__link"><IoIosCall className="contact__icons" color="#D91D52" />(0049) 1726188531</a>
                                        <a href="mailto:info@studiokalasangam.com" className="contact__link"><HiMail className="contact__icons" color="#D91D52" />info@studiokalasangam.com</a>
                                        <a href="https://api.whatsapp.com/send?phone=00491726188531" className="contact__link"><ImWhatsapp className="contact__icons" color="#D91D52" /> (0049) 1726188531</a>
                                </div>

                                <form className="contact__form">
                                    <div className="contact__form-group" style={{paddingTop: "2rem"}}>
                                        <label className="contact__label" htmlFor="name">NAME</label>
                                        <input type="text" placeholder="Your name" />
                                    </div>
                                    <div className="contact__form-group">
                                        <label className="contact__label" htmlFor="name">SUBJECT</label>
                                        <input type="text" placeholder="Subject" />
                                    </div>
                                    <div className="contact__form-group">
                                        <label className="contact__label" htmlFor="name">MESAGE</label>
                                        {/* <input type="text" placeholder="Drop us a line" /> */}
                                        <textarea name="message" id="message" cols="30" rows="3" placeholder="Drop us a line"></textarea>
                                    </div>
                                    <div className="contact__form-group" style={{paddingBottom: "2rem"}}>
                                        <label className="contact__label" htmlFor="name">EMAIL</label>
                                        <div className="contact__email-wrap">
                                            <input type="email" placeholder="Your email" />
                                            <button className="contact__send">Send</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        {/* </Fade> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
