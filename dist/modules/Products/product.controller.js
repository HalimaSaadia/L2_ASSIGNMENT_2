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
exports.deleteBike = exports.updateSingleBike = exports.getSingleBike = exports.getAllBikes = exports.createBike = void 0;
const product_service_1 = require("./product.service");
// create bike
const createBike = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const result = yield (0, product_service_1.createBikeInDB)(data);
        res.status(200).json({
            message: "Bike created successfully",
            success: true,
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            message: "Failed To Create Bike",
            success: false,
            error: err,
        });
    }
});
exports.createBike = createBike;
// find all bikes
const getAllBikes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, product_service_1.getAllBikesFromDB)();
        res.status(200).json({
            message: "Bikes retrieved successfully",
            success: true,
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            message: "Failed To Get Bikes",
            success: false,
            error: err,
        });
    }
});
exports.getAllBikes = getAllBikes;
// Get Single Bike
const getSingleBike = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield (0, product_service_1.getSingleBikeFromDB)(productId);
        res.status(200).json({
            message: "Bike retrieved successfully",
            success: true,
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            message: "Failed To Get Bike",
            success: false,
            error: err,
        });
    }
});
exports.getSingleBike = getSingleBike;
// update bike
const updateSingleBike = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const updatedData = req.body;
        const result = yield (0, product_service_1.updateSingleBikeInDB)(productId, updatedData);
        res.status(200).json({
            message: "Bike Updated successfully",
            success: true,
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            message: "Failed To Update Bike",
            success: false,
            error: err,
        });
    }
});
exports.updateSingleBike = updateSingleBike;
// Delete Single Bike
const deleteBike = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield (0, product_service_1.deleteBikeFromDB)(productId);
        res.status(200).json({
            message: "Bike Deleted Successfully",
            success: true,
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            message: "Failed To Delete Bike",
            success: false,
            error: err,
        });
    }
});
exports.deleteBike = deleteBike;
