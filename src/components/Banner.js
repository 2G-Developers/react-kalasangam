import React, {useRef} from 'react'
import Slider from "react-slick";
// import {IoMdArrowForward} from 'react-icons/io';
import {IoArrowBack, IoArrowForward} from 'react-icons/io5';

const Banner = ({slides}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        draggable: false,
        fade: true,
    };

    const slider = useRef();

    const nextSlide = function() {
        slider.current.slickNext()
    }

    const prevSlide = () => {
        slider.current.slickPrev()
    }

    return (
        <section className="banner">
            <div className="banner__wrapper">
                <div className="banner__slide">
                    <Slider ref={c => (slider.current = c)} {...settings}>
                        {slides.map((slide, index) => (
                            <div className="banner__slider" key={index}>
                                <img src={slide.image} alt={slide.alt} className="banner__image"/>
                            </div>
                        ))}
                    </Slider>
                </div>

                <div className="banner__navigation">
                    <IoArrowBack className="banner__back" onClick={prevSlide} />
                    <IoArrowForward className="banner__forward" onClick={nextSlide} />
                </div>
            </div>
        </section>
    )
}

export default Banner
