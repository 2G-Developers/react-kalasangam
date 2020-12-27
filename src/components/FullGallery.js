import React from 'react'
import {GalleryData} from '../data/GalleryData'
import TeamImage from '../images/2.jpg'

const FullGallery = () => {
    return (
        <section className="fullgallery">
            <div className="page__img-wrapper">
                <img src={TeamImage} alt="team" className="page__image" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="fullgallery__wrapper">
                        {
                            GalleryData.map((gallery, index) => (
                                <img className="fullgallery__image" src={gallery.image} alt={gallery.alt} key={index} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FullGallery
