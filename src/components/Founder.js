import React from 'react'
import {Link} from 'gatsby'
import FounderImage from '../images/founder.jpg'


const Founder = ({dark}) => {

    return (
        <section className={dark ? 'founder founder--dark': 'founder'}>
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
With having more than 15 yrs of experience in dancing and choreography, i have now reached a point where i established my own dance studio in germany. My journey has been a rollercoaster from the start but ever since my talented team joined me, together we have been able to persevere the growth of StudioKalaSangam and achieved greater heights.
                            </p>
                            <p className="founder__paragraph founder__animate">
                            As a professional choreographer I have been challenging myself with every performance and dreaming bigger which is boosting my confidence and also the trust of our audience towards my work.
                            </p>

                            <div className="founder__cta founder__animate">
                                <Link to="/founder" className="founder__button">Read More</Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Founder
