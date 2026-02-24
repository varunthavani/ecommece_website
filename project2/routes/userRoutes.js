const express = require("express");
const User = require("../models/User.js");
const jwt = require("jsonwebtoken");

const router = express.Router();

// Token generator function (bahar likho)
const genToken = (user) => {
  const payload = {
    user: {
      id: user._id,
      role: user.role
    }
  };

  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "40h" });
};

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "user already exists" });
    }

    user = new User({ name, email, password });
    await user.save();

    // ✅ token yahan generate karo
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

module.exports = router;