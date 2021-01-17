import React, {useState} from 'react'
import {Link} from 'gatsby'
import { menuData } from '../data/MenuData'

const Navbar = () => {
    const [navbar, setNavbar] = useState(false)
    // const [navbarBg, setNavbarBg] = useState(false)
    const [activeNav, setActiveNav] = useState(window.location.pathname)

    // const changeBackground = useRef(null)

    // changeBackground.current = () => {
    //     if(window.scrollY >= 100) {
    //         setNavbarBg(true)
    //     } else {
    //         setNavbarBg(false)
    //     }
    // }

    // useEffect(() => {
    //     window.addEventListener('scroll', changeBackground.current)

    //     return () => {
    //         window.removeEventListener('scroll', changeBackground.current)
    //     }
    // }, [changeBackground])


    return (
        <nav className="nav">
            <div className="nav__logo">
                <img src="https://res.cloudinary.com/gopal1996/image/upload/v1609703905/studioKalasangam/logo-thumb_zbchbw.webp" width="140px" height="auto" alt="StudioKalasangam"/>
            </div>
            
            <ul className={navbar ? "nav__list nav__list--active": "nav__list"}>
                <img src="https://res.cloudinary.com/gopal1996/image/upload/v1610643082/studioKalasangam/svg-dance_xt4sbb.png" className="nav__image nav__image--left" alt="Svg Dance" />
                {
                    menuData.map((data, index) => (
                        <li key={index} className="nav-item"><Link to={data.link} className={activeNav === data.link ? 'nav__link nav__link--active': 'nav__link'} onClick={() => setActiveNav(data.link)}>{data.title}</Link></li>
                    ))
                }
                <img src="https://res.cloudinary.com/gopal1996/image/upload/v1610643082/studioKalasangam/svg-group-dance_fv5rk9.png" className="nav__image nav__image--right floating" alt="Svg Group Dance" />
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
