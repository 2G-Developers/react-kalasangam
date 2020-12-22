import * as React from "react"
import About from "../components/About"
import Banner from "../components/Banner"
import Founder from "../components/Founder"
import Navbar from "../components/Navbar"
import Team from '../components/Team'
import { Sliderdata } from "../data/SliderData"
import { GalleryData } from "../data/GalleryData"
import '../styles/main.scss'
import Gallery from "../components/Gallery"

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <Navbar />
      <Banner slides={Sliderdata} />
      <About />
      <Founder />
      <Team />
      <Gallery gallery={GalleryData} />
    </main>
  )
}

export default IndexPage
