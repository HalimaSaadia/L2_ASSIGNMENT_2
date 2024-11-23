import express from "express";
import { createBike, deleteBike, getAllBikes, getSingleBike, updateSingleBike } from "./product.controller";
const router = express.Router();

router.get("/", getAllBikes);
router.post("/", createBike);
router.get("/:productId", getSingleBike)
router.put("/:productId", updateSingleBike)
router.delete("/:productId", deleteBike);

export const productRoute = router