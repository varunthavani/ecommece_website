import heroimg from "../../assets/rabbit-hero.webp"

const Hero = () => {
    return (
        <section className="relative">
            <img src={heroimg} alt="Rabbit" className="w-full h-[300px] md:h-[600px] lg-h-[750px] lg:object-cover" />
            <div className="absolute flex items-center bg-black/50  justify-center inset-0">
                <div className="text-center text-white p-6">
                    <h1 className="text-4xl uppercase mb-4 md:text-9xl font-bold tracking-tighter">Vacation <br /> Ready</h1>
                    <p className="text-sm md:text-lg tracking-tighter mb-6">Explore our vacation-ready outfits with fast world</p>
                    <button className="bg-white px-5 py-1 hover:bg-gray-200 text-black text-center">Shop Now</button>
                </div>
            </div>
        </section>
    )
}

export default Hero