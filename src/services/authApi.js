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
    const response = await axios.post(`${baseUrl}/user/signup`, body, {
      withCredentials: true,
    });
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};

export const updateMe = async (body) => {
  try {
    const response = await axios.patch(`${baseUrl}/user/update-me`, body, {
      withCredentials: true,
    });
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};

export const updatePassword = async (body) => {
  try {
    const response = await axios.patch(
      `${baseUrl}/user/update-password`,
      body,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};
