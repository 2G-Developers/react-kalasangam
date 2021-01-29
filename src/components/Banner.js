import React, {useRef, useState} from 'react'
import Slider from "react-slick";
// import {IoMdArrowForward} from 'react-icons/io';
import {IoArrowBack, IoArrowForward} from 'react-icons/io5';
import {FiZapOff, FiZap} from 'react-icons/fi'
import { Link } from 'gatsby';

const Banner = ({slides}) => {
    const [lightActive, setLightActive] = useState(true)

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        draggable: false,
        fade: true
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
                    <div className="dancing">
                        <div className="dancing__letter dancing__letter--first"><span className="dancing__hand--left"></span>S<span className="dancing__hand--right"></span></div>
                        <div className="dancing__letter dancing__letter--second"><span className="dancing__hand--left"></span>T<span className="dancing__hand--right"></span></div>
                        <div className="dancing__letter dancing__letter--third"><span className="dancing__hand--left"></span>U<span className="dancing__hand--right"></span></div>
                        <div className="dancing__letter dancing__letter--fourth"><span className="dancing__hand--left"></span>D<span className="dancing__hand--right"></span></div>
                        <div className="dancing__letter dancing__letter--first"><span className="dancing__hand--left"></span>I</div>
                        <div className="dancing__letter dancing__letter--second"><span className="dancing__hand--left"></span>O<span className="dancing__hand--right"></span></div>
                        <br/>
                        <div className="dancing__letter dancing__letter--third"><span className="dancing__hand--left"></span>K<span className="dancing__hand--right"></span></div>
                        <div className="dancing__letter dancing__letter--fourth"><span className="dancing__hand--left"></span>A<span className="dancing__hand--right"></span></div>
                        <div className="dancing__letter dancing__letter--first"><span className="dancing__hand--left"></span>L</div>
                        <div className="dancing__letter dancing__letter--second"><span className="dancing__hand--left"></span>A<span className="dancing__hand--right"></span></div>
                        <div className="dancing__letter dancing__letter--third"><span className="dancing__hand--left"></span>S<span className="dancing__hand--right"></span></div>
                        <div className="dancing__letter dancing__letter--fourth"><span className="dancing__hand--left"></span>A<span className="dancing__hand--right"></span></div>
                        <div className="dancing__letter dancing__letter--first"><span className="dancing__hand--left"></span>N<span className="dancing__hand--right"></span></div>
                        <div className="dancing__letter dancing__letter--second"><span className="dancing__hand--left"></span>G<span className="dancing__hand--right"></span></div>
                        <div className="dancing__letter dancing__letter--third"><span className="dancing__hand--left"></span>A<span className="dancing__hand--right"></span></div>
                        <div className="dancing__letter dancing__letter--fourth"><span className="dancing__hand--left"></span>M<span className="dancing__hand--right"></span></div>
                        <br/>
                        <Link to="/contact" className="banner__button">Get in touch</Link>
                    </div>
                    {lightActive ?<div className="banner__disco"></div>: null}
                </div>

                <div className="banner__navigation">
                    <IoArrowBack className="banner__back" onClick={prevSlide} />
                    <IoArrowForward className="banner__forward" onClick={nextSlide} />
                </div>

                <div className="banner__control">
                {!lightActive ? <button className="banner__forward--button" onClick={() => setLightActive(prevState => !prevState)}><FiZapOff className="banner__forward--light" color="#fff" /></button> : <button className="banner__forward--button" onClick={() => setLightActive(prevState => !prevState)}><FiZap className="banner__forward--light" color="#fff" /></button>}
                </div>
            </div>
        </section>
    )
}

export default Banner
