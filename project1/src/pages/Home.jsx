import React from 'react'
import Hero from '../components/layout/Hero'
import GenderCollectionSection from '../components/products/GenderCollectionSection'
import NewArrivels from '../components/products/NewArrivels'
import ProductDetails from './ProductDetails'
import ProductGrid from './ProductGrid'
import FeaturedCollection from './FeartuedCollection'
import FeaturedSection from './FeaturedSection.jsx'

const PlaceholderProducts = [
  {
        _id: 1,
        name: "jacket",
        price: 399,
        images: [{ url: "https://picsum.photos/500/500?/random=13" }]
    },
    {
        _id: 2,
        name: "jacket",
        price: 399,
        images: [{ url: "https://picsum.photos/500/500?/random=14" }]
    },
    {
        _id: 3,
        name: "jacket",
        price: 399,
        images: [{ url: "https://picsum.photos/500/500?/random=15" }]
    },
    {
        _id: 4,
        name: "jacket",
        price: 799,
        images: [{ url: "https://picsum.photos/500/500?/random=16" }]
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
]

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


const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrivels />
      <h2 className='text-3xl text-center font-bold items-center'>Best Seller</h2>
      <ProductDetails />
      <div className='mt-12'>
        <h2 className='text-2xl font-bold text-center mb-7'>You May Also Link</h2>
        <ProductGrid products={SimilerProducts} />
      </div>
      <div className='mt-12'>
        <h2 className='text-2xl text-center mb-7 font-bold'>
          Top Were's For Women
        </h2>
        <ProductGrid products={PlaceholderProducts} />
      </div>
        <FeaturedCollection />
        <FeaturedSection />
    </div>
  )
}

export default Home
