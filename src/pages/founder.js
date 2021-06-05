import React from 'react'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Page from '../components/Page'
import {FounderPageData} from '../data/FounderPageData'
import '../styles/main.scss'

const Founder = () => {
    return (
        <main>
            <title>About StudioKalaSangam</title>
            <Navbar />
            <Page data={FounderPageData} />
            <Contact />
            <Footer />
        </main>
    )
}

export default Founder
