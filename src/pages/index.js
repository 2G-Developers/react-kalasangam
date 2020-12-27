import React, {useEffect} from "react"
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
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// markup
const IndexPage = () => {
  const Animate = React.createRef()
  useEffect(() => {
    // about
    gsap.from('.about__animate', {
        scrollTrigger: '.about__animate',
        duration: 0.5,
        opacity: 1,
        x: -150,
        stagger: 0.12
    })

    gsap.from('.about__animate-img', {
        scrollTrigger: '.about__animate',
        duration: 1.2,
        opacity: 0,
        x: -200
    })

    // founder

    gsap.from('.founder__animate', {
      scrollTrigger: '.founder__animate',
      duration: 1.2,
      opacity: 0,
      y: -150,
      stagger: 0.3,
      delay: 0.12
    })

    gsap.from('.founder__animate-img', {
      scrollTrigger: '.founder__animate',
      duration: 1.2,
      opacity: 0,
      y: -150,
      stagger: 0.1,
      delay: 0.2
    })

    // team

    gsap.from('.team__animate', {
      scrollTrigger: '.team__animate',
      duration: 1.2,
      opacity: 0,
      y: -150,
      stagger: 0.3,
      delay: 0.12
    })

    gsap.from('.team__animate-card', {
      scrollTrigger: '.team__animate',
      duration: 1.2,
      opacity: 0,
      y: -150,
      stagger: 0.1,
      delay: 0.2
    })

    // gallery

    gsap.from('.gallery__animate', {
      scrollTrigger: '.gallery__animate',
      duration: 1,
      opacity: 0,
      x: -200,
      stagger: 0.2,
      delay: 0.8
    })

    gsap.from('.gallery__animate-img', {
      scrollTrigger: '.gallery__animate',
      duration: .8,
      opacity: 0,
      x: -200,
      stagger: 0.1,
      delay: 0.8
    })
  }, [Animate])

  return (
    <main>
      <title>Home Page</title>
      {/* <Navbar /> */}
      <Banner slides={Sliderdata} />
      <About />
      <Founder />
      <Team teams={TeamData} />
      <Gallery gallery={GalleryData} />
      <Event />
      <Contact />
      <Footer />
    </main>
  )
}

export default IndexPage
