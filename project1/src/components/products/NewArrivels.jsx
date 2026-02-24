import React, { useEffect, useRef, useState } from 'react'
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const NewArrivels = () => {
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(false)
    const [canScrollLeft, setCanScrollLeft] = useState(true)
    const [canScrollRight, setCanScrollRight] = useState(true)
    const newArrives = [
        {
            id: 1,
            name: "Stylish Jackect",
            price: 399,
            image: [
                {
                    url: "https://picsum.photos/500/500?/random=1",
                    altText: "Stylish Jacket"
                }
            ]
        },
        {
            id: 2,
            name: "Stylish Jackect",
            price: 399,
            image: [
                {
                    url: "https://picsum.photos/500/500?/random=2",
                    altText: "Stylish Jacket"
                }
            ]
        },
        {
            id: 3,
            name: "Stylish Jackect",
            price: 399,
            image: [
                {
                    url: "https://picsum.photos/500/500?/random=3",
                    altText: "Stylish Jacket"
                }
            ]
        },
        {
            id: 4,
            name: "Stylish Jackect",
            price: 399,
            image: [
                {
                    url: "https://picsum.photos/500/500?/random=4",
                    altText: "Stylish Jacket"
                }
            ]
        },
        {
            id: 5,
            name: "Stylish Jackect",
            price: 399,
            image: [
                {
                    url: "https://picsum.photos/500/500?/random=5",
                    altText: "Stylish Jacket"
                }
            ]
        },
        {
            id: 6,
            name: "Stylish Jackect",
            price: 399,
            image: [
                {
                    url: "https://picsum.photos/500/500?/random=6",
                    altText: "Stylish Jacket"
                }
            ]
        },
        {
            id: 7,
            name: "Stylish Jackect",
            price: 399,
            image: [
                {
                    url: "https://picsum.photos/500/500?/random=7",
                    altText: "Stylish Jacket"
                }
            ]
        },
        {
            id: 8,
            name: "Stylish Jackect",
            price: 399,
            image: [
                {
                    url: "https://picsum.photos/500/500?/random=8",
                    altText: "Stylish Jacket"
                }
            ]
        }
    ]

    const scroll = (direction) => {
        const scrollAmount = direction === "left" ? -376 : 376;
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    };


    const updateScrollButtons = () => {
        const container = scrollRef.current;
        if (!container) return;

        const leftScrollable = container.scrollLeft > 0;
        const rightScrollable =
            container.scrollLeft + container.clientWidth < container.scrollWidth;

        setCanScrollLeft(leftScrollable);
        setCanScrollRight(rightScrollable);

        console.log({
            scrollLeft: container.scrollLeft,
            clientWidth: container.clientWidth,
            scrollWidth: container.scrollWidth,
        });
    };


    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        container.addEventListener("scroll", updateScrollButtons);
        updateScrollButtons();

        return () => {
            container.removeEventListener("scroll", updateScrollButtons);
        };
    }, []);

    return (
        <section className='text-center mx-auto top-[-19px] relative mb-10'>
            <h1 className='font-bold text-3xl mb-4'>Explore New Arrives</h1>
            <p className='text-gray-500 text-lg mb-8'>Discover the latest styles straight off the runway, frashly added to keep your wardrobe on the cutting edge of fashion</p>
            <div className=' flex justify-end gap-3 px-4 right-0 mb-3 bottom-[-37px]'>
                <button onClick={() => scroll("left")} className='border rounded text-black p-2 bg-white'>
                    <FaAngleLeft className='text-2xl' />
                </button>
                <button onClick={() => scroll("right")} className='border rounded text-black p-2 bg-white'>
                    <FaAngleRight className='text-2xl' />
                </button>
            </div>
            <div
                ref={scrollRef}
                className='container mx-auto overflow-x-scroll px-6 flex space-x-6 relative'>
                {newArrives.map((product) => (
                    <div key={product.id} className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative">
                        <img src={product.image[0]?.url} alt={product.image[0]?.altText || product.name}
                            className="w-full object-cover rounded-lg h-[500px]"
                        />
                        <div className='absolute bottom-0 left-0 right-0 bg-opacity-50 text-white p-3 backdrop-blur-md'>
                            <Link to={`/product/${product.id}`} className="block">
                                <h4 className="font-medium">{product.name}</h4>
                                <p className='mt-1 '>${product.price}</p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section >
    )
}

export default NewArrivels
