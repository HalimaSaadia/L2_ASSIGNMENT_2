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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBikeFromDB = exports.updateSingleBikeInDB = exports.getSingleBikeFromDB = exports.getAllBikesFromDB = exports.createBikeInDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const product_model_1 = require("./product.model");
const createBikeInDB = (productData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.productModel.create(productData);
    return result;
});
exports.createBikeInDB = createBikeInDB;
const getAllBikesFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.productModel.find({});
    return result;
});
exports.getAllBikesFromDB = getAllBikesFromDB;
const getSingleBikeFromDB = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.productModel.findOne({
        _id: new mongoose_1.default.Types.ObjectId(productId),
    });
    return result;
});
exports.getSingleBikeFromDB = getSingleBikeFromDB;
// update bike
const updateSingleBikeInDB = (productId, updatedData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.productModel.findOneAndUpdate({ _id: new mongoose_1.default.Types.ObjectId(productId) }, { $set: updatedData }, { new: true });
    return result;
});
exports.updateSingleBikeInDB = updateSingleBikeInDB;
// delete bike
const deleteBikeFromDB = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.productModel.deleteOne({
        _id: new mongoose_1.default.Types.ObjectId(productId),
    });
    return result;
});
exports.deleteBikeFromDB = deleteBikeFromDB;
