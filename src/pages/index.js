import React from "react"
import About from "../components/About"
import Banner from "../components/Banner"
import Founder from "../components/Founder"
import Navbar from "../components/Navbar"
import Team from '../components/Team'
import Gallery from "../components/Gallery"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Event from "../components/Event"
import Videos from "../components/Videos"
import ErrorBoundary from "../components/ErrorBoundary"

import '../styles/main.scss'

// Data
import { Sliderdata } from "../data/SliderData"
import { GalleryData } from "../data/GalleryData"
import { TeamData } from "../data/TeamData"
import { AboutPageData } from '../data/AboutPageData'
import { FounderPageData } from '../data/FounderPageData'
import { VideosData } from '../data/VideosData'
import { EventData } from '../data/EventData'

// markup
const IndexPage = () => {

  return (
    <ErrorBoundary>
      <main>
        <title>Home Page</title>
        <Navbar />
        <Banner slides={Sliderdata} />
        <About data={AboutPageData} />
        <Founder data={FounderPageData} />
        <Team data={TeamData} />
        <Gallery data={GalleryData} />
        <Videos data={VideosData} />
        <Event data={EventData} />
        <Contact />
        <Footer />
      </main>
    </ErrorBoundary>
  )
}

export default IndexPage
