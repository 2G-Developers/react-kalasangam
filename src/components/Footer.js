import React from 'react'
import {ImFacebook, ImYoutube} from 'react-icons/im'
import {GrInstagram} from 'react-icons/gr'

const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="container">
                <div className="row" style={{justifyContent: "center"}}>
                    <div className="footer__medium">
                        <div className="footer__wrapper">
                            <span className="footer__text">© 2021 StudioKalaSangam. All rights reserved.</span>

                            <ul className="footer__nav">
                                <li className="footer__item footer__item--icon">
                                    <a href="https://youtube.com/c/StudioKalaSangam" target="_blank" rel="noreferrer" className="footer__link">
                                        <ImYoutube color="#fff" />
                                    </a>
                                </li>
                                <li className="footer__item footer__item--icon">
                                    <a href="https://www.instagram.com/studiokalasangam/" target="_blank" rel="noreferrer" className="footer__link">
                                        <GrInstagram width="1rem" height="1rem" color="#fff" />
                                    </a>
                                </li>
                                <li className="footer__item footer__item--icon">
                                    <a href="https://www.facebook.com/StudioKalaSangamDanceGroup" target="_blank" rel="noreferrer" className="footer__link">
                                        <ImFacebook width="1rem" height="1rem" color="#fff" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
