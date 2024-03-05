import React from 'react'
import arrow from '../assets/arrow.png'
import hero from '../assets/hero_image.png'
function Hero() {
  return (
    <div className='h-screen  bg-gradient-to-t from-white to-red-500 sm:flex'>
      <div className='flex flex-col border w-1/2'>
        <div className='border ml-36 h-screen pt-36'>
          <p className='text-2xl'>New Items Are Here</p>
          <h2 className='sm:text-8xl text-4xl'>New Collections For Everyone</h2>
          <button className='mt-10 text-xl border px-8 py-[2px] bg-yellow-500 rounded-3xl'>Latest Collection</button>
        </div>
      </div>

      <div className='flex justify-center w-fit p-14 h-screen'>
        <img src={hero} alt="hero image"/>
      </div>
    </div>
  )
}

export default Hero