import React from 'react'
import Fade from 'react-reveal/Fade';


const Page = ({data}) => {
    return (
        <section className="page">
            <div className="page__img-wrapper">
                <img src={data.image} alt={data.alt} className="page__image" />
            </div>

            <div className="container">
                <div className="row">
                    <div className="page__content">
                        <Fade top duration={1200} delay={600}>
                            <h2 className="page__heading">About <br/> {data.heading}</h2>
                        </Fade>
                        {
                            data.paragraph.map((para, index) => (
                                <React.Fragment key={index}>
                                    <Fade right duration={1500} delay={800}>
                                        <p className="page__paragraph">
                                            {para}
                                        </p>
                                    </Fade>
                                </React.Fragment>
                                
                            ))
                        }
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Page
