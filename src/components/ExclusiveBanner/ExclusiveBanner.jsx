import React from 'react'
import exclusiveImage from '../assets/exclusive_image.png'
function ExclusiveBanner() {
  return (
    <div className='flex h-screen'>
        <div className='flex bg-gradient-to-t from-white to-pink-200 p-10'>
            <div>
                <h1>Exclusive Offers, Only For You Babe</h1>
                <p>Authentic Products Only</p>
                <button>check It Out</button>
            </div>
            <div>
                <img src={exclusiveImage} alt="Exclusive Banner Image"/>
            </div>
        </div>
    </div>
  )
}

export default ExclusiveBanner