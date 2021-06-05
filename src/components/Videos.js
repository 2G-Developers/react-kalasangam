import React from 'react'
import ReactPlayer from 'react-player/lazy'
import Slider from "react-slick";

const Videos = ({data}) => {
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
            {/* <div className="container"> */}
                <div className="gallery__heading-wrapper">
                        {/* <div className="gallery__heading gallery__animate">
                            <h1>{data.heading}</h1>
                        </div> */}
                        {/* <div className="gallery__sub-heading gallery__animate">
                            <h3>{data.subHeading}</h3>
                        </div> */}
                    </div>
                <div className="row" style={{justifyContent: "center"}}>
                    <Slider {...settings}>
                        {
                            data.url.map((item, index) => (
                                <React.Fragment key={index}>
                                    <div className="videos-showcase__card">
                                        <ReactPlayer light={true} playing={true} onError={(err) => console.log(err)} url={item} className="videos-showcase__youtube" controls={true} width="100%" />
                                    </div>
                                </React.Fragment>
                            ))
                        }
                        
                    </Slider>
                </div>
                    <div className="founder__cta" style={{paddingTop: "2.5rem"}}>
                        <a href="https://www.youtube.com/channel/UC-fMpIJOmNPJNPh_FZeWUWQ" className="founder__button gallery__animate" target="_blank" rel="noreferrer">Watch More on Youtube</a>
                    </div>
            {/* </div> */}
        </section>
    )
}

export default Videos
