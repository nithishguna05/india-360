import React from 'react'
import HeroCarousel from '../sections/HeroCarousel'
import DestinationCarousel from '../sections/DestinationCarousel'
import Packages from './Tours'
import BookNow from './BookNow'
import About from './About'
import Gallery from './Gallery'
import Contact from './Contact'
import Services from './Services'

export default function Home(){
  return (
    <div>
      <HeroCarousel />
    
      <section id="dest" className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Destination</h2>
        <DestinationCarousel />
      </section>

      <section className="container mx-auto px-4 py-12">
        {/* <h2 className="text-3xl font-bold text-center mb-8">Package</h2> */}
        <Packages initialCount={6} />
      </section>

      <section id="dest" className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">BookNow</h2>
        <BookNow />
      </section>

      <section id="dest" className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
        <Gallery />
      </section>      

      <section id="dest" className="container mx-auto px-4 py-12">
        {/* <h2 className="text-3xl font-bold text-center mb-8">About Us</h2> */}
        <About />
      </section>

      <section id="dest" className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Services</h2>
        <Services />
      </section>


       <section id="dest" className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <Contact />
      </section>


      


      
    </div>
  )
}
