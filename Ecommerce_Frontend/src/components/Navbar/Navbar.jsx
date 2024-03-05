import logo from '../assets/logo.png'
import cartIcon from '../assets/cart_icon.png'
import { Link,NavLink } from 'react-router-dom'
import { TfiMenuAlt } from "react-icons/tfi"
import { useState } from 'react'
import { ImCross } from "react-icons/im"
import { GiSkullCrossedBones } from "react-icons/gi";

function Navbar() {
    const [show,setShow] = useState(false)
  return (
    <div className='flex md:justify-around items-center border p-2 shadow-sm'>

        <div>
                
                <div className='flex items-center gap-60'>
                    <Link to='/'>
                    <div className='flex items-center'>
                        <img src={logo} alt="logo" />
                        <p className='md:text-3xl text-2xl font-bold'>TheRaj</p>
                    </div>
                    </Link>
                    <TfiMenuAlt onClick={()=>{setShow(!show)}} className={`text-4xl md:hidden ${show?'hidden':'block'}`} />
                    <GiSkullCrossedBones onClick={()=>{setShow(!show)}} className={`text-4xl md:hidden ${show?'block':'hidden'}`}/>
                </div>
            
        </div>

        <div>
            <ul className={`menu md:flex md:relative fixed md:top-0 top-[82px] left-0 w-full bg-white md:gap-10 ${show?'block':'hidden'}`}>
                <NavLink className={({isActive})=>`${isActive?'text-red-500':'text-black'}`} to= '/'><li  className='g border md:border-0 md:p-0 p-3 text-lg '>Shop</li></NavLink>
                <NavLink className={({isActive})=>`${isActive?'text-red-500':'text-black'}`} to= '/mens'><li  className='g border md:border-0 md:p-0 p-3 text-lg'>Men</li></NavLink>
                <NavLink className={({isActive})=>`${isActive?'text-red-500':'text-black'}`} to ='/womens'><li  className='g border md:border-0 md:p-0 p-3 text-lg'>Women</li></NavLink>
                <NavLink className={({isActive})=>`${isActive?'text-red-500':'text-black'}`} to ='/kids'><li  className='g border md:border-0 md:p-0 p-3 text-lg'>Kids</li></NavLink>
            </ul>
        </div>

        <div className='md:flex gap-16 hidden '>
            <NavLink className={({isActive})=>`${isActive?'text-red-500':'text-black'}`} to='/login'><button className='border border-[#c2c2c2] py-2 px-9 rounded-3xl hover:bg-slate-500 hover:text-white'>Login</button></NavLink>
            <NavLink className={({isActive})=>`${isActive?'text-red-500':'text-black'}`} to='/cart'><img src={cartIcon} alt="Cart Icon" /></NavLink>
            <div className='w-[22px] h-[22px] bg-red-500 flex items-center justify-center absolute right-[145px] top-[15px] rounded-[50%]'>0</div>
        </div>

    </div>
  )
}

export default Navbar