import mongoose, { model, Schema } from "mongoose";
import { TOrder } from "./order.interface";

const orderSchema = new Schema<TOrder>(
  {
    email: {
      type: String,
      required: true,
      validate: {
        validator: (email) => /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(email),
        message: "Invalid Email Address",
      },
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Product",
    },
    quantity: {
      required: true,
      type: Number,
      min: [1, "Must order at least one product"],
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const orderModel = model<TOrder>("Order", orderSchema);
