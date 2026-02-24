import { Link } from "react-router-dom"
import MensImage from "../../assets/mens-collection.webp"
import WomenImage from "../../assets/womens-collection.webp"

const GenderCollectionSection = () => {
  return (
    <section className="md:py-16 py-16 px-4">
        <div className="container mx-auto md:flex md:flex-row gap-8">
            <div className="relative mb-7 flex-1">
            <img src={WomenImage} alt="Women's collection" className="w-full md:h-[700px] object-cover" />
            <div className="absolute bottom-8 left-8 bg-black/10 p-4 bg-white">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Women's Section</h2>
                <Link to="collections/all?gender=women" className="text-gray-900 underline">Shop now</Link>
            </div>
            </div>
            <div className="relative mb-7 flex-1">
            <img src={MensImage} alt="Women's collection" className="w-full md:h-[700px] object-cover" />
            <div className="absolute bottom-8 bottom-8 left-8 bg-black/10 p-4 bg-white">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Men's Section</h2>
                <Link to="collections/all?gender=women" className="text-gray-900 underline">Shop now</Link>
            </div>
            </div>
        </div>
    </section>
  )
}

export default GenderCollectionSection
