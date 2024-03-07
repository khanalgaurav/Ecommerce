import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
function LoginAndSignup() {
  return (
    //   <div className='h-screen bg-[url("/images/login_background.jpg")] w-full bg-repeat bg-center '>
    //     login page
    //   </div>


    <div className='bg-[url("/images/background_of_login.png")] bg-cover p-10 h-screen flex items-center justify-center'>
        <div className='flex border border-green-600 items-center '>
            <div className='border border-red-500 overflow-hidden md:block hidden'>
                <img className='h-[380px] w-[500px] rounded-xl' src="/images/login_background.jpg" alt="login image" />
            </div>


            <div className='h-fit border p-7 bg-[#F3DBC3] border-blue-500 rounded-2xl shadow-lg'>
                <div className='text-3xl font-bold mb-10'>
                    <NavLink>Login </NavLink>
                    |
                    <NavLink> Signup</NavLink>
                </div>
                <form action="" className='text-lg'>
                    <div>
                        <label htmlFor="email">Email address</label><br/>
                        <input className='border-b bg-[#F3DBC3] border-black' type="email" placeholder='Enter your email' />
                    </div>
                    <div className='mt-5'>
                        <label htmlFor="password">Password</label><br/>
                        <input className='border-b bg-[#F3DBC3] border-black' type="password" placeholder='Enter your Password' />
                    </div>
                </form>
                <div className='text-center mt-5 mb-2'><Link>Forgot Password ?</Link></div>
                <div className='text-center'><button className='text-xl w-full  border px-10 py-2 bg-[#E23B30] rounded-xl hover:bg-red-500'>Login</button></div>
                
                <fieldset className='border-t border-black my-2'>
                    <legend className='text-center'>&nbsp;OR&nbsp;</legend>
                </fieldset>
                
                <div className='flex text-center justify-center gap-6 text-2xl mt-2'>
                    <Link><FcGoogle /></Link>
                    <Link><SiFacebook className='text-blue-600'/></Link>
                    <Link><FaXTwitter/></Link>
                </div>
            </div>

        </div>
    </div>
    )
}

export default LoginAndSignup