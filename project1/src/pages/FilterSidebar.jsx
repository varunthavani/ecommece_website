import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

const FilterSidebar = () => {
  const [searchParams] = useSearchParams();

  const [price, setPrice] = useState([0, 100]);
  const categories = ["Top wear", "Bottom wear"]
  const genders = ["Men", "Women"]
  const colors = ["red", "blue", "pink", "gray", "black", "navy", "white", "yellow", "orange", "purple"]
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"]
  const materials = [
    "Cotton",
    "Wool",
    "Denim",
    "Polyester",
    "Silk",
    "Linen",
    "Viscose",
    "Fleece",
  ];

  const brands = [
    "Urban Threads",
    "Modern Fit",
    "Street Style",
    "Beach Breeze",
    "Fashionista",
    "ChicStyle",
  ];

  const [filter, setFilter] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 100
  });


  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);

    setFilter({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: params.minPrice || 0,
      maxPrice: params.maxPrice || 100,
    });

    setPrice([0, params.maxPrice || 100]);
  }, [searchParams]);

  return (
    <div className='p-4'>
      <div className='font-medium text-xl text-gray-800 mb-4'>Filter</div>
      <div className='mb-6'>
        <label className='mb-4 text-gray-600 font-medium'>Category</label>
        {categories.map((category) => (
          <div key={category} className='flex items-center mb-1'>
            <input type="radio" name="category" className='h-4 w-4 mr-2 text-blue-500 focus:ring-blue-400 border-gray-300' />
            <span className='text-gray-700'>{category}</span>
          </div>
        ))}
      </div>
      <div className='mb-6'>
        <label className='mb-4 text-gray-600 font-medium'>Gender</label>
        {genders.map((gender) => (
          <div key={gender} className='flex items-center mb-1'>
            <input type="radio" name="gender" className='h-4 w-4 mr-2 text-blue-500 focus:ring-blue-400 border-gray-300' />
            <span className='text-gray-700'>{gender}</span>
          </div>
        ))}
      </div>
      <div className='mb-6'>
        <label className='block text-gray-600 font-medium mb-4'>Colors</label>
        <div className='flex flex-wrap gap-2'>
          {colors.map((color) => (
            <button key={color} name='color' className='rounded-full w-7 h-7 border border-gray-300 cursor-pointer transition hover:scale-105' style={{ backgroundColor: color.toLocaleLowerCase() }}></button>
          ))}
        </div>
      </div>
      <div className='mb-6'>
        <label className='mb-4 text-gray-600 font-medium'>Size</label>
        {sizes.map((size) => (
          <div key={size} className='flex items-center mb-1'>
            <input type="checkbox" name="size" className='h-4 w-4 mr-2 text-blue-500 focus:ring-blue-400 border-gray-300' />
            <span className='text-gray-700'>{size}</span>
          </div>
        ))}
      </div>
      <div className='mb-6'>
        <label className='mb-4 text-gray-600 font-medium'>Material</label>
        {materials.map((material) => (
          <div key={material} className='flex items-center mb-1'>
            <input type="checkbox" name="material" className='h-4 w-4 mr-2 text-blue-500 focus:ring-blue-400 border-gray-300' />
            <span className='text-gray-700'>{material}</span>
          </div>
        ))}
      </div>
      <div className='mb-6'>
        <label className='mb-4 text-gray-600 font-medium'>Brand</label>
        {brands.map((brand) => (
          <div key={brand} className='flex items-center mb-1'>
            <input type="checkbox" name="brand" className='h-4 w-4 mr-2 text-blue-500 focus:ring-blue-400 border-gray-300' />
            <span className='text-gray-700'>{brand}</span>
          </div>
        ))}
      </div>
      <div className='mb-8'>
        <label className='mb-4 block text-gray-600 font-medium'>Price Range</label>
        <input type="range" name='price' min={0} max={100} className='w-full h-2 appearance-none rounded-lg cursor-pointer bg-gray-300' />
        <div className='flex justify-between text-gray-600'>
          <span className=''>$0</span>
          <span>${price[1]}</span>
        </div>
      </div>
    </div>
  )
}

export default FilterSidebar;