import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import CartContent from "../cart/CartContent";


const CartDrawer = ({ DrawerOpen, ToggleCartDrawer }) => {
    
    return (
        <div className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[35rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${DrawerOpen ? "translate-x-0" : "translate-x-full"}`}>
            {/* Close Button */}
            <div className="flex  justify-end p-4">
                <button onClick={ToggleCartDrawer}>
                    <IoMdClose className="h-6 w-6 text-gray-600"/>
                </button>
            </div>
            {/* Cart Drawer Content */}
            <div className="flex-grow p-4 overflow-y-auto">
                <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
                <CartContent />
            </div>
            {/* checkout button at buttom */}
            <div className="p-4 sticky bottom-0">
                <button className="bg-black w-full text-white p-2 font-semibold text-center rounded-lg">Checkout</button>
                <p className="text-[11px] tracking-tight mt-2 text-center text-gray-500">Shipping, taxes and discount codeds discount at checkout</p>
            </div>
        </div>
    )
}

export default CartDrawer