import React, {useState, useEffect} from 'react'
import {Link} from 'gatsby'
import { menuData } from '../data/MenuData'

const Navbar = () => {
    const [navbar, setNavbar] = useState(false)
    const [navbarBg, setNavbarBg] = useState(false)
    const [activeNav, setActiveNav] = useState('/')

    // const changeBackground = useRef(null)

    const changeBackground = () => {
        if(window.scrollY >= 100) {
            setNavbarBg(true)
        } else {
            setNavbarBg(false)
        }
    }

    // useEffect(() => {
    //     window.addEventListener('scroll', changeBackground.current)

    //     return () => {
    //         window.removeEventListener('scroll', changeBackground.current)
    //     }
    // }, [changeBackground])
    useEffect(() => {
        setActiveNav(window.location.pathname)
        window.addEventListener('scroll', changeBackground)

        return () => {
            window.removeEventListener('scroll', changeBackground)
        }
    }, [])


    return (
        <nav className="nav" style={{background: `${navbarBg ? '#fff': ''}`}}>
            <div className="nav__logo" style={{opacity: "0"}}>
                <img src="https://res.cloudinary.com/gopal1996/image/upload/v1609703905/studioKalasangam/logo-thumb_zbchbw.webp" width="140px" height="auto" alt="StudioKalasangam"/>
            </div>
            
            <ul className={navbar ? "nav__list nav__list--active": "nav__list"}>
                <img src="https://res.cloudinary.com/gopal1996/image/upload/v1613245825/studioKalasangam/6_1_ulz7as.png" className="nav__image nav__image--left" alt="Svg Dance" />
                {
                    menuData.map((data, index) => (
                        // eslint-disable-next-line
                        <li key={index} onClick={() => setNavbar(false)} onKeyPress={() => setNavbar(false)} className="nav-item"><Link to={data.link} className={activeNav === data.link ? 'nav__link nav__link--active': 'nav__link'} onClick={() => setActiveNav(data.link)}>{data.title}</Link></li>
                    ))
                }
                <img src="https://res.cloudinary.com/gopal1996/image/upload/v1613245295/studioKalasangam/7-edit-nav_dk3uqm.png" className="nav__image nav__image--right floating" alt="Svg Group Dance" />
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
