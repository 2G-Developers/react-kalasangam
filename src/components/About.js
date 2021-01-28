import React from 'react'
import {Link} from 'gatsby'
import Fade from 'react-reveal/Fade';

const About = ({dark, data}) => {
    

    return (
        <section className={dark ? 'about about--dark': 'about'}>
            <div className="container">
                <div className="row">
                    <div className="about__wrapper">
                        <div className="about__content">
                            <Fade top duration={1000}>
                                <div className="about__heading desktop about__animate">
                                    <h1>{data.heading}</h1>
                                </div>
                            </Fade>
                            <Fade left duration={1000}>
                                <p className="about__paragraph about__animate">
                                    {data.shortDescription}
                                </p>
                                
                                <div className="about__cta about__animate">
                                    <Link to="/about" className="about__button">Read More</Link>
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <div className="about__wrapper about__order">
                        <div className="about__heading mobile about__animate">
                            <h1>{data.heading}</h1>
                        </div>
                        <Fade right duration={1500}>
                            <div className="about__figure">
                                <img src={data.image} alt={data.alt} className="about__image about__animate-img" />
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
