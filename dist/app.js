"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_route_1 = require("./modules/Products/product.route");
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const order_route_1 = require("./modules/orders/order.route");
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/products", product_route_1.productRoute);
app.use("/api/orders", order_route_1.orderRoute);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
exports.default = app;
