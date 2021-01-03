import React, {useState} from 'react'
import {Link} from 'gatsby'
// import Logo from '../images/logo-thumb.webp'
// import { menuData } from '../data/MenuData'
// import {FaBars} from 'react-icons/fa'
// import {RiCloseLine} from 'react-icons/ri'

const Navbar = () => {
    const [navbar, setNavbar] = useState(false)

    return (
        <nav className="nav">
            <div className="nav__logo">
                <img src="https://res.cloudinary.com/gopal1996/image/upload/v1609703905/studioKalasangam/logo-thumb_zbchbw.webp" width="140px" height="auto" alt="StudioKalasangam"/>
            </div>

            <ul className={navbar ? "nav__list nav__list--active": "nav__list"}>
                <li className="nav__item"><Link to="/" className="nav__link">Home</Link></li>
                <li className="nav__item"><Link to="/about" className="nav__link">About</Link></li>
                <li className="nav__item"><Link to="/founder" className="nav__link">Founder</Link></li>
                <li className="nav__item"><Link to="/gallery" className="nav__link">Gallery</Link></li>
            </ul>

            <button className="nav__hamburger" onClick={() => setNavbar(prevState => !prevState)}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    )
}

export default Navbar
