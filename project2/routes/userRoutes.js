const express = require("express");
const User = require("../models/User.js");
const { protect } = require("../middleware/authmiddleware.js");
const jwt = require("jsonwebtoken");

const router = express.Router();

// Token generator function
const genToken = (user) => {
  const payload = {
    user: {
      id: user._id,
      role: user.role
    }
  };

  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "40h" });
};

// ================= REGISTER =================
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "user already exists" });
    }

    user = new User({ name, email, password });
    await user.save();

    const token = genToken(user);

    res.status(201).json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      },
      token: token
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
});

// ================= LOGIN =================
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "user does not exist" });
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "password was incorrect" });
    }

    // ✅ token generate here
    const token = genToken(user);

    res.status(200).json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      },
      token: token
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
});

router.get("/profile", protect, async (req, res) => {
  res.json(req.user);
})

module.exports = router;