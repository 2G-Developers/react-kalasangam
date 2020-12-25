import React from 'react'
import {Link} from 'gatsby'
import FounderImage from '../images/6.jpg'

const Founder = () => {
    return (
        <section className="founder">
            <div className="container">
                <div className="row">
                    <div className="founder__wrapper">
                        <div className="founder__heading mobile">
                            <h1>Anushree Gour</h1>
                        </div>
                        <div className="founder__figure" style={{backgroundImage: `url(${FounderImage})`}}>
                            {/* <img src={FounderImage} alt="Founder" className="founder__image" /> */}
                        </div>
                    </div>

                    <div className="founder__wrapper">
                        <div className="founder__content">
                            <div className="founder__heading desktop">
                                <h1>Anushree Gour</h1>
                            </div>

                            <p className="founder__paragraph">
                            My dance journey began three decades ago in a small town in india, When I was a little girl with dreams, In the last 15 years, I'm working towards bringing that dream come true, as a dancer and as a choreographer.
                            </p>
                            <p className="founder__paragraph">
                            Three years ago, I started the dance group KalaSangamAG in Germany. With talented dancers not only from across India, I have organized dance flashmobs, workshops, and events and we have performed on some prestigious stages including state-organized events in several cities in Germany.
                            </p>

                            <div className="founder__cta">
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
