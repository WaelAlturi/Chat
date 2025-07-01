import axiosInstance from "../utils/axiosInstance";
import useAuth from "./useAuth";
import { create } from "zustand";

const messagesStore = create((set) => ({
  receiverSelected: null,
  setReceiverSelected: (id) => set({ receiverSelected: id }),
  fetchMessages: [],
  messages: async (id) => {
    try {
      const token = useAuth.getState().authUser?.token;
      const response = await axiosInstance.get(`/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      set({ messages: response.data });
      debugger;
    } catch (error) {
      debugger;

      console.error(error.response?.data);
    }
  },
  messageReceiver: async () => {
    try {
      const token = useAuth.getState().authUser?.token;
      await axiosInstance.post("/newmessage", receiverSelected.username, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error(error.response.data);
    }
  },
}));
export default messagesStore;
