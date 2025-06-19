import axiosInstance from "../utils/axiosInstance";
import useAuth from "./useAuth";
import { create } from "zustand";

const messagesStore = create(() => ({
  messageReceiver: async (receiver) => {
    try {
      const token = useAuth.getState().authUser?.token;
      debugger;
      await axiosInstance.post("/newmessage", receiver, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      debugger;
    } catch (error) {
      console.error(error.response.data);
    }
  },
}));
export default messagesStore;
