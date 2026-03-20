const express = require("express");
const Checkout = require("../models/Checkout");
const Cart = require("../models/Cart");
const Product = require("../models/Product");
const Order = require("../models/Order");
const { protect } = require("../middleware/authmiddleware.js");

const router = express.Router()

// @route POST /api/checkout
// @desc Create a new checkout session
// @access Private

router.post("/", protect, async (req, res) => {

  const { checkoutItems, shippingAddress, paymentMethod, totalPrice } = req.body;

  if (!checkoutItems || checkoutItems.length === 0) {
    return res.status(400).json({ message: "no items in checkout" });
  }

  try {
    const newCheckout = await Checkout.create({
        user: req.user._.id,
        checkoutItems: checkoutItems,
        shippingAddress,
        paymentMethod,
        totalPrice,
        paymentStatus: "Pending",
        isPaid: false,
    });
    console.log(`Checkout created for user: ${req.user._.id}`);
    res.status(201).json(newCheckout);
  } catch (error) {
    console.error("Error Creating checkout session:", error);
    res.status(500).json({ message: "Server Error" });
  }

});

router.put("/:id/pay", protect, async (req, res) => {
  const {paymentStatus, paymentDatails} = req.body;

  try {
    const checkOut = await Checkout.findById(req.params.id);

    if (!checkOut) {
      return res.status(404).json({ message: "Checkout not found" });
    }

    if (paymentStatus === "Paid") {
      checkOut.isPaid = true;
      checkOut.paymentStatus = paymentStatus;
      checkOut.paymentDatails = paymentDatails;
      checkOut.paidAt = Date.now();
      await checkOut.save();

      res.status(200).json(checkOut);
    } else {
      res.status(400).json({ message: "Invelid payment Status" })
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" })
  }
});

router.post("/:id/finalize", protect, async (req, res) => {
  try {

    // 1️⃣ Checkout શોધો
    const checkout = await Checkout.findById(req.params.id);

    // 2️⃣ જો checkout ના મળે
    if (!checkout) {
      return res.status(404).json({ message: "Checkout not found" });
    }

    // 3️⃣ જો payment થઈ ગયું છે અને હજુ finalize નથી થયું
    if (checkout.isPaid && !checkout.isFinalized) {

      // 4️⃣ Checkout પરથી Final Order બનાવો
      const finalOrder = await Order.create({
        user: checkout.user,
        orderItems: checkout.orderItems,
        shippingAddress: checkout.shippingAddress,
        paymentMethod: checkout.paymentMethod,
        totalPrice: checkout.totalPrice,

        isPaid: true,
        paidAt: checkout.paidAt,

        isDelivered: false,
        paymentStatus: "paid",

        paymentDetails: checkout.paymentDetails
      });

      checkout.isFinalized = true;
      checkout.finalizedAt = Date.now();

      await checkout.save();

      await Cart.findOneAndDelete({ user: checkout.user });

      return res.status(201).json(finalOrder);
    }

    else if (checkout.isFinalized) {
      return res.status(400).json({
        message: "Checkout already finalized"
      });
    }

    else {
      return res.status(400).json({
        message: "Checkout is not paid"
      });
    }

  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message
    });
  }
});

module.exports = router;