import React from 'react';
import Slider from "react-slick";
import {Link} from 'gatsby'

const Gallery = ({gallery}) => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        fade: true,
        arrows: false,
        speed: 1500,
    };

    const settings2 = {...settings, speed: 1300}
    const settings3 = {...settings, speed: 1700}

    const potraitSlide = gallery.filter(slide => slide.type === 'potrait')
    const landscapeSlide = gallery.filter(slide => slide.type === 'landscape')

    const potraitOne = potraitSlide.slice(0,3)
    const potraitTwo = potraitSlide.slice(3,5)
    const potraitThree = potraitSlide.slice(5)

    const landscapeOne = landscapeSlide.slice(0,3)
    const landscapeTwo = landscapeSlide.slice(3,5)
    const landscapeThree = landscapeSlide.slice(5)

    return (
        <section className="gallery">
            <div className="container">
                <div className="gallery__heading-wrapper">
                    <div className="gallery__heading">
                        <h1>Gallery</h1>
                    </div>
                    <div className="gallery__sub-heading">
                        <h3>They say a picture speaks a thousand words.</h3>
                        <h3>Take a scroll through our memory lane.</h3>
                    </div>
                </div>
                <div className="row gallery__row">
                    <div className="gallery__wrapper">
                        <Slider {...settings}>
                            {
                                potraitOne.map((slide, index) => (
                                    <div key={index}>
                                        <div className="gallery__potrait" style={{backgroundImage: `url(${slide.image})`, margin: "0.9375rem 0"}}></div>
                                    </div>
                                ))
                            }
                        </Slider>

                        <Slider {...settings2}>
                            {
                                landscapeOne.map((slide, index) => (
                                    <div key={index}>
                                        <div className="gallery__landscape" style={{backgroundImage: `url(${slide.image})`}}></div>
                                    </div>
                                ))
                            }
                        </Slider>
                        
                    </div>
                    <div className="gallery__wrapper">
                        <Slider {...settings3}>
                            {
                                landscapeTwo.map((slide, index) => (
                                    <div key={index}>
                                        <div className="gallery__landscape" style={{backgroundImage: `url(${slide.image})`, margin: "0.9375rem 0"}}></div>
                                    </div>
                                ))
                            }
                        </Slider>

                        <Slider {...settings2}>
                            {
                                potraitTwo.map((slide, index) => (
                                    <div key={index}>
                                        <div className="gallery__potrait" style={{backgroundImage: `url(${slide.image})`}}></div>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                    <div className="gallery__wrapper tablet-flex">
                        <Slider {...settings3}>
                            {
                                potraitThree.map((slide, index) => (
                                    <div key={index}>
                                        <div className="gallery__potrait" style={{backgroundImage: `url(${slide.image})`, margin: "0.9375rem 0"}}></div>
                                    </div>
                                ))
                            }
                        </Slider>

                        <Slider {...settings}>
                            {
                                landscapeThree.map((slide, index) => (
                                    <div key={index}>
                                        <div className="gallery__landscape" style={{backgroundImage: `url(${slide.image})`}}></div>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>

                    <div className="founder__cta">
                        <Link to="/" className="founder__button">View More</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gallery
