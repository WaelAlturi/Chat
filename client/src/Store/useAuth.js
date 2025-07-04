import axiosInstance from "../utils/axiosInstance";
import { create } from "zustand";

const useAuth = create((set) => ({
  authUser: null,
  login: async (data) => {
    try {
      const result = await axiosInstance.post("/account/signin", data);
      set({ authUser: result.data });
    } catch (error) {
      console.error("Login failed:", error.response.data);
    }
  },
  register: async (data) => {
    try {
      await axiosInstance.post("/account/signup", data);
    } catch (error) {
      console.error("Register Failed:", error.response.data);
    }
  },
}));
export default useAuth;
