import React, { useEffect, useState } from 'react'
import { toast } from "sonner"

const ProductData = {
    name: "Stylis Jacket",
    price: 399,
    originalprice: 799,
    description: "This is winter jacket",
    brand: "fashion brand",
    material: "Leather",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Blue", "Red"],
    images: [
        {
            url: "https://picsum.photos/500/500?/random=11",
            altText: "Stylish Jacket"
        },
        {
            url: "https://picsum.photos/500/500?/random=12",
            altText: "Stylish Jacket"
        }
    ]
}

const SimilerProducts = [
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
]

const ProductDetails = () => {
    const [mainImage, setMainImage] = useState("")
    const [selectedSize, setSelectedSize] = useState("")
    const [selectedColor, setSelectedColor] = useState("")
    const [selectedQuentity, setSelectedQuentity] = useState(1)
    const [isButtondisebled, setButtondisebled] = useState(false)

    useEffect(() => {
        if (ProductData?.images?.length > 0) {
            setMainImage(ProductData.images[0].url)
        }
    }, [ProductData])

    const handleQuentity = (action) => {
        if (action === "plus") setSelectedQuentity((prev) => (prev + 1))
        if (action === "minus" && selectedQuentity > 1) setSelectedQuentity((prev) => (prev - 1))
    }

    const handleAddToCart = () => {
        if (!selectedSize || !selectedColor) {
            toast.error("please select color and size.", {
                duration: 1000,
            });
            return;
        }

        setButtondisebled(true);

        setTimeout(() => {
            toast.success("product added at to cart", {
                duration: 1000,
            });
            setButtondisebled(false);
        }, 500);
    }


    return (
        <div className='p-6'>
            <div className='max-w-6xl mx-auto bg-white md:p-8 rounded-lg'>
                <div className='flex flex-col md:flex-row'>
                    {/* Left Images */}
                    <div className='hidden md:flex flex-col mr-6 space-y-4'>
                        {ProductData.images.map((image, index) => (
                            <img key={index} onClick={() => setMainImage(image.url)} src={image.url} alt={image.url || `thumbnail ${index}`} className={`h-20 w-20 object-cover cursor-pointer rounded-lg border ${mainImage === image.url ? "border-black" : "border-gray-300"}`} />
                        ))}
                    </div>
                    {/* Main Image */}
                    <div className='md:w-1/2'>
                        <div className='mb-4'>
                            <img src={mainImage} alt="Main Product" className='rounded-lg h-auto w-full object-cover' />
                        </div>
                    </div>
                    {/* Mobile Navigation */}
                    <div className='flex overflow-x-scroll md:hidden space-x-4 mb-4'>
                        {ProductData.images.map((image, index) => (
                            <img key={index} onClick={() => setMainImage(image.url)} src={image.url} alt={image.url || `thumbnail ${index}`} className={`h-20 w-20 object-cover cursor-pointer rounded-lg border ${mainImage === image.url ? "border-black" : "border-gray-300"}`} />
                        ))}
                    </div>
                    <div className='md:w-1/2 md:ml-10'>
                        <h1 className='text-2xl md:text-3xl font-semibold mb-2'>{ProductData.name}</h1>
                        <p className='text-gray-600 line-through'>Rs. {ProductData.originalprice && `${ProductData.originalprice}`}</p>
                        <p className='text-gray-500 text-xl'>Rs. {ProductData.price}</p>
                        <p className='text-gray-600 mb-4'>{ProductData.description}</p>
                        <div className='mb-4'>
                            <div className='text-gray-700 mb-2'>Color :</div>
                            <div className="flex gap-2">{ProductData.colors.map((color) => (
                                <button key={color} onClick={() => setSelectedColor(color)} className={`h-8 w-8 rounded-full cursor-pointer border ${selectedColor === color ? "border-4 border-black" : "border-gray-300"}`} style={{ backgroundColor: color.toLocaleLowerCase(), filter: "brightness(0.5)" }}></button>
                            ))}
                            </div>
                        </div>
                        <div className='mb-4'>
                            <div className='text-gray-700'>size :</div>
                            <div className='flex gap-2 mt-2'>{ProductData.sizes.map((size) => (
                                <button key={size} onClick={() => setSelectedSize(size)} className={`px-4 py-2 text-lg border cursor-pointer ${selectedSize === size ? "bg-black text-white" : "text-black bg-white"}`}>{size}</button>
                            ))}
                            </div>
                        </div>
                        <div className='mb-6'>
                            <div className='text-gray-700'>Quentity :</div>
                            <div className='flex items-center space-x-4 mt-2'>
                                <button onClick={() => handleQuentity("minus")} className='px-2 py-1 cursor-pointer rounded bg-gray-200 text-2xl'>-</button>
                                <span className='text-sm'>{selectedQuentity}</span>
                                <button onClick={() => handleQuentity("plus")} className='px-2 py-1 rounded cursor-pointer bg-gray-200 text-lg'>+</button>
                            </div>
                        </div>
                        <button onClick={handleAddToCart} disabled={isButtondisebled} className={`w-full px-6 py-2 text-center cursor-pointer rounded bg-black text-white ${isButtondisebled ? "cursor-not-allowed opacity-50" : "hover:bg-gray:900"}`}>{isButtondisebled ? "Adding..." : "ADD TO CART"}</button>
                        <div className='mt-10 text-gray-700'>
                            <div className='text-xl font-bold mb-4'>Characteristics :</div>

                            <table className='w-full text-sm text-gray-600'>
                                <tbody>
                                    <tr>
                                        <td className='py-2 pr-9 font-medium'>Brand</td>
                                        <td className='py-2'>{ProductData.brand}</td>
                                    </tr>

                                    <tr>
                                        <td className='py-2 pr-9 font-medium'>Material</td>
                                        <td className='py-2 '>{ProductData.material}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
