import React, { useState } from 'react'
import { Link } from "react-router-dom"
import  Log  from "../assets/login.webp"

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmitin = (e) => {
      e.preventDefault()
      console.log("User Signin:", { email, password});
    }
  return (
    <div className='flex'>
    <div className='w-full md:w-1/2 p-8 flex flex-col justify-center items-center md:p-12 bg-white'>
      <form className='max-w-md flex flex-col border shadow-sm w-full p-8' onSubmit={handleSubmitin}>
        <div className='flex justify-center mb-6'>
            <h2 className='font-medium text-sm'>Rabbit</h2>
        </div>
        <h2 className='text-2xl font-bold text-center mb-6'>Hey there!👏</h2>
        <p className='text-center mb-6'>Enter your username or password to login</p>
        <div className='mb-4'>
            <label htmlFor="text" className='block text-sm font-semibold mb-2'>Email</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className='w-full p-2 border rounded' placeholder='Entar your email address' />
        </div>
        <div className='mb-4'>
            <label htmlFor="text" className='block text-sm font-semibold mb-2'>Password</label>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className='w-full p-2 border rounded' placeholder='Entar your password' />
        </div>
        <div className='text-center'>
        <button type='submit' className='text-white bg-black hover:bg-gray-800 rounded p-2 mb-3 w-full'>Sign in</button>
        <p>Don't have an account? <Link to="/register" className='text-blue-500' >Sign up</Link></p>
        </div>
      </form>
    </div>
    <div className='hidden md:block w-1/2 bg-gray-800'>
    <div className='w-full flex flex-col h-full items-center'>
    <img src={Log} alt="Logon image" className='w-full h-[650px] object-cover' /></div>
    </div>
    </div>
  )
}

export default Login
