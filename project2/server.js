const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()
const connectDB = require("./config/db.js")
const userRoutes = require("./routes/userRoutes.js")
const ProductRouter = require("./routes/ProductRoutes.js")
const cartRoutes = require("./routes/cartRoutes.js")
const checkoutRoutes = require("./routes/checkoutRoutes.js");
const orderRoutes = require("./routes/orderRoutes.js");


const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 3000

connectDB();

app.get("/", (req, res) => {
    res.send("API call")
})

app.use("/api/users", userRoutes);
app.use("/api/product", ProductRouter);
app.use("/api/cart", cartRoutes);
app.use("/api/checkout", checkoutRoutes);
app.use("/api/order", orderRoutes);


app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})