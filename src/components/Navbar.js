import React from 'react'
import {Link} from 'gatsby'
import { menuData } from '../data/MenuData'
import {FaBars} from 'react-icons/fa'

const Navbar = () => {
    return (
        <div className="nav">
            <Link to="/" className="nav__logo">Kalasangam</Link>
            <FaBars className="nav__hamburger"></FaBars>
            <div className="nav__navmenu">
                {menuData.map((item, index) => (
                    <Link className="nav__links" to={item.link} key={index}>
                        {item.title}
                    </Link>
                ))}
            </div>
            {/* <div className="nav__button-wrapper">
                <Link to="/contact" className="nav__button">Contact Us</Link>
            </div> */}
        </div>
    )
}

export default Navbar
