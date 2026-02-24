import React from 'react'
import { HiShoppingBag } from "react-icons/hi";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import { HiOutlineCreditCard } from "react-icons/hi2";

const FeaturedSection = () => {
    return (
        <div className='py-16 px-4 bg-white'>
            <div className='container mx-auto gap-8 flex grid grid-cols-1 md:grid-cols-3 text-center'>
                <div className='flex flex-col items-center'>
                    <div className='p-4 rounded-full mb-4'>
                    <HiShoppingBag className='text-xl'/>
                    </div>
                    <h4 className='tracking-tighter mb-2'>FREE INTERNATIONAL SHIPPING</h4>
                    <p>On all orders over $100.00</p>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='p-4 rounded-full mb-4 '>
                    <HiOutlineCreditCard className='text-xl'/>
                    </div>
                    <h4 className='tracking-tighter mb-2'>7 DAYS RETURN</h4>
                    <p>Money back guarantee</p>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='p-4 rounded-full mb-4 '>
                    <HiOutlineCreditCard className='text-xl'/>
                    </div>
                    <h4 className='tracking-tighter mb-2'>SECURE CHECKOUT</h4>
                    <p>100% secured checkout process</p>
                </div>
            </div>
        </div>
    )
}

export default FeaturedSection
