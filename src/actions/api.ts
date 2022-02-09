import type { Flight } from "@/models/models";
import flightData from "../data/flightData.json";
import orderData from "../data/orderData.json";

export const getFlightData = async (): Promise<Flight[] | null> => {
  try {
    return await flightData;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getOrderData = async (): Promise<any> => {
  try {
    return await orderData;
  } catch (error) {
    console.log(error);
    return null;
  }
};
