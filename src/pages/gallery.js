import React from 'react'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import FullGallery from '../components/FullGallery'
import '../styles/main.scss'

const gallery = () => {
    return (
        <main>
            <title>Gallery</title>
            <FullGallery />
            <Contact />
            <Footer />
        </main>
    )
}

export default gallery
