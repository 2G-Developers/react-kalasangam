import React, {useState, useEffect} from 'react'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Page from '../components/Page'
import {AboutPageData} from '../data/AboutPageData'
import '../styles/main.scss'

const About = () => {
    const [autoScroll, setAutoScroll] = useState(false)

    useEffect(() => {
        setAutoScroll(true)
        return () => {
            setAutoScroll(false)
        }
    }, [])

    return (
        <main>
            <title>About StudioKalaSangam</title>
            <Navbar />
            <Page autoScroll={autoScroll} data={AboutPageData} />
            <Contact />
            <Footer />
        </main>
    )
}

export default About
