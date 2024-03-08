import React from 'react'
import PropTypes from 'prop-types'
import p2 from '../assets/product_2.png'
function ItemCard({image,id,new_price,old_price,name}) {
  return (
    <div>
        <div className='border rounded-xl overflow-hidden border-slate-600 w-[300px] pb-1'>
            <img className='' src={image} alt={id} />
            <p className='text-base mt-2 pl-3'>{name}</p>
            <div className='flex gap-5 align-middle items-center mt-2 p-3 '>
                <p className='text-lg font-bold'>${new_price}</p>
                <p className='text-lg text-gray-500 line-through'>${old_price}</p>
            </div>
        </div>

    </div>
  )
}
ItemCard.defaultProps={
    image :p2,
    name: 'Default Product in Display',
    new_price: '100',
    old_price: '200'
}

export default ItemCard