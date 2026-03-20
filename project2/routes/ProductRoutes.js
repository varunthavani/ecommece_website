const express = require("express");
const { protect, admin } = require("../middleware/authmiddleware.js");
const Product = require("../models/Product.js");

const router = express.Router();

router.post("/", protect, admin, async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      discountPrice,
      countInStock,
      category,
      brand,
      sizes,
      colors,
      collections,
      material,
      gender,
      images,
      isFeatured,
      isPublished,
      tags,
      dimensions,
      weight,
      sku,
    } = req.body;

    const createdProduct = await Product.create({
      name,
      description,
      price,
      discountPrice,
      countInStock,
      category,
      brand,
      sizes,
      colors,
      collections,
      material,
      gender,
      images,
      isFeatured,
      isPublished,
      tags,
      dimensions,
      weight,
      sku,
      user: req.user._id,
    });

    return res.status(201).json(createdProduct);

  } catch (error) {
    console.log(error);

    // ✅ handle duplicate sku nicely
    if (error.code === 11000) {
      return res.status(400).json({
        message: "SKU already exists. Please use a unique SKU."
      });
    }

    return res.status(500).json({
      message: "server error"
    });
  }
});

router.put("/:id", protect, admin, async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      discountPrice,
      countInStock,
      category,
      brand,
      sizes,
      colors,
      collections,
      material,
      gender,
      images,
      isFeatured,
      isPublished,
      tags,
      dimensions,
      weight,
      sku,
    } = req.body;

    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    product.name = name || product.name;
    product.description = description || product.description;
    product.price = price || product.price;
    product.discountPrice = discountPrice || product.discountPrice;
    product.countInStock = countInStock || product.countInStock;
    product.category = category || product.category;
    product.brand = brand || product.brand;
    product.sizes = sizes || product.sizes;
    product.colors = colors || product.colors;
    product.collections = collections || product.collections;
    product.material = material || product.material;
    product.gender = gender || product.gender;
    product.images = images || product.images;

    product.isFeatured =
      isFeatured !== undefined ? isFeatured : product.isFeatured;

    product.isPublished =
      isPublished !== undefined ? isPublished : product.isPublished;

    product.tags = tags || product.tags;
    product.dimensions = dimensions || product.dimensions;
    product.weight = weight || product.weight;
    product.sku = sku || product.sku;

    const updatedProduct = await product.save();
    res.json(updatedProduct);

  } catch (error) {
    console.error(error);

    if (error.code === 11000) {
      return res.status(400).json({
        message: "SKU already exists. Please use a unique SKU."
      });
    }

    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", protect, admin, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    if (product) {
      await product.deleteOne()
      res.json({ message: "product removed" })
    } else {
      res.json({ message: "product not found" })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json("Server error")
  }
})

router.get("/", async (req, res) => {
  try {
    const {
      collection,
      size,
      color,
      gender,
      minPrice,
      maxPrice,
      sortBy,
      search,
      category,
      material,
      brand,
      limit
    } = req.query;

    let query = {};

    if (collection && collection.toLowerCase() !== "all") {
      query.collection = collection;
    }

    if (category && category.toLowerCase() !== "all") {
      query.category = category;
    }

    if (material) query.material = { $in: material.split(",") };
    if (brand) query.brand = { $in: brand.split(",") };
    if (size) query.sizes = { $in: size.split(",") };
    if (color) query.colors = { $in: color.split(",") };
    if (gender) query.gender = { $in: gender.split(",") };

    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    let sort = {};
    if (sortBy) {
      switch (sortBy) {
        case "priceAsc":
          sort = { price: 1 };
          break;
        case "priceDesc":
          sort = { price: -1 };
          break;
        case "popularity":
          sort = { rating: -1 };
          break;
      }
    }

    // ✅ limit apply
    const products = await Product.find(query)
      .sort(sort)
      .limit(Number(limit) || 0);

    res.json(products);

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/best-seller", async (req, res) => {
  try {
    // Sabse highest rating wala product nikaalna
    const bestSeller = await Product.findOne()
      .sort({ rating: -1 }); // descending order (highest first)

    if (bestSeller) {
      return res.json(bestSeller);
    } else {
      return res.status(404).json({
        message: "No best seller found"
      });
    }

  } catch (error) {
    console.error("Best seller error:", error);
    res.status(500).json({
      message: "Server Error"
    });
  }
});

router.get("/similer/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const similarProducts = await Product.find({
      _id: { $ne: id },
      gender: product.gender,
      category: product.category,
    }).limit(4);

    res.json(similarProducts);

  } catch (error) {
    console.log("similar product error", error);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/new-arrivals", async (req, res) => {
  try {
    // Latest 8 products nikalna (newest first)
    const newArrivals = await Product.find()
      .sort({ createdAt: -1 }) // newest product first
      .limit(8);               // sirf 8 products

    res.json(newArrivals);

  } catch (error) {
    console.error("New arrivals error:", error);
    res.status(500).json({
      message: "Server Error"
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    if (product) {
      res.json(product);
    } else {
      res.status(400).json({ message: "Product Not Found" })
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("server error")
  }
});

module.exports = router;