import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Searchbar = () => {
    const [Openbar, SetOpenbar] = useState(false)
    const [Searchterm, SetSearchterm] = useState("")

    const handleSearchToggle = () => {
        SetOpenbar(!Openbar)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        console.log("search term:", Searchterm)
    }
    return (
        <div className={`flex items-center justify-center w-full transition-all duration-300 ${Openbar ? "absolute top-0 left-0 w-full h-24 bg-white z-50" : "w-auto"}`}>
            {Openbar ? (
                <form onSubmit={handleSearch} className='relative items-center justify-center flex w-full'>
                    <div className='relative w-1/2'>
                        <input type="text" 
                        placeholder='search'
                        value={Searchterm}
                        onChange={(e) => SetSearchterm(e.target.value)}
                        className='bg-gray-100 rounded-lg focus:outline-none px-4 py-2 pl-2 pr-12 w-full placeholder:text-gray-700' />
                        <button type='submit' className='absolute right-2 top-1/2 transform -translate-y-1/2 hover:text-gray-800 text-gray-600'>
                        <IoSearch className='h-6 w-6 text-gray-700' />
                    </button>
                    </div>
                    <button type='button' onClick={handleSearchToggle} className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800'>
                        <IoMdClose className='h-6 w-6 text-gray-700'/>
                    </button>
                </form>) : (
                <button onClick={handleSearchToggle}>
                    <IoSearch className='h-6 w-6 text-gray-700' />
                </button>
            )}
        </div>
    )
}

export default Searchbar
