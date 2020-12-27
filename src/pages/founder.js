import React from 'react'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Page from '../components/Page'
import {FounderPageData} from '../data/FounderPageData'

const founder = () => {
    return (
        <main>
            <title>About StudioKalaSangam</title>
            <Page data={FounderPageData} />
            <Contact />
            <Footer />
        </main>
    )
}

export default founder
