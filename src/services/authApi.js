import axios from "axios";

console.log(import.meta.env.VITE_API_URL);

const baseUrl = import.meta.env.VITE_API_URL;

export const loginUser = async (body) => {
  try {
    const response = await axios.post(`${baseUrl}/user/login`, body, {
      withCredentials: true,
    });
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};

export const signupUser = async (body) => {
  try {
    const response = await axios.post(`${baseUrl}/user/signup`, body);
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};
