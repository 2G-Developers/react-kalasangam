import React from 'react'
import {IoIosCall} from 'react-icons/io'
import {HiMail} from 'react-icons/hi'
import {ImWhatsapp} from 'react-icons/im'

const Contact = () => {
    return (
        <section className="contact">
            <div className="container">
                <div className="row">
                    <div className="contact__wrapper">
                        <div className="contact__container">
                            <div className="gallery__heading-wrapper" style={{alignItems: "flex-start"}}>
                                <div className="gallery__heading">
                                    <h1>Get in Touch</h1>
                                </div>
                            </div>
                            <div className="contact__top">
                                <div className="contact__paragraph">
                                    <p>
                                    We appreciate each customer and we are proud that 60% of clients come back to work with us again.
                                    </p>
                                </div>

                                <div className="contact__details">
                                    <a href="mailto:info@kalasangam.com" className="contact__link"><IoIosCall className="contact__icons" color="#25DAC5" />+1 555 505 5050</a>
                                    <a href="mailto:info@kalasangam.com" className="contact__link"><HiMail className="contact__icons" color="#25DAC5" />info@kalasangam.com</a>
                                    <a href="mailto:info@kalasangam.com" className="contact__link"><ImWhatsapp className="contact__icons" color="#25DAC5" />+1 555 505 5050</a>
                                </div>
                            </div>

                            <div className="contact__bottom">
                                <div className="contact__secondary-heading">
                                    <h3>Find Us on Map</h3>
                                </div>

                                <div className="contact__paragraph" style={{marginBottom: 0}}>
                                    <p>Via Birkenweg 37, Bruck, Erlangen 91058</p>
                                </div>

                                <div className="contact__map">
                                    <iframe width="100%" height="100%" title="map" src="https://maps.google.com/maps?q=Birkenweg%2037%2C%20Bruck%2C%20Erlangen%2091058&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact__wrapper contact__wrapper--secondary">
                        <div className="contact__container">

                            <div className="gallery__heading-wrapper">
                                <div className="gallery__heading">
                                    <h1>You Can Mail Us</h1>
                                </div>
                            </div>

                            <div className="contact__paragraph">
                                <p>
                                We are always looking for a awesome people.
                                </p>
                            </div>

                            <form className="contact__form">
                                <div className="contact__form-group" style={{paddingTop: "2rem"}}>
                                    <label className="contact__label" htmlFor="name">NAME</label>
                                    <input type="text" placeholder="Your name" />
                                </div>
                                <div className="contact__form-group">
                                    <label className="contact__label" htmlFor="name">MOBILE</label>
                                    <input type="text" placeholder="Your mobile" />
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
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
