import React from 'react'
import ReactPlayer from 'react-player/youtube'
import Slider from "react-slick";
import Fade from 'react-reveal/Fade';

const Videos = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: false,
        speed: 1500
    };

    return (
        <section className="videos-showcase">
            <div className="container">
                <div className="gallery__heading-wrapper">
                        <div className="gallery__heading gallery__animate">
                            <h1>Videos</h1>
                        </div>
                        <div className="gallery__sub-heading gallery__animate">
                            <h3>What better way to introduce ourselves than to let our work do the talking.</h3>
                        </div>
                    </div>
                <div className="row" style={{justifyContent: "center"}}>
                    <Slider {...settings}>
                        <Fade left duration={1000} delay={800}>
                            <div className="videos-showcase__card">
                                <ReactPlayer url="https://www.youtube.com/watch?v=RUJkzAm1XTg" className="videos-showcase__youtube" controls={true} width="100%" />
                            </div>
                        </Fade>

                        <Fade left duration={1000} delay={800}>
                            <div className="videos-showcase__card">
                                <ReactPlayer url="https://www.youtube.com/watch?v=ZV57c096K7o" className="videos-showcase__youtube" controls={true} width="100%" />
                            </div>
                        </Fade>

                        <Fade left duration={1000} delay={800}>
                            <div className="videos-showcase__card">
                                <ReactPlayer url="https://www.youtube.com/watch?v=jsyj-bwGlDg" className="videos-showcase__youtube" controls={true} width="100%" />
                            </div>
                        </Fade>
                    </Slider>
                </div>
                    <div className="founder__cta" style={{paddingTop: "2.5rem"}}>
                        <a href="https://www.youtube.com/" className="founder__button gallery__animate" target="_blank" rel="noreferrer">Watch More on Youtube</a>
                    </div>
            </div>
        </section>
    )
}

export default Videos
