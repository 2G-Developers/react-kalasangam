import React from 'react'
import Dance from '../images/25.jpg'
import Dancers from '../images/dancers.jpeg'

const Event = () => {
    return (
        <section className="event" style={{backgroundImage: `url(${Dancers})`}}>
            <div className="container">
                <div className="row">
                    <div className="event__card">
                        <div className="event__box">
                            <div className="event__picture">
                                <img src={Dance} alt="Dance"/>
                            </div>
                            <div className="event__detail">
                                <p className="event__title">Dance: Fitness Dance Lessons in Niyama</p>
                                <p className="event__date">15 / 03 / 2018 <br /> 6:00 am - 8:00 pm</p>
                                <a href="/index" className="event__cta">Register</a>
                            </div>
                        </div>
                    </div>
                    <div className="event__card">
                        <div className="event__box">
                            <div className="event__picture">
                                <img src={Dance} alt="Dance"/>
                            </div>
                            <div className="event__detail">
                                <p className="event__title">Dance: Fitness Dance Lessons in Niyama</p>
                                <p className="event__date">15 / 03 / 2018 <br /> 6:00 am - 8:00 pm</p>
                                <a href="/index" className="event__cta">Register</a>
                            </div>
                        </div>
                    </div>
                    <div className="event__card">
                        <div className="event__box">
                            <div className="event__picture">
                                <img src={Dance} alt="Dance"/>
                            </div>
                            <div className="event__detail">
                                <p className="event__title">Dance: Fitness Dance Lessons in Niyama</p>
                                <p className="event__date">15 / 03 / 2018 <br /> 6:00 am - 8:00 pm</p>
                                <a href="/index" className="event__cta">Register</a>
                            </div>
                        </div>
                    </div>
                    <div className="event__card">
                        <div className="event__box">
                            <div className="event__picture">
                                <img src={Dance} alt="Dance"/>
                            </div>
                            <div className="event__detail">
                                <p className="event__title">Dance: Fitness Dance Lessons in Niyama</p>
                                <p className="event__date">15 / 03 / 2018 <br /> 6:00 am - 8:00 pm</p>
                                <a href="/index" className="event__cta">Register</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Event
