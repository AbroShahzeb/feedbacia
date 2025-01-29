import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL;

export const getProductById = async (productId) => {
  try {
    const response = await axios.get(`${baseUrl}/product/${productId}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};
