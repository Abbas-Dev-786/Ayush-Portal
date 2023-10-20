import axios from "axios";

const DEFAULT_ERROR_MESSAGE = "Network Error or Something went wrong.";

export const baseURL = import.meta.env.DEV
  ? "http://127.0.0.1:8899/api/v1"
  : "https://real-tunic-dove.cyclic.cloud/api/v1";

const customRequest = axios.create({ baseURL });
customRequest.interceptors.request.use((config) => {
  const accessToken = JSON.parse(localStorage.getItem("user"))?.token;

  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }

  return config;
});

export const registerUser = async (data) => {
  try {
    await customRequest.post(`/auth/register`, data);
  } catch (err) {
    const message = err?.response?.data?.message || DEFAULT_ERROR_MESSAGE;
    throw Error(message);
  }
};

export const LoginUser = async (data) => {
  try {
    const res = await customRequest.post(`/auth/login`, data);

    return res.data.data;
  } catch (err) {
    const message = err?.response?.data?.message || DEFAULT_ERROR_MESSAGE;
    throw Error(message);
  }
};

export const verifyEmail = async ({ queryKey }) => {
  try {
    const res = await customRequest.get(`/auth/verifyEmail/${queryKey[1]}`);
    return res.data.message;
  } catch (err) {
    const message = err?.response?.data?.message || DEFAULT_ERROR_MESSAGE;
    throw Error(message);
  }
};

export const forgotPassword = async (data) => {
  try {
    await customRequest.post(`/auth/forgotPassword`, data);
  } catch (err) {
    const message = err?.response?.data?.message || DEFAULT_ERROR_MESSAGE;
    throw Error(message);
  }
};

export const resetPassword = async ({ password, confirmPassword, token }) => {
  try {
    await customRequest.patch(`/auth/resetPassword/${token}`, {
      password,
      confirmPassword,
    });
  } catch (err) {
    const message = err?.response?.data?.message || DEFAULT_ERROR_MESSAGE;
    throw Error(message);
  }
};

export const getAllChats = async () => {
  try {
    const res = await customRequest.get("/messages");
    return res.data.data;
  } catch (err) {
    const message = err?.response?.data?.message || DEFAULT_ERROR_MESSAGE;
    throw Error(message);
  }
};

export const getMessages = async ({ queryKey }) => {
  try {
    const res = await customRequest.get(`/messages/${queryKey[1]}`);
    return res.data.data;
  } catch (err) {
    const message = err?.response?.data?.message || DEFAULT_ERROR_MESSAGE;
    throw Error(message);
  }
};

export const getAllUsers = async () => {
  try {
    const res = await customRequest.get("/users");
    return res.data.data.docs;
  } catch (err) {
    const message = err?.response?.data?.message || DEFAULT_ERROR_MESSAGE;
    throw Error(message);
  }
};

export const createMeeting = async (data) => {
  try {
    const res = await customRequest.post(`/meetings`, data);
    return res.data.data;
  } catch (err) {
    const message = err?.response?.data?.message || DEFAULT_ERROR_MESSAGE;
    throw Error(message);
  }
};

export const joinMeeting = async ({ queryKey }) => {
  try {
    const res = await customRequest.get(`/meetings/join/${queryKey[1]}`);
    return res.data.data;
  } catch (err) {
    const message = err?.response?.data?.message || DEFAULT_ERROR_MESSAGE;
    throw Error(message);
  }
};
