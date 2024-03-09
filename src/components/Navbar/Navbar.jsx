import logo from '../assets/logo.png'
import cartIcon from '../assets/cart_icon.png'
import { Link,NavLink } from 'react-router-dom'
import { TfiMenuAlt } from "react-icons/tfi"
import { useState } from 'react'
import { ImCross } from "react-icons/im"
import { GiSkullCrossedBones } from "react-icons/gi";

function Navbar() {
    const [show,setShow] = useState(false)
    const [cartDisplay,setCartDisplay] = useState(true)

  return (
    <div className='flex md:justify-around items-center border p-2 shadow-sm md:relative sticky top-0 bg-white z-[1]'>

        <div>
                
                <div className='flex items-center gap-[200px]'>
                    <Link onClick={()=>{setShow(false)}} to='/'>
                    <div className='flex items-center'>
                        <img src={logo} alt="logo" />
                        <p className='md:text-3xl text-2xl font-bold'>TheRaj</p>
                    </div>
                    </Link>
                    <TfiMenuAlt onClick={()=>{setShow(!show)}} className={`text-5xl md:hidden ${show?'hidden':'block'}`} />
                    <GiSkullCrossedBones onClick={()=>{setShow(!show)}} className={`text-5xl md:hidden ${show?'block':'hidden'}`}/>
                </div>
            
        </div>
        
        <div>
            <ul className={`menu md:flex md:relative fixed md:top-0 left-0 w-full top-[82px] bg-white md:gap-10 ${show?'block':'hidden'}`}>
                <NavLink onClick={()=>{setShow(!show)}} className={({isActive})=>`${isActive?'text-red-500':'text-black'}`} to= '/'><li  className='g text-center border md:border-0 md:p-0 p-3 text-lg '>Shop</li></NavLink>
                <NavLink onClick={()=>{setShow(!show)}} className={({isActive})=>`${isActive?'text-red-500':'text-black'}`} to= '/mens'><li  className='g text-center border md:border-0 md:p-0 p-3 text-lg'>Men</li></NavLink>
                <NavLink onClick={()=>{setShow(!show)}} className={({isActive})=>`${isActive?'text-red-500':'text-black'}`} to ='/womens'><li  className='g border text-center md:border-0 md:p-0 p-3 text-lg'>Women</li></NavLink>
                <NavLink onClick={()=>{setShow(!show)}} className={({isActive})=>`${isActive?'text-red-500':'text-black'}`} to ='/kids'><li  className='g border md:border-0 text-center md:p-0 p-3 text-lg'>Kids</li></NavLink>
                <div className='flex justify-around py-5 border-b md:hidden'>
                    <NavLink onClick={()=>{setShow(!show)}} className={({isActive})=>`${isActive?'text-red-500':'text-black'}`} to='/login'><button className='border border-[#c2c2c2] py-2 px-9 rounded-3xl hover:bg-slate-500 hover:text-white'>Login</button></NavLink>
                    <NavLink onClick={()=>{setShow(!show)}} className={`relative p-1`} to='/cart'><div className={`w-[22px] h-[22px] bg-red-500 flex items-center justify-center absolute right-0 top-0 rounded-[50%]`}>0</div><img src={cartIcon} alt="Cart Icon" /></NavLink>
                </div>
            </ul>
        </div>

        <div className='md:flex gap-16 hidden '>
            <NavLink className={({isActive})=>`${isActive?'text-red-500':'text-black'}`} to='/login'><button className='border border-[#c2c2c2] py-2 px-9 rounded-3xl hover:bg-slate-500 hover:text-white'>Login</button></NavLink>
            <NavLink className={`relative p-1`} to='/cart'><div className='w-[22px] h-[22px] bg-red-500 flex items-center justify-center absolute right-0 top-0 rounded-[50%]'>0</div><img src={cartIcon} alt="Cart Icon" /></NavLink>
            
        </div>
    </div>
  )
}

export default Navbar