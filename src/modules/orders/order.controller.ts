import { Request, Response } from "express";
import { calculateTotalRevenueInDB, createOrderInDB } from "./order.service";
import { productModel } from "../Products/product.model";

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { email, product: productId, quantity } = req.body;
    const product = await productModel.findById(productId);
  
    if (product) {
      console.log(product.quantity, quantity)
      if (product.quantity < quantity) {
        res.status(500).json({
            message: "Stock is Not sufficient to Create Your Order",
            success: false
          });
      } else {
        
        const totalPrice = quantity * product?.price;
        product.quantity = product?.quantity - quantity;
        if (product?.quantity === 0) {
          product.inStock = false;
        }
        product?.save();
        const order = {
          email,
          product: productId,
          quantity,
          totalPrice,
        };
        const result = await createOrderInDB(order);
        res.send({
          message: "Order Create successfully",
          success: true,
          data: result,
        });
      }
    }
    else{
      res.send({
        success:false,
        message:"Product Not Found"
      })
    }
  } catch (err) {
    res.status(500).json({
      message: "Failed To Create Order",
      success: false,
      error: err,
    });
  }
};

export const calculateRevenue = async (req: Request, res: Response) => {
  try {
    const result = await calculateTotalRevenueInDB();
    res.status(200).json({
      success: true,
      message: "Successfully calculate revenue",
      data: {
        totalRevenue: result[0]
      },
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed To Calculate Total Revenue",
      error: err,
    });
  }
};
