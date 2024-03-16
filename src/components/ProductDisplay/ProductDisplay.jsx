import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaStarHalfStroke } from "react-icons/fa6";

function ProductDisplay({image,name,oldprice,newprice}) {
  return (
    <div className='md:flex gap-5 md:mx-32 mx-6'>
        <div className="flex gap-3">
            <div className='md:w-[100px] w-[80px] gap-3 flex flex-col'>
                <img src={image} alt="Product preview image" />
                <img src={image} alt="Product preview image" />
                <img src={image} alt="Product preview image" />
                <img src={image} alt="Product preview image" />
            </div>
            <div className='md:w-[429px] w-[350px]'>
                <img className='w-full' src={image} alt="product image" />
            </div>
        </div>
        <div className="">
          <h1 className='md:text-4xl text-2xl font-bold mt-4'>{name}</h1>
          <div className='flex text-red-500 items-center mt-5'>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStarHalfStroke />
            <p className='text-black'>(122)</p>
          </div>
          <div className='flex gap-6 mt-3'>
            <p className='line-through text-slate-500'>$ {oldprice}</p>
            <p className='text-red-500 font-bold'>$ {newprice}</p>
          </div>
          <p className='text-sm mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia reprehenderit corrupti iure architecto dolor quos nobis, consequatur aliquam quae illo, provident id vero expedita? Ratione natus unde aspernatur nam dolor?</p>
          <h1 className='text-xl font-bold my-5'>Select Size</h1>
          <div className='flex gap-5'>
            <div className="h-14 w-14 bg-[#C7C8CC] font-bold text-lg flex justify-center items-center">S</div>
            <div className="h-14 w-14 bg-[#C7C8CC] font-bold text-lg flex justify-center items-center">M</div>
            <div className="h-14 w-14 bg-[#C7C8CC] font-bold text-lg flex justify-center items-center">L</div>
            <div className="h-14 w-14 bg-[#C7C8CC] font-bold text-lg flex justify-center items-center">XL</div>
            <div className="h-14 w-14 bg-[#C7C8CC] font-bold text-lg flex justify-center items-center">XXL</div>
          </div>
          <button className='border border-red-500 py-3 px-5 mt-8 bg-red-500 text-white hover:bg-red-400'>ADD TO CART</button>
        
        </div>
    </div>
  )
}

export default ProductDisplay