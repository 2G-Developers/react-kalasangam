import React from 'react'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import FullGallery from '../components/FullGallery'
import Navbar from '../components/Navbar'
import '../styles/main.scss'

import {GalleryData} from '../data/GalleryData'

const gallery = () => {
    return (
        <main>
            <title>Gallery</title>
            <Navbar />
            <FullGallery data={GalleryData} />
            <Contact />
            <Footer />
        </main>
    )
}

export default gallery
