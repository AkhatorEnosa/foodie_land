import React from 'react'
import Slider from './Slider'

// Hero section of the website
const Hero = () => {
  return (
    <section className='slider w-full h-auto flex items-center snap-x snap-mandatory gap-10 mb-[162px] mt-20 lg:mt-0 overflow-scroll'>
        <Slider />
        <Slider />
        <Slider />
    </section>
  )
}

export default Hero