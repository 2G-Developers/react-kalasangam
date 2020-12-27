import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'
import Slider from "react-slick";

const Team = ({teams, dark}) => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        fade: false,
        arrows: false,
        speed: 1500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    infinite: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    infinite: true
                }
            },
            {
            breakpoint: 480,
            settings: {
                    slidesToShow: 1,
                    infinite: true
                }
            }
        ]
    };

    return (
        <section className={dark ? 'team team--dark': 'team'}>
            <div className="container">
                <div className="gallery__heading-wrapper">
                    <div className="gallery__heading team__animate">
                        <h1>Team</h1>
                    </div>
                    <div className="gallery__sub-heading team__animate">
                        <h3>Meet our awesome team</h3>
                    </div>
                </div>
                <div className="row">
                    <Slider {...settings}>
                        {
                            teams.map((team, index) => (
                                <div className="team__card team__animate-card" key={index}>
                                    <div className="team__profile">
                                        <img className="team__image" src={team.image} alt={team.name} />

                                        <div className="team__overlay">
                                            <div className="team__icon">
                                                <a href={team.facebook} className="team__link" aria-label="social media"><FaFacebookF /></a>
                                                <a href={team.instagram} className="team__link" aria-label="social media"><GrInstagram /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team__box">
                                        <h3>{team.name}</h3>
                                        <p>{team.position}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Team
