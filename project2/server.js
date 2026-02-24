const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()
const connectDB = require("./config/db.js")
const userRoutes = require("./routes/userRoutes.js")

const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 3000

connectDB();

app.get("/", (req, res) => {
    res.send("API call")
})

app.use("/api/users", userRoutes)

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})