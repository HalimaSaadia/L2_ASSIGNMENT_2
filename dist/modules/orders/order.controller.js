"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateRevenue = exports.createOrder = void 0;
const order_service_1 = require("./order.service");
const product_model_1 = require("../Products/product.model");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, product: productId, quantity } = req.body;
        const product = yield product_model_1.productModel.findById(productId);
        if (product) {
            console.log(product.quantity, quantity);
            if (product.quantity < quantity) {
                res.status(500).json({
                    message: "Stock is Not sufficient to Create Your Order",
                    success: false,
                    pQuantity: product.quantity,
                    quantity
                });
            }
            else {
                const totalPrice = quantity * (product === null || product === void 0 ? void 0 : product.price);
                product.quantity = (product === null || product === void 0 ? void 0 : product.quantity) - quantity;
                if ((product === null || product === void 0 ? void 0 : product.quantity) === 0) {
                    product.inStock = false;
                }
                product === null || product === void 0 ? void 0 : product.save();
                const order = {
                    email,
                    product: productId,
                    quantity,
                    totalPrice,
                };
                const result = yield (0, order_service_1.createOrderInDB)(order);
                res.send({
                    message: "Order Create successfully",
                    success: true,
                    data: result,
                });
            }
        }
    }
    catch (err) {
        res.status(500).json({
            message: "Failed To Create Order",
            success: false,
            error: err,
        });
    }
});
exports.createOrder = createOrder;
const calculateRevenue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, order_service_1.calculateTotalRevenueInDB)();
        res.status(200).json({
            success: true,
            message: "Successfully calculate revenue",
            data: {
                totalRevenue: result[0]
            },
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed To Calculate Total Revenue",
            error: err,
        });
    }
});
exports.calculateRevenue = calculateRevenue;
