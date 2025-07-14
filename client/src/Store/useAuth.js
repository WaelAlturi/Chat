import axiosInstance from "../utils/axiosInstance";
import { create } from "zustand";
import { io } from "socket.io-client";
import toast from "react-hot-toast";
const BASE_URL = "http://localhost:3000";
const useAuth = create((set, get) => ({
  authUser: null,
  socket: null,
  login: async (data) => {
    try {
      const result = await axiosInstance.post("/account/signin", data);
      set({ authUser: result.data });
      toast.success("Logged in successfully");
      get().connectSocket();
    } catch (error) {
      toast.error(error.response.data);
    }
  },
  register: async (data) => {
    try {
      await axiosInstance.post("/account/signup", data);
      toast.success("Register Completed");
    } catch (error) {
      toast.error(error.response.data);
    }
  },
  logout: async () => {
    try {
      await axiosInstance.post("/account/logout"); // optional but fine
      localStorage.removeItem("token");
      delete axiosInstance.defaults.headers.common["Authorization"];

      set({ authUser: null });
      get().disconnectSocket();

      toast.success("Logged out successfully");
    } catch (error) {
      toast.error(error.response?.data?.message || "Logout failed");
    }
  },
  connectSocket: () => {
    const { authUser } = get();
    if (!authUser || get().socket?.connected) return;

    const socket = io(BASE_URL, {
      query: {
        userId: authUser._id,
      },
    });
    socket.connect();
    set({ socket: socket });
  },
  disconnectSocket: () => {
    if (get().socket?.connected) get().socket.disconnect();
  },
}));
export default useAuth;
