import { useParams } from 'react-router-dom'
import React, { useContext } from 'react'

import Breadcrum from '../components/Breadcrums/Breadcrum'
import { ShopContext } from '../components/Context/ShopContext'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay'

function Product() {
  const {all_dataset}= useContext(ShopContext)
  const {productId} = useParams()
  const product = all_dataset.find((e)=>e.id === Number(productId))
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay image={product.image} name={product.name} oldprice={product.old_price} newprice={product.new_price}/>
    </div>
  )
}

export default Product