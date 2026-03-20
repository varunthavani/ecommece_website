const mongoose = require("mongoose")

const cartItemsSchma =  new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        require: true,
    },
    name: String,
    image: String,
    price: String,
    size: String,
    color: String,
    quantity: {
        type: Number,
        default: 1,
    },
},
{_id: false}
);

const cartSchma = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    guestId: {
        type: String,
    },
    products: [cartItemsSchma],
    totalPrice: {
        type: Number,
        required: true,
        default: 0,
    },
},
{timestamps: true}
);

module.exports = mongoose.model("Cart", cartSchma);