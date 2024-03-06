import React from 'react'
import arrow from '../assets/arrow.png'
import hero from '../assets/hero_image.png'
function Hero() {
  return (
    <div className='h-screen  bg-gradient-to-t from-white to-red-500 sm:flex'>
      <div className='flex flex-col md:w-1/2'>
        <div className='md:ml-36 h-screen md:pt-[20vh] pt-[35vh] md:text-left text-center'>
          <p className='text-2xl'>New Items Are Here</p>
          <h2 className='sm:text-8xl text-4xl'>New Collections For Everyone</h2>
          <button className='mt-10 text-xl border px-8 py-[8px] bg-yellow-500 rounded-3xl hover:bg-yellow-400'>Latest Collection</button>
        </div>
      </div>

      <div className='p-14 h-screen md:block md:flex hidden'>
        <img src={hero} alt="hero image"/>
      </div>
    </div>
  )
}

export default Hero