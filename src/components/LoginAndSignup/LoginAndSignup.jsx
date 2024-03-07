import React, { useState } from 'react'
import { NavLink,Link } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import logo from '../assets/logo.png'
import { BiSolidShow } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";
function LoginAndSignup() {

    const [login,setLogin]= useState("login");
    const [pass,setPass] = useState("password");
    const [showpass,setShowpass] = useState(false);
    const [signin,setSignin] = useState(true)
  return (
    //   <div className='h-screen bg-[url("/images/login_background.jpg")] w-full bg-repeat bg-center '>
    //     login page
    //   </div>


    <div className='bg-[url("/images/background_of_login.png")] bg-cover bg-bottom p-10 h-screen flex items-center justify-center'>
        <div className='flex items-center '>
            <div className=' overflow-hidden md:block hidden relative'>
                <img className='h-[380px] w-[550px] rounded-xl' src="/images/login_background.jpg" alt="login image" />
                <div className='flex items-center justify-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <img src={logo} alt="logo" />
                        <p className='text-3xl font-bold'>TheRaj</p>
                </div>
            </div>

            {/* -----------------------small theraj logo--------------------------- */}

            <div className='flex md:hidden items-center justify-center fixed top-[25%] left-[50%] translate-x-[-50%] border rounded-2xl'>
                        <img src={logo} alt="logo" />
                        <p className='text-3xl font-bold flex flex-col'>TheRaj<span className='text-base'>login/signup</span></p>      
            </div>

            {/* ----------------------------Actual login form---------------------------- */}
            <div className={`h-fit p-7 bg-[#F3DBC3] rounded-2xl shadow-2xl ${signin?'block':'hidden'}`}>
                <div className='text-3xl font-bold mb-10 flex gap-2 p-1'>
                    <NavLink onClick={()=>{setLogin('login');setSignin(true)}}>Login{login==='login'? <hr className='mt-1 w-[80px] h-[3px] bg-black'/>:<></>} </NavLink>
                    |
                    <NavLink onClick={()=>{setLogin('signup');setSignin(false)}}> Signup{login==='signup'? <hr className='mt-1 w-[100px] h-[3px] bg-black'/>:<></>} </NavLink>
                </div>
                <form action="" className='text-lg'>
                    <div >
                        <label htmlFor="email">Email address</label><br/>
                        <input className=' outline-none border-b bg-[#F3DBC3] border-black w-72' type="email" placeholder='Enter your email' />
                    </div>
                    <div className='mt-5'>
                        <label htmlFor="password">Password</label><br/>
                        <input className='outline-none absolute border-b bg-[#F3DBC3] border-black w-72' type={pass} placeholder='Enter your Password' />
                        <BiSolidShow onClick={()=>{setPass("password");setShowpass(!showpass)}} className={`text-2xl relative left-[100%] translate-x-[-100%] ${showpass?'block':'hidden'}`} />
                        <BiSolidHide onClick={()=>{setPass("text");setShowpass(!showpass)}} className={`text-2xl relative left-[100%] translate-x-[-100%] ${showpass?'hidden':'block'}`} />
                    </div>
                </form>
                <div className='text-center mt-5 mb-2'><Link>Forgot Password ?</Link></div>
                <div className='text-center'><button className='text-xl w-full  border px-10 py-2 bg-[#E23B30] rounded-xl hover:bg-red-500'>Login</button></div>
                
                <fieldset className='border-t border-black my-2'>
                    <legend className='text-center'>&nbsp;OR Signin With&nbsp;</legend>
                </fieldset>
                
                <div className='flex text-center justify-center gap-6 text-2xl mt-2'>
                    <Link><FcGoogle /></Link>
                    <Link><SiFacebook className='text-blue-600'/></Link>
                    <Link><FaXTwitter/></Link>
                </div>
            </div>

            {/* ----------------------------Actual signup form---------------------------- */}
            <div className={`h-fit p-7 bg-[#F3DBC3] rounded-2xl shadow-2xl ${signin?'hidden':'block'}`}>
                <div className='text-3xl font-bold mb-10 flex gap-2 p-1'>
                    <NavLink onClick={()=>{setLogin('login');setSignin(true)}}>Login{login==='login'? <hr className='mt-1 w-[80px] h-[3px] bg-black'/>:<></>} </NavLink>
                    |
                    <NavLink onClick={()=>{setLogin('signup');setSignin(false)}}> Signup{login==='signup'? <hr className='mt-1 w-[100px] h-[3px] bg-black'/>:<></>} </NavLink>
                </div>
                <form action="" className='text-lg'>
                    <div >
                        <label htmlFor="email">Email address</label><br/>
                        <input className=' outline-none border-b bg-[#F3DBC3] border-black w-72' type="email" placeholder='Enter your email' />
                    </div>
                    <div className='mt-5'>
                        <label htmlFor="password">Create Password</label><br/>
                        <input className='outline-none absolute border-b bg-[#F3DBC3] border-black w-72' type={pass} placeholder='Create your Password' />
                        <BiSolidShow onClick={()=>{setPass("password");setShowpass(!showpass)}} className={`text-2xl relative left-[100%] translate-x-[-100%] ${showpass?'block':'hidden'}`} />
                        <BiSolidHide onClick={()=>{setPass("text");setShowpass(!showpass)}} className={`text-2xl relative left-[100%] translate-x-[-100%] ${showpass?'hidden':'block'}`} />
                    </div>
                    <div className='mt-5'>
                        <label htmlFor="password">Confirm Password</label><br/>
                        <input className='outline-none absolute border-b bg-[#F3DBC3] border-black w-72' type={pass} placeholder='Confirm your Password' />
                        <BiSolidShow onClick={()=>{setPass("password");setShowpass(!showpass)}} className={`text-2xl relative left-[100%] translate-x-[-100%] ${showpass?'block':'hidden'}`} />
                        <BiSolidHide onClick={()=>{setPass("text");setShowpass(!showpass)}} className={`text-2xl relative left-[100%] translate-x-[-100%] ${showpass?'hidden':'block'}`} />
                    </div>
                </form>
                <div className='text-center mt-5'><button className='text-xl w-full  border px-10 py-2 bg-[#E23B30] rounded-xl hover:bg-red-500'>Signup</button></div>
                
                <fieldset className='border-t border-black my-2'>
                    <legend className='text-center'>&nbsp;OR Signup With&nbsp;</legend>
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