import { Link } from "react-router-dom";
import { FaMeta, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";

const FooterSection = () => {
    return (
        <footer className="border-t py-12">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
                <div>
                    <h2 className="text-lg text-gray-800 mb-4">Newsletter</h2>
                    <p className="text-gray-500 mb-4">Be the first to hear about new products, exclusive events and online offers.</p>
                    <p className="font-medium mb-4 text-sm text-gray-600">signup and get 10% discount on your frist order.</p>
                    <form className="flex">
                        <input type="email" placeholder="enter your email" className="p-3 w-full text-sm border-l border-t border-b border-gray-300 border-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all" required />
                        <button type="submit" className="bg-black text-white px-6 py-3 rounded-r-md hover:bg-gray-800">Subcribe</button>
                    </form>
                </div>
                <div>
                    <ul className="space-y-2">
                        <h3 className="text-gray-700 text-lg mb-4">Shop</h3>
                        <li>
                            <Link to="#" className="hover:text-gray-500">Men's Top Were</Link>
                        </li>
                        <li>
                            <Link to="#" className="hover:text-gray-500">Women's Top Were</Link>
                        </li>
                        <li>
                            <Link to="#" className="hover:text-gray-500">Men's Bottom Were</Link>
                        </li>
                        <li>
                            <Link to="#" className="hover:text-gray-500">Women's Top Were</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="space-y-2">
                        <h3 className="text-gray-700 text-lg mb-4">Support</h3>
                        <li>
                            <Link to="#" className="hover:text-gray-500">Contact us</Link>
                        </li>
                        <li>
                            <Link to="#" className="hover:text-gray-500">About us</Link>
                        </li>
                        <li>
                            <Link to="#" className="hover:text-gray-500">FAQs</Link>
                        </li>
                        <li>
                            <Link to="#" className="hover:text-gray-500">Features</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-gray-700 text-lg mb-4">Follow us</h3>
                    <div className="flex items-center space-x-4 mb-4">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
                            <FaMeta className='h-5 w-5' />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
                            <FaInstagram className='h-5 w-5' />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
                            <FaXTwitter className='h-5 w-5' />
                        </a>
                    </div>
                    <h2 className="text-gray-500 ">Call us</h2>
                    <p>
                        <FiPhoneCall className="inline-block mr-2" />
                        +91 8780219294
                    </p>
                </div>
            </div>
            <div className="container mx-auto mt-12 border-gray-300 pt-6 px-4 lg:px-0 border-t">
                <p className="text-gray-500 text-center tracking-tight text-sm">© 2026, Completab. All Right Reserved</p>
            </div>
        </footer>
    )
}

export default FooterSection
