import React from 'react'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/main.scss'

const contact = () => {
    return (
        <main>
            <title>Contact</title>
            <Navbar />
            <Contact />
            <Footer />
        </main>
    )
}

export default contact
