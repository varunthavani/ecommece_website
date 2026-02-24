import { Link } from "react-router-dom"

const ProductGrid = ({products}) => {
  return (
    <div className="grid grid-cols-2 md:px-0 sm:grid-cols-2 lg:grid-cols-4 md:gap-1">
     {products.map((product, index) => (
        <Link key={index} to={`/product/${product._id}`} className="block">
            <div className="p-4  rounded-lg">
                <div className="md:w-full h-65 md:h-90 mb-4">
                    <img src={product.images[0].url} alt={product.images[0].alText || product.name} className="w-full h-full object-cover rounded-lg" />
                </div>
                <div>
                    <h2 className="text-sm mb-2">{product.name}</h2>
                    <p className="text-sm tect-gray-500 font-medium tracking-tighter">Rs. {product.price}</p>
                </div>
            </div>
        </Link>
     ))}
    </div>
  )
}

export default ProductGrid
