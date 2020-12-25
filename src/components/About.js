import React from 'react'
import TeamImage from '../images/7-edit.jpg'
import {Link} from 'gatsby'

const About = () => {
    return (
        <section className="about">
            <div className="container">
                <div className="row">
                    <div className="about__wrapper">
                        <div className="about__content">
                            <div className="about__heading desktop">
                                <h1>About KalasangamAG</h1>
                            </div>

                            <p className="about__paragraph">
                            StudioKalasangamAG is a group of vivacious individuals from Erlangen, Germany bonded closely together by their common love for dancing. The group spearheaded by Anushree Gour started making its presence felt in 2017. Three years since its inception, we have now grown to a dream team consisting of dancers, choreographers and editors. We started spreading our wings by performing in cities close to Erlangen and gradually moving on to setting footprints all across Germany.
                            </p>

                            <div className="about__cta">
                                <Link to="/" className="about__button">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="about__wrapper about__order">
                        <div className="about__heading mobile">
                            <h1>About KalasangamAG</h1>
                        </div>
                        <div className="about__figure">
                            <img src={TeamImage} alt="Team" className="about__image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
