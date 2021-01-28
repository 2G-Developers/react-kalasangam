import React from 'react'

import TeamImage from '../images/2.jpg'
import Fade from 'react-reveal/Fade';

const FullGallery = ({data}) => {
    return (
        <section className="fullgallery">
            <div className="page__img-wrapper">
                <img src={TeamImage} alt="team" className="page__image" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="fullgallery__wrapper">
                        {
                            data.gallery.map((gallery, index) => (
                                <Fade bottom duration={1200} key={index}>
                                    <img className="fullgallery__image" src={gallery.image} alt={gallery.alt} />
                                </Fade>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FullGallery
