import React from 'react'
import {Link} from 'gatsby'
import Fade from 'react-reveal/Fade';


const Founder = ({data, dark}) => {

    return (
        <section className={dark ? 'founder founder--dark': 'founder'}>
            <div className="container">
                <div className="row">
                    <div className="founder__wrapper">
                        <Fade top duration={1000}>
                            <div className="founder__heading mobile founder__animate">
                                <h1>Anushree Gour</h1>
                            </div>
                        </Fade>
                        <Fade left duration={1000}>
                            <div className="founder__figure founder__animate-img" style={{backgroundImage: `url(${data.image})`}}>
                                {/* <img src={FounderImage} alt="Founder" className="founder__image" /> */}
                            </div>
                        </Fade>
                    </div>

                    <div className="founder__wrapper">
                        <div className="founder__content">
                            <Fade top duration={1000}>
                                <div className="founder__heading desktop founder__animate">
                                    <h1>Anushree Gour</h1>
                                </div>
                            </Fade>
                            {
                                data.shortDescription.map((description, index) => (
                                    <React.Fragment key={index}>
                                        <Fade right duration={1200}>
                                            <p className="founder__paragraph founder__animate">
                                            {description}
                                            </p>
                                        </Fade>
                                    </React.Fragment>
                                ))
                            }
                            
                            <Fade right duration={1200}>
                                <div className="founder__cta founder__animate">
                                    <Link to="/founder" className="founder__button">Read More</Link>
                                </div>
                            </Fade>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Founder
