import React from 'react'
import data_product from '../assets/data'
import ItemCard from '../ItemCard/ItemCard'
function Popular() {
  return (
    <>
        <div className='h-screen md:flex justify-center flex-col'>
            <div className='w-screen text-center text-3xl'>
                <p>POPULAR IN Ha WEMEN</p>
                <div className='w-[200px] mt-3 relative left-[50%] translate-x-[-50%] bg-black h-1 rounded-3xl'></div>
            </div>
            
            <div className='md:flex md:flex-row flex flex-col gap-5 justify-center items-center mt-10'>
                {data_product.map((item,i)=>{
                    return (<ItemCard key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>);
                })}
            </div>
        </div>
    </>
  )
}

export default Popular