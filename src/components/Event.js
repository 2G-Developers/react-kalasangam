import React, {useState} from 'react'
import Dancers from '../images/dancers.jpeg'

import Modal from './Modal'
import {AiOutlineClose} from 'react-icons/ai'
import Fade from 'react-reveal/Fade';

const Event = ({data}) => {
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
                            <h1>{data.heading}</h1>
                        </div>
                        <div className="gallery__sub-heading gallery__sub-heading--secondary event__animate">
                            <h3>{data.subHeading}</h3>
                        </div>
                    </Fade>
                </div>
            <div className="container">
                <div className="row event__row">
                    {
                        data.events.map((event, index) => (
                            <React.Fragment key={index}>
                                <Fade right duration={1000} delay={800}>
                                    <div className="event__card event__animate-card">
                                        <div className="event__box">
                                            <div className="event__picture">
                                                <img src={event.image} alt={event.alt} />
                                            </div>
                                            <div className="event__detail">
                                                <p className="event__title">{event.title}</p>
                                                <p className="event__date">{event.date} <br /> {event.time}</p>
                                                <button onClick={() => toggleModal(`${event.title}`)} className="event__cta">{event.button}</button>
                                            </div>
                                        </div>
                                    </div>
                                </Fade>
                            </React.Fragment>
                        ))
                    }
                    
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
