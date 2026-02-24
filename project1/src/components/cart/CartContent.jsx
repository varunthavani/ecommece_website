import { MdDelete } from "react-icons/md";
const CartContent = () => {
    const cartProducts = [
        {
            productId: 1,
            name: "T-shirt",
            size: "M",
            color: "Red",
            quantity: 1,
            price: 259,
            image: "https://picsum.photos/200?random=1"
        },
        {
            productId: 2,
            name: "jeans",
            size: "L",
            color: "Blue",
            quantity: 3,
            price: 359,
            image: "https://picsum.photos/200?random=2"
        }
    ]
    return (
        <div>
            {cartProducts.map((product, index) => (
                <div key={index}
                    className="flex items-start justify-between py-4 border-b"
                >
                    <div className="flex items-start">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="h-24 w-20 rounded object-cover mr-4" />
                        <div>
                            <h3>{product.name}</h3>
                            <p className="text-sm text-gray-500">
                                size: {product.size} | color: {product.color}
                            </p>
                            <div className="flex items-center mt-2">
                                <button className="border rounded text-xl font-medium px-2 py-1">-</button>
                                <span className="mx-4">{product.quantity}</span>
                                <button className="border rounded text-base px-1.5 py-1.5">+</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>Rs. {product.price.toLocaleString()}</p>
                        <button>
                        <MdDelete className="h-6 ml-7 w-6 mt-9 text-red-600"/>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CartContent;