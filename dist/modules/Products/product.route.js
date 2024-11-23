"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoute = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
router.get("/", product_controller_1.getAllBikes);
router.post("/", product_controller_1.createBike);
router.get("/:productId", product_controller_1.getSingleBike);
router.put("/:productId", product_controller_1.updateSingleBike);
router.delete("/:productId", product_controller_1.deleteBike);
exports.productRoute = router;
