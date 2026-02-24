import { Link } from "react-router-dom";
import Featured from "../assets/Featured.webp"
const FeaturedCollection = () => {
    return(
        <section className="py-16 px-4 lg:px-0">
            <div className="px-7">
            <div className="container bg-green-50 flex flex-col-reverse mx-auto lg:flex-row items-center rounded-3xl">
                {/* Left Content */}
                <div className="lg:w-1/2 p-8 text-center lg:text-left">
                <h2 className="text-lg font-semibold text-gray-700 mb-2">Comfert and style</h2>
                <h2 className="text-4xl lg:text-5xl mb-6 font-bold">
                    Appareal made for your everyday life
                </h2>
                <p className="text-lg mb-6 text-gray-600">Discover high-quality, comfortable clothing that blends style and function. Made to help you look and feel good every day.</p>
                <Link to="/collection/all" className="bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800">Shop Now</Link>
                </div>
                { /* Right Section */}
                <div className="lg:w-1/2">
                <img src={ Featured } alt="Featured collection" className="w-full h-full object-cover"/>
                </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedCollection