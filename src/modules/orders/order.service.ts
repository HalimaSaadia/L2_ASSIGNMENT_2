import { TOrder } from "./order.interface";
import { orderModel } from "./order.model";

export const createOrderInDB = async (orderData: TOrder) => {
  const result = await orderModel.create(orderData);
  return result;
};

export const calculateTotalRevenueInDB = async () => {
  const result = await orderModel.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: "$totalPrice" },
      },
    },
    {$project:{_id: false}}
  ]);
  return result;
};
