import React, {useState, useEffect} from 'react'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import FullGallery from '../components/FullGallery'
import Navbar from '../components/Navbar'
import '../styles/main.scss'

import {GalleryData} from '../data/GalleryData'

const Gallery = () => {
    const [autoScroll, setAutoScroll] = useState(false)

    useEffect(() => {
        setAutoScroll(true)
        return () => {
            setAutoScroll(false)
        }
    }, [])

    return (
        <main>
            <title>Gallery</title>
            <Navbar />
            <FullGallery autoScroll={autoScroll} data={GalleryData} />
            <Contact />
            <Footer />
        </main>
    )
}

export default Gallery
