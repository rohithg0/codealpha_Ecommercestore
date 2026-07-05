const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    customerName: String,
    products: Array,
    totalAmount: Number,
    orderDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Order", OrderSchema);