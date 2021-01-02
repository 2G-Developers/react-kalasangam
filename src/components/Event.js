import React, {useState} from 'react'
import Dance from '../images/25.jpg'
import Dancers from '../images/dancers.jpeg'
import Modal from './Modal'
import {AiOutlineClose} from 'react-icons/ai'
import Fade from 'react-reveal/Fade';

const Event = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [currentEvent, setCurrentModal] = useState("")

    const toggleModal = (eventName) => {
        setCurrentModal(eventName)
        setIsOpen(true)
    }

    return (
        <section className="event" style={{backgroundImage: `url(${Dancers})`}}>
                <div className="gallery__heading-wrapper">
                    <Fade top duration={1000} delay={600}>
                        <div className="gallery__heading gallery__heading--secondary event__animate">
                            <h1>Event</h1>
                        </div>
                    </Fade>
                    <Fade top duration={1000} delay={600}>
                        <div className="gallery__sub-heading gallery__sub-heading--secondary event__animate">
                            <h3>They say a picture speaks a thousand words.</h3>
                        </div>
                    </Fade>
                </div>
            <div className="container">
                <div className="row event__row">
                    <Fade right duration={1000} delay={800}>
                        <div className="event__card event__animate-card">
                            <div className="event__box">
                                <div className="event__picture">
                                    <img src={Dance} alt="Dance"/>
                                </div>
                                <div className="event__detail">
                                    <p className="event__title">Dance: Fitness Dance Lessons in Niyama</p>
                                    <p className="event__date">15 / 03 / 2018 <br /> 6:00 am - 8:00 pm</p>
                                    <button onClick={() => toggleModal("Dance: Fitness Dance Lessons in Niyama")} className="event__cta">Register</button>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade right duration={1000} delay={800}>
                        <div className="event__card event__animate-card">
                            <div className="event__box">
                                <div className="event__picture">
                                    <img src={Dance} alt="Dance"/>
                                </div>
                                <div className="event__detail">
                                    <p className="event__title">Youtube: Steps to become dancer</p>
                                    <p className="event__date">15 / 03 / 2018 <br /> 6:00 am - 8:00 pm</p>
                                    <button onClick={() => toggleModal("Youtube: Steps to become dancer")} className="event__cta">Register</button>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade right duration={1000} delay={800}>
                        <div className="event__card event__animate-card">
                            <div className="event__box">
                                <div className="event__picture">
                                    <img src={Dance} alt="Dance"/>
                                </div>
                                <div className="event__detail">
                                    <p className="event__title">Dance: Cultural Dance</p>
                                    <p className="event__date">15 / 03 / 2018 <br /> 6:00 am - 8:00 pm</p>
                                    <button onClick={() => toggleModal("Dance: Cultural Dance")} className="event__cta">Register</button>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade right duration={1000} delay={800}>
                        <div className="event__card event__animate-card">
                            <div className="event__box">
                                <div className="event__picture">
                                    <img src={Dance} alt="Dance"/>
                                </div>
                                <div className="event__detail">
                                    <p className="event__title">Youtube: Premeier Live</p>
                                    <p className="event__date">15 / 03 / 2018 <br /> 6:00 am - 8:00 pm</p>
                                    <button className="event__cta" onClick={() => toggleModal("Youtube: Premeier Live")}>Register</button>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
            <Modal open={isOpen} close={() => setIsOpen(false)}>
                <div className="modal__container">
                    <div className="contact__form-group" style={{paddingTop: "2rem"}}>
                        <label className="contact__label" htmlFor="event-name">NAME</label>
                        <input type="text" placeholder="Your name" id="event-name" name="event-name" />
                    </div>
                    <div className="contact__form-group">
                        <label className="contact__label" htmlFor="event-mobile">MOBILE</label>
                        <input type="text" placeholder="Your mobile" id="event-mobile" name="event-mobile" />
                    </div>
                    <div className="contact__form-group">
                        <label className="contact__label" htmlFor="event-event">EVENT</label>
                        <input type="text" value={currentEvent} disabled id="event-event" name="event-event" />
                    </div>
                    <div className="contact__form-group" style={{paddingBottom: "2rem"}}>
                        <label className="contact__label" htmlFor="event-email">EMAIL</label>
                        <div className="contact__email-wrap">
                            <input type="email" placeholder="Your email" id="event-email" name="event-email" />
                            <button type="submit" className="contact__send">Register</button>
                        </div>
                    </div>
                    <button className="modal__close" onClick={() => setIsOpen(false)} aria-label="close"><AiOutlineClose /></button>
                </div>
            </Modal>
        </section>
    )
}

export default Event
