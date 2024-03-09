import React from 'react'

function BannerCategory({img}) {
  return (
    <div className=" flex md:flex-nowrap flex-wrap-reverse w-screen bg-gradient-to-b from-yellow-200 to-white px-10 py-5 rounded-xl">
        <div className='w-2/3'>
          <h1 className='md:text-7xl text-3xl text-red-500 font-bold'>FLAT 50% OFF</h1>
          <p className='md:text-4xl text-2xl text-red-500 font-bold'>12 <span className='text-black'>Hours</span> 20 <span className='text-black'>Mins</span></p>
          <button className='mt-5 text-white rounded-[35px] px-8 py-2 bg-red-500'>Explore Now</button>
        </div>
        <div className=' h-52 md:w-1/3 w-screen flex justify-center'>
            <img className=' border-b-black' src={img} alt="banner category image" />
        </div>
      </div>
  )
}

export default BannerCategory