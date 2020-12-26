import React,{useEffect} from 'react'
import {Link} from 'gatsby'
import FounderImage from '../images/founder.jpg'
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)


const Founder = () => {

    useEffect(() => {
        gsap.from('.founder__animate', {
            scrollTrigger: '.founder__animate',
            duration: 1,
            opacity: 0,
            y: -150,
            stagger: 0.3,
            delay: 0.5
        })

        gsap.from('.founder__animate-img', {
            scrollTrigger: '.founder__animate',
            duration: 1,
            opacity: 0,
            y: -150,
            stagger: 0.1,
            delay: 0.2
        })
    }, [])

    return (
        <section className="founder">
            <div className="container">
                <div className="row">
                    <div className="founder__wrapper">
                        <div className="founder__heading mobile founder__animate">
                            <h1>Anushree Gour</h1>
                        </div>
                        <div className="founder__figure founder__animate-img" style={{backgroundImage: `url(${FounderImage})`}}>
                            {/* <img src={FounderImage} alt="Founder" className="founder__image" /> */}
                        </div>
                    </div>

                    <div className="founder__wrapper">
                        <div className="founder__content">
                            <div className="founder__heading desktop founder__animate">
                                <h1>Anushree Gour</h1>
                            </div>

                            <p className="founder__paragraph founder__animate">
                            I began dancing at a very young age and have been cherishing it since then!
With having more than 15 yrs of experience in dancing and choreography, i have now reached a point where i established my own dance studio in germany.

                            </p>
                            {/* My journey has been a rollercoaster from the start but ever since my talented team joined me, together we have been able to persevere the growth of StudioKalaSangam and achieved greater heights.
As a professional choreographer I have been challenging myself with every performance and dreaming bigger which is boosting my confidence and also the trust of our audience towards my work. */}
                            {/* <p className="founder__paragraph">
                            I use every opportunity to spread awareness about our rich and diverse Indian culture. I have the experience in choreographing different dance styles like semi-classical, bollywood, contemporary and Indian regional dance forms.
I have also utilized the opportunity of entertaining our German audience by choreographing on a fusion of german and bollywood songs.
I believe dance is like a long lasting journey and there is never an end to it. Everyday is an opportunity to explore and learn something new.

''From your sadness to your happiness, you can express all of these in your dance" - Anushree Gour

DEDICATE a DAY to DANCE!
                            </p> */}

                            <div className="founder__cta founder__animate">
                                <Link to="/" className="founder__button">Read More</Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Founder
