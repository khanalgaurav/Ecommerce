import React from 'react'
import { FaGreaterThan } from "react-icons/fa6";
function Breadcrum({product}) {
  return (
    <div className='flex items-center text-sm gap-1 md:mx-32 p-5'>
        Home <FaGreaterThan/> Shop <FaGreaterThan/> {product.category} <FaGreaterThan/> {product.name.slice(0,25)}...
    </div>
  )
}

export default Breadcrum