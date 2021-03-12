import React from 'react'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Testimonials from '../components/Testimonials'
import { testimonialsData } from '../data/TestimonialsData'

const testimonials = () => {
    return (
        <main>
            <title>Testimonials</title>
            <Navbar />
            <Testimonials data={testimonialsData} isPage={true} />
            <Contact />
            <Footer />
        </main>
    )
}

export default testimonials
