import React from 'react'
import TeamImage from '../images/7-edit.jpg'
import {Link} from 'gatsby'
// import { FaFacebookF } from 'react-icons/fa'
// import { GrInstagram } from 'react-icons/gr'

const About = ({dark}) => {
    

    return (
        <section className={dark ? 'about about--dark': 'about'}>
            <div className="container">
                <div className="row">
                    <div className="about__wrapper">
                        <div className="about__content">
                            <div className="about__heading desktop about__animate">
                                <h1>About StudioKalasangam</h1>
                            </div>

                            <p className="about__paragraph about__animate">
                            StudioKalaSangam is a group of vivacious individuals from Germany bonded closely together by their common love for dancing. The group spearheaded by Anushree Gour started making its presence felt in 2017. Since its inception, the team has now grown into a group consisting of enthusiastic talented dancers and choreographers. The team has been encouraged and provided with many amazing opportunities from the onset. 
                            </p>
                            
                            <div className="about__cta about__animate">
                                <Link to="/about" className="about__button">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="about__wrapper about__order">
                        <div className="about__heading mobile about__animate">
                            <h1>About KalasangamAG</h1>
                        </div>
                        <div className="about__figure">
                            <img src={TeamImage} alt="Team" className="about__image about__animate-img" />

                            {/* <div className="about__overlay">
                                <div className="about__icon">
                                    <a href="/" className="about__link" aria-label="social media"><FaFacebookF /></a>
                                    <a href="/" className="about__link" aria-label="social media"><GrInstagram /></a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
