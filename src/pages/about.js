import React from 'react'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Page from '../components/Page'
import {AboutPageData} from '../data/AboutPageData'
import '../styles/main.scss'

const about = () => {
    return (
        <main>
            <title>About StudioKalaSangam</title>
            <Page data={AboutPageData} />
            <Contact />
            <Footer />
        </main>
    )
}

export default about
