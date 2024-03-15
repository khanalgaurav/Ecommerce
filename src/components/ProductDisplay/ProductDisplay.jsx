import React from 'react'

function ProductDisplay({image}) {
  return (
    <div className='flex border border-red-600 mx-32'>
        <div className="flex gap-3 border border-red-500">
            <div className='w-[100px] gap-3 flex flex-col border border-blue-600'>
                <img src={image} alt="Product preview image" />
                <img src={image} alt="Product preview image" />
                <img src={image} alt="Product preview image" />
                <img src={image} alt="Product preview image" />
            </div>
            <div className='w-[425px] border border-green-600'>
                <img className='w-full' src={image} alt="product image" />
            </div>
        </div>
        <div className="">

        </div>
    </div>
  )
}

export default ProductDisplay