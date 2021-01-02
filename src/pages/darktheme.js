import * as React from "react"
import About from "../components/About"
import Banner from "../components/Banner"
import Founder from "../components/Founder"
// import Navbar from "../components/Navbar"
import Team from '../components/Team'
import { Sliderdata } from "../data/SliderData"
import { GalleryData } from "../data/GalleryData"
import { TeamData } from "../data/TeamData"
import '../styles/main.scss'
import Gallery from "../components/Gallery"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Event from "../components/Event"

// markup
const DarkTheme = () => {
  
  return (
    <main>
      <title>Home Page</title>
      {/* <Navbar /> */}
      <Banner slides={Sliderdata} />
      <About dark={true} />
      <Founder dark={true} />
      <Team teams={TeamData} dark={true} />
      <Gallery gallery={GalleryData} dark={true} />
      <Event dark={true} />
      <Contact dark={true} />
      <Footer />
    </main>
  )
}

export default DarkTheme
