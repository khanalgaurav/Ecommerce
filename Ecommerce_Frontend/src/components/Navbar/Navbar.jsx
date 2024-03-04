import React, { useState } from 'react'
import logo from '../assets/logo.png'
import cartIcon from '../assets/cart_icon.png'
import { Link,NavLink } from 'react-router-dom'
function Navbar() {
    const [active,setActive]=useState("shop")
  return (
    <div className='flex justify-around items-center border p-2 shadow-sm'>
        <div className='flex items-center'>
            <img src={logo} alt="logo" />
            <p className='text-3xl font-bold'>TheRaj</p>
        </div>
        <div>
            <ul className='flex gap-5'>
                <li  className='g'><NavLink className={({isActive})=>`${isActive?'text-red-500':'text-black'}`} to= '/'>Shop</NavLink></li>
                <li  className='g'><NavLink className={({isActive})=>`${isActive?'text-red-500':'text-black'}`} to= '/mens'>Men</NavLink></li>
                <li  className='g'><NavLink className={({isActive})=>`${isActive?'text-red-500':'text-black'}`} to ='/womens'>Women</NavLink></li>
                <li  className='g'><NavLink className={({isActive})=>`${isActive?'text-red-500':'text-black'}`} to ='/kids'>Kids</NavLink></li>
            </ul>
        </div>
        <div className='flex gap-16'>
            <NavLink className={({isActive})=>`${isActive?'text-red-500':'text-black'}`} to='/login'><button className='border border-[#c2c2c2] py-2 px-9 rounded-3xl hover:bg-slate-500 hover:text-white'>Login</button></NavLink>
            <NavLink className={({isActive})=>`${isActive?'text-red-500':'text-black'}`} to='/cart'><img src={cartIcon} alt="Cart Icon" /></NavLink>
            <div className='w-[22px] h-[22px] bg-red-500 flex items-center justify-center absolute right-[145px] top-[15px] rounded-[50%]'>0</div>
        </div>
    </div>
  )
}

export default Navbar