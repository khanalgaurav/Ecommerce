import React from 'react'
import new_collection from '../assets/new_collections'
import ItemCard from '../ItemCard/ItemCard'
function NewCollection() {
  return (
    <div className=' mt-20 pt-10'>
        <div className='w-screen text-center text-3xl'>
            <p>New Collections</p>
            <hr className='w-[200px] mt-3 relative left-[50%] translate-x-[-50%] bg-black h-1 rounded-3xl z-[-1]'></hr>
        </div>
        <div className='md:flex md:flex-row md:flex-wrap flex flex-col gap-5 justify-center items-center mt-10'>
            {new_collection.map((item,i)=>{
                const {id,name,image,new_price,old_price}=item;
                return <ItemCard name={name} id={id} key={i} image={image} new_price={new_price} old_price={old_price} />
            })}
        </div>
    </div>
  )
}

export default NewCollection