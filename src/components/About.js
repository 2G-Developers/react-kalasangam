import React, {useEffect} from 'react'
import TeamImage from '../images/7-edit.jpg'
import {Link} from 'gatsby'
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
    // const Animate = React.createRef()
    useEffect(() => {
        gsap.from('.about__animate', {
            scrollTrigger: '.about__animate',
            duration: 0.5,
            opacity: 1,
            x: -150,
            stagger: 0.12
        })

        gsap.from('.about__animate-img', {
            scrollTrigger: '.about__animate',
            duration: 1.2,
            opacity: 0,
            x: -200
        })
    }, [])

    return (
        <section className="about">
            <div className="container">
                <div className="row">
                    <div className="about__wrapper">
                        <div className="about__content">
                            <div className="about__heading desktop about__animate">
                                <h1>About KalasangamAG</h1>
                            </div>

                            <p className="about__paragraph about__animate">
                            StudioKalaSangam is a group of vivacious individuals from Germany bonded closely together by their common love for dancing. The group spearheaded by Anushree Gour started making its presence felt in 2017. Since its inception, the team has now grown into a group consisting of enthusiastic talented dancers and choreographers. The team has been encouraged and provided with many amazing opportunities from the onset. 
                            </p>
                            {/* It takes pride in saying that these opportunities resulted in being fruitful and helped us win the hearts of many audiences throughout, which made the journey exceptional.
Starting from stage performances for live audiences to conducting workshops, online dance classes, organising dance flash mobs and much more. The team has never looked back and it's taking a step towards being more successful everyday. */}
                            <div className="about__cta about__animate">
                                <Link to="/" className="about__button">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="about__wrapper about__order">
                        <div className="about__heading mobile about__animate">
                            <h1>About KalasangamAG</h1>
                        </div>
                        <div className="about__figure">
                            <img src={TeamImage} alt="Team" className="about__image about__animate-img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
