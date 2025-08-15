import React from 'react'
import { Button } from '../components/ui/button'
import glassesIcon from '../assets/glasses-icon.png' // small decorative image
import heroPerson from '../assets/hero-person.png' // hero image

const Hero = () => {
  return (
    <section className="bg-gray-100">
     
      {/* Hero Content */}
      <div className="flex flex-col-reverse md:flex-row items-center px-8 md:px-24 py-16 md:py-44 gap-12">
        {/* Left: Text */}
        <div className="flex-1">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900">
            A personalized eyewear shopping experience
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Virtual try-on and frame recommendation technology for online, in-store and omnichannel eyewear retailers.
          </p>
          <div className="flex gap-6">
            <Button className="bg-black text-white hover:bg-gray-800 px-6 py-3 text-lg">
              Get started
            </Button>
            <Button className="border border-gray-700 text-gray-700 hover:bg-gray-200 px-6 py-3 text-lg">
              See product demo
            </Button>
          </div>

          {/* Decorative */}
          <div className="mt-16 flex items-center gap-3">
            <img src={glassesIcon} alt="Glasses" className="w-10 h-10"/>
            <p className="text-gray-700 text-lg">No more wall of glasses.</p>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img src={heroPerson} alt="Hero" className="w-full max-w-lg rounded-lg"/>
        </div>
      </div>
    </section>
  )
}

export default Hero
