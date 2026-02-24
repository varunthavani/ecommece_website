import React, { useEffect, useState, useRef } from 'react'
import { FaFilter, FaHandPointLeft } from "react-icons/fa";
import FilterSidebar from './filterSidebar';
import ShortOptions from '../components/products/ShortOptions';
import ProductGrid from './ProductGrid';

const CollectionPage = () => {
    const [product, setProduct] = useState([]);
    const sidebarRef = useRef(null);
    const [sidebarOpen, setsidebarOpen] = useState(false)

    const toggleSidebar = (e) => {
        setsidebarOpen(!sidebarOpen);
    }

    useEffect(() => {
        //Add Event Listener for Clicks
        document.addEventListener("mousedown", handleClickOutside);
        //Clean Event Listener
        document.removeEventListener("mousedown", handleClickOutside);
    })

    const handleClickOutside = (e) => {
        //close sidebar if clicked outside
        if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
            setsidebarOpen(false)
        }
    }

    useEffect(() => {
        setTimeout(() => {
            const fetchedProducts = [
                {
                    _id: 1,
                    name: "jacket",
                    price: 399,
                    images: [{ url: "https://picsum.photos/500/500?/random=7" }]
                },
                {
                    _id: 2,
                    name: "jacket",
                    price: 399,
                    images: [{ url: "https://picsum.photos/500/500?/random=8" }]
                },
                {
                    _id: 3,
                    name: "jacket",
                    price: 399,
                    images: [{ url: "https://picsum.photos/500/500?/random=9" }]
                },
                {
                    _id: 4,
                    name: "jacket",
                    price: 799,
                    images: [{ url: "https://picsum.photos/500/500?/random=10" }]
                },
                {
                    _id: 1,
                    name: "jacket",
                    price: 399,
                    images: [{ url: "https://picsum.photos/500/500?/random=17" }]
                },
                {
                    _id: 2,
                    name: "jacket",
                    price: 399,
                    images: [{ url: "https://picsum.photos/500/500?/random=18" }]
                },
                {
                    _id: 3,
                    name: "jacket",
                    price: 399,
                    images: [{ url: "https://picsum.photos/500/500?/random=19" }]
                },
                {
                    _id: 4,
                    name: "jacket",
                    price: 799,
                    images: [{ url: "https://picsum.photos/500/500?/random=20" }]
                },
                {
                    _id: 1,
                    name: "jacket",
                    price: 399,
                    images: [{ url: "https://picsum.photos/500/500?/random=7" }]
                },
                {
                    _id: 2,
                    name: "jacket",
                    price: 399,
                    images: [{ url: "https://picsum.photos/500/500?/random=8" }]
                },
                {
                    _id: 3,
                    name: "jacket",
                    price: 399,
                    images: [{ url: "https://picsum.photos/500/500?/random=9" }]
                },
                {
                    _id: 4,
                    name: "jacket",
                    price: 799,
                    images: [{ url: "https://picsum.photos/500/500?/random=10" }]
                },
            ];
            setProduct(fetchedProducts)
        }, 1000);
    }, [])
    return (
        <div className='flex flex-col lg:flex-row bg-blue-100'>
            {/* Mobile Filter button */}
            <button className='lg:hidden border p-2 flex justify-center items-center' onClick={toggleSidebar}>
                <FaFilter /> Filter
            </button>
            <div ref={sidebarRef} className={`${sidebarOpen ? "translate-x-0" : "-translate-x-full"} fixed w-64 transition-transform inset-y-0 lg:static lg:translate-x-0 left-0 duration-300 overflow-y-auto bg-white z-50`}>
                <FilterSidebar />
            </div>
            <div className='flex-grow p-4'>
                <h2 className='text-2xl uppercase mb-4'>All Collection</h2>
                <ShortOptions />
                <ProductGrid products={product} />
            </div>
        </div>
    )
}

export default CollectionPage
