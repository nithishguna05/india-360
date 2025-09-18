import React from 'react'
import DestinationCarousel from '../sections/DestinationCarousel'

export default function Destinations(){
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Destinations</h2>
      <p className="text-center mb-6">Click a state to view more details.</p>
      <DestinationCarousel />
    </div>
  )
}
