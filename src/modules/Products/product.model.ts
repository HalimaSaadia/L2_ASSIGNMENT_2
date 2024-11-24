import { model, Schema } from "mongoose";
import { TCategory, TProduct } from "./product.interface";

const productSchema = new Schema<TProduct>(
  {
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
  },
  { timestamps: true }
);

export const productModel = model<TProduct>("Product", productSchema);
