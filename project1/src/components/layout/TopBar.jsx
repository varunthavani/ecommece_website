import React from 'react'
import { FaMeta } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const TopBar = () => {
  return (
    <div className='bg-[#ea2e0e] text-white'>
        <div className='container p-1.5 mx-auto flex justify-between items-center'>
            <div className='hidden md:flex pl-9 items-center space-x-4'>
                <a href="#" className='hover:text-gray-300'><FaMeta className='h-5 w-5'/></a>
                <a href="#" className='hover:text-gray-300'><FaInstagram className='h-5 w-5'/></a>
                <a href="#" className='hover:text-gray-300'><FaXTwitter className='h-5 w-5'/></a>
            </div>
            <div className='text-sm text-center flex-grow'>
                <span>We are WorldWild - Shpiing</span> 
            </div>
            <div className='text-sm pr-9 hidden md:block'><a href="tel:+1234567890" className='hover:text-gray-300'> +91 87802-19294</a></div>
        </div>
    </div>
  )
}

export default TopBar
