import { Request, Response } from "express";
import {
  createBikeInDB,
  deleteBikeFromDB,
  getAllBikesFromDB,
  getSingleBikeFromDB,
  updateSingleBikeInDB,
} from "./product.service";

// create bike
export const createBike = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const result = await createBikeInDB(data);
    res.status(200).json({
      message: "Bike created successfully",
      success: true,
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      message: "Failed To Create Bike",
      success: false,
      error: err,
    });
  }
};

// find all bikes
export const getAllBikes = async (req: Request, res: Response) => {
  try {
    const result = await getAllBikesFromDB();
    res.status(200).json({
      message: "Bikes retrieved successfully",
      success: true,
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      message: "Failed To Get Bikes",
      success: false,
      error: err,
    });
  }
};

// Get Single Bike
export const getSingleBike = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await getSingleBikeFromDB(productId);
    res.status(200).json({
      message: "Bike retrieved successfully",
      success: true,
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      message: "Failed To Get Bike",
      success: false,
      error: err,
    });
  }
};

// update bike
export const updateSingleBike = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updatedData = req.body;
    const result = await updateSingleBikeInDB(productId, updatedData);
    res.status(200).json({
      message: "Bike Updated successfully",
      success: true,
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      message: "Failed To Update Bike",
      success: false,
      error: err,
    });
  }
};

// Delete Single Bike
export const deleteBike = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await deleteBikeFromDB(productId);
    res.status(200).json({
      message: "Bike Deleted Successfully",
      success: true,
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      message: "Failed To Delete Bike",
      success: false,
      error: err,
    });
  }
};
