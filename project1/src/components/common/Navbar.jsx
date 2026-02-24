import React, { useState } from "react";
import { Link } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { FaShoppingCart } from "react-icons/fa";
import Searchbar from './Searchbar';
import { HiBars3BottomRight } from "react-icons/hi2";
import CartDrawer from '../layout/CartDrawer';
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    const [DrawerOpen, setDrawerOpen] = useState(false);
    const [NavbarDrawer, SetNavbarDrawer] = useState(false);

    const ToggleNavDrawer = () => {
        SetNavbarDrawer(!NavbarDrawer);
    }

    const ToggleCartDrawer = () => {
        setDrawerOpen(!DrawerOpen);
    };
    return (
        <>
            <nav className='container mx-auto flex justify-between items-center py-5 px-5'>
                {/*Navbar Logo*/}
                <div>
                    <Link to="/" className='text-2xl font-medium'>Rabbit</Link>
                </div>
                {/*Navbar Menu*/}
                <div className='space-x-17 justify-between flex'>
                    <div className='hidden md:flex '>
                        <Link to="/collections/all" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>Men</Link>
                    </div>
                    <div className='hidden md:flex '>
                        <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>Women</Link>
                    </div>
                    <div className='hidden md:flex '>
                        <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>Top Wear</Link>
                    </div>
                    <div className='hidden md:flex '>
                        <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>Bottom Wear</Link>
                    </div>
                </div>
                <div className='flex items-center space-x-7'>
                    <Link to="/profile" className='hover:text-black'>
                        <VscAccount className='h-6 w-6 text-gray-700' />
                    </Link>
                    <button onClick={ToggleCartDrawer} className='relative hover:text-black'>
                        <FaShoppingCart className='h-6 w-6 text-gray-700' />
                        <span className='rounded-full -top-1 absolute text-xs text-white bg-[#ea2e0e] px-1 py-0.2'>4</span>
                    </button>
                    {/*Search Bar*/}
                    <div className='overflow-hidden'>
                        <Searchbar />
                    </div>
                    <button onClick={ToggleNavDrawer} className='md:hidden'>
                        <HiBars3BottomRight className='h-6 w-6 text-gray-700' />
                    </button>
                </div>
            </nav>
            <CartDrawer DrawerOpen={DrawerOpen} ToggleCartDrawer={ToggleCartDrawer} />
            {/* Mobile Navigation */}
            <div className={`fixed top-0 left-0 w-3/4 sm:1/2 md:1/3 h-full z-50 bg-white duration-300 shadow-lg transform transition-transform ${NavbarDrawer ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="flex justify-end p-4">
                    <button onClick={ToggleNavDrawer}>
                        <IoClose className="h-6 w-6 text-gray-700" />
                    </button>
                    </div>
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-4">Menu</h2>
                        <nav className="space-y-4">
                            <Link to="#"
                            onClick={ToggleNavDrawer}
                            className="block text-gray-600 hover:text-black">Men</Link>
                            <Link to="#"
                            onClick={ToggleNavDrawer}
                            className="block text-gray-600 hover:text-black">Women</Link>
                            <Link to="#"
                            onClick={ToggleNavDrawer}
                            className="block text-gray-600 hover:text-black">Top Bar</Link>
                            <Link to="#"
                            onClick={ToggleNavDrawer}
                            className="block text-gray-600 hover:text-black">Bottom Bar</Link>
                        </nav>
                    
                </div>
            </div>
        </>
    )
}

export default Navbar
