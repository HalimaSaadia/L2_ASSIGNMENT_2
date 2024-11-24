"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productModel = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        enum: ["Mountain", "Road", "Hybrid", "Electric"],
    },
    inStock: {
        type: Boolean,
        required: [true, "inStock is required"],
    },
    description: {
        type: String,
        required: [true, "description is required"],
    },
    quantity: {
        type: Number,
        required: [true, "Quantity is required"],
    },
}, { timestamps: true });
exports.productModel = (0, mongoose_1.model)("Product", productSchema);
