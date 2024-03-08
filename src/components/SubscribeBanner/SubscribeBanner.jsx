import React from 'react'

function SubscribeBanner() {
  return (
    <div className="mt-20 md:flex justify-center h-fit md:w-full w-screen mb-10">
        <div className='h-fit w-full rounded-xl bg-gradient-to-r from-white to-red-200 mx-32 py-20 text-center  flex flex-col items-center justify-center'>
            <h1 className='md:text-5xl text-4xl'>Get Exclusive Offers In Your Email</h1>
            <p className='text-xl mb-5'>Subscribe To Us and Stay Updated</p>
            <form action="" className='border border-black rounded-3xl w-fit '>
                <input className='md:w-80 w-60 text-sm bg-transparent outline-none px-4' type="email" placeholder='Your Email Id' />
                <button className='rounded-3xl px-4 py-2 bg-red-600 hover:bg-red-500'>Subscribe</button>
            </form>
        </div>
    </div>
  )
}

export default SubscribeBanner