const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");
const Product = require("./models/Product");
const Order = require("./models/Order");

const app = express();
app.use(express.json());

app.use(express.static("public"));
app.post("/register", async (req, res) => {

    try {

        const user = new User(req.body);

        await user.save();

        res.json({
            message: "User Registered Successfully"
        });

    } catch (err) {

        res.status(500).json({
            message: "Error Registering User"
        });

    }

});

// MongoDB connection directly here
mongoose.connect("mongodb://127.0.0.1:27017/ecommerce")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("DB Error:", err));

app.post("/login", async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({
        email,
        password
    });

    if (user) {
        res.json({
            message: "Login Successful"
        });
    } else {
        res.status(401).json({
            message: "Invalid Email or Password"
        });
    }

});
app.post("/add-product", async (req, res) => {

    try {

        const product = new Product(req.body);

        await product.save();

        res.json({
            message: "Product Added Successfully"
        });

    } catch (err) {

        res.status(500).json({
            message: "Error Adding Product"
        });

    }

});
app.post("/place-order", async (req, res) => {
    try {
        const order = new Order(req.body);

        await order.save();

        res.json({
            message: "Order Placed Successfully"
        });

    } catch (err) {
        res.status(500).json({
            message: "Error Placing Order"
        });
    }
});
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});