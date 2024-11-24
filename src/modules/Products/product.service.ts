import mongoose from "mongoose";
import { TProduct } from "./product.interface";
import { productModel } from "./product.model";

export const createBikeInDB = async (productData: TProduct) => {
  const result = await productModel.create(productData);
  return result;
};

export const getAllBikesFromDB = async () => {
  const result = await productModel.find({});
  return result;
};

export const getSingleBikeFromDB = async (productId: string) => {
  const result = await productModel.findOne({
    _id: new mongoose.Types.ObjectId(productId),
  });
  return result;
};


// update bike
export const updateSingleBikeInDB = async (productId: string, updatedData: Object) => {
  const result = await productModel.findOneAndUpdate(
    { _id: new mongoose.Types.ObjectId(productId) },
    { $set: updatedData },
    {new: true}
  );
  return result
};

// delete bike
export const deleteBikeFromDB = async (productId: string) => {
  const result = await productModel.deleteOne({
    _id: new mongoose.Types.ObjectId(productId),
  });
  return result;
};
