import React, { useContext } from 'react'
import BannerCategory from '../components/BannerCategory/BannerCategory'
import men_banner from '../components/assets/banner_man.png'
import women_banner from '../components/assets/banner_women.png'
import kid_banner from '../components/assets/banner_kid.png'
import { ShopContext } from '../components/Context/ShopContext'
import ItemCard from '../components/ItemCard/ItemCard'

function ShopCategory(props) {

  const {all_dataset}= useContext(ShopContext)

  let bannerImage;
  if (props.category==="men"){
    bannerImage=men_banner;
  }
  else if (props.category==="women"){
    bannerImage=women_banner
  }
  else{
    bannerImage=kid_banner
  }

  return (
    <div>
      <div className='md:flex md:mx-32'>
        <BannerCategory img={bannerImage}/>
      </div>
      <div className='flex md:mx-32 md:w-auto w-screen justify-between items-center mt-10'>
        <p className='md:text-xl text-sm'><span className='font-bold'>Showing 1-12</span> Out of 36 products</p>
        <select className='bg-slate-300 rounded-3xl px-1 py-2 '>
          <option value='Sort'>Sort By</option>
          <option value='asccending'>A-Z</option>
          <option value='lp'>LowPrice</option>
          <option value='hp'>Highprice</option>
          <option value='popular'>Popular</option>
        </select>
      </div>
      <div className='flex w-fit md:mx-32  justify-center mt-10 mb-5 flex-wrap gap-5'>
        {
          all_dataset.map((item,i)=>{
            const {category,id,name,image,new_price,old_price}=item;
            if(category === props.category){
              return (<ItemCard key={i} id={id} image={image} name={name} new_price={new_price} old_price={old_price}/>);
            }
          })
        
        }
      </div>
      <div className='flex justify-center my-10'>
        <button className=' underline text-2xl hover:text-red-500'>Load More</button>
      </div>
    </div>
  )
}

export default ShopCategory