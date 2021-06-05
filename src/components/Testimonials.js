import { Link } from 'gatsby';
import React from 'react'

const Testimonials = ({data, isPage}) => {

    return (
        <section className="testimonials">
            <div className="gallery__heading-wrapper">
                <div className="gallery__heading gallery__animate">
                    <h1>Testimonials</h1>
                </div>
                
            </div>
            <div className="container">

                <div className="row ">
                    <div className="testimonials__row">
                        {
                            !isPage ? data.slice(0,3).map((item, index) => (
                                <React.Fragment key={index}>
                                    <div className="testimonials__box">
                                        <div className="testimonials__imgbox">
                                            <img src={item.image} alt="User"/>
                                        </div>
                                        <p>{item.content}</p>
                                        <h4>{item.name} <br /> <span>{item.role}</span></h4>
                                    </div>
                                </React.Fragment>
                            ))
                            :
                            data.map((item, index) => (
                                <React.Fragment key={index}>
                                    <div className="testimonials__box">
                                        <div className="testimonials__imgbox">
                                            <img src={item.image} alt="User"/>
                                        </div>
                                        <p>{item.content}</p>
                                        <h4>{item.name} <br /> <span>{item.role}</span></h4>
                                    </div>
                                </React.Fragment>
                            ))
                        }
                    </div>
                </div>

                {!isPage ? (
                        <div className="founder__cta">
                            <Link to="/testimonials" className="founder__button gallery__animate">View More</Link>
                        </div>
                        ) : null
                }
            </div>
        </section>
    )
}

export default Testimonials
