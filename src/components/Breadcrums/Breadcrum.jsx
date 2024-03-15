import React from 'react'
import { FaGreaterThan } from "react-icons/fa6";
function Breadcrum({product}) {
  return (
    <div className='flex items-center gap-1 mx-32 p-5'>
        Home <FaGreaterThan/> Shop <FaGreaterThan/> {product.category} <FaGreaterThan/> {product.name}
    </div>
  )
}

export default Breadcrum