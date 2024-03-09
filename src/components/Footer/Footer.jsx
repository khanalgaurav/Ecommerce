import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import logo from '../assets/logo.png'
import big_logo from '../assets/logo_big.png'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className='flex flex-col items-center justify-center mt-[10] py-5 bg-white'>
        <Link onClick={()=>{setShow(false)}} to='/'>
            <div className='flex items-center'>
                <img className='md:hidden block' src={logo} alt="logo" />
                <img className='md:block hidden' src={big_logo} alt="logo" />
                <p className='md:text-5xl text-3xl font-bold'>TheRaj</p>
            </div>
        </Link>
        <div>
          <ul className='flex md:gap-10 gap-3 my-5'>
            <li>Company</li>
            <li>Product</li>
            <li>Office</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='flex gap-10 text-4xl my-5'>
          <FaInstagram />
          <FaXTwitter />
          <FaLinkedin />
        </div>
        <hr className='my-5 w-2/3 h-[3px]  bg-slate-400'/>
        <p className='mt-5'>&copy; 2024 Copyright - All Rights Reserved</p>

    </div>
  )
}

export default Footer