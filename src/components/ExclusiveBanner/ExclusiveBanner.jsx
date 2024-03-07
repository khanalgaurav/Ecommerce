import React from 'react'
import exclusiveImage from '../assets/exclusive_image.png'
function ExclusiveBanner() {
  return (
    <div className='mt-20 md:flex h-fit w-fit rounded-xl bg-gradient-to-l from-white to-pink-200 md:mx-32 mb-10'>
        <div className='md:flex md:flex-row flex flex-col  px-10 pt-10 pb-5'>
            <div className='h-[50vh] overflow-hidden border-b border-red-600'>
              <img src={exclusiveImage} alt="Exclusive Banner Image"/>
            </div>
            <div>
              <h1 className='text-7xl'>Exclusive Offers, Only For You Babe</h1>
              <p className='text-4xl'>Authentic Products Only</p>
              <button className='mt-10 text-xl border px-8 py-[8px] bg-yellow-500 rounded-3xl hover:bg-yellow-400'>check It Out</button>
            </div>
            
        </div>
    </div>
  )
}

export default ExclusiveBanner