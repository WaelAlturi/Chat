import axiosInstance from "../utils/axiosInstance";
import useAuth from "./useAuth";
import { create } from "zustand";
const messagesStore = create((set, get) => ({
  receiverSelected: null,
  setReceiverSelected: (id) => set({ receiverSelected: id }),
  messagesData: [],
  messages: async () => {
    try {
      const token = useAuth.getState().authUser?.token;
      const receiver = get().receiverSelected;
      const response = await axiosInstance.get(`/${receiver._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      set({ messagesData: response.data });
    } catch (error) {
      console.error(error.response?.data);
    }
  },
  messageReceiver: async (content) => {
    try {
      const token = useAuth.getState().authUser?.token;
      const receiver = get().receiverSelected;
      await axiosInstance.post(
        "/newmessage",
        {
          receiver: receiver.username,
          content,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      set((state) => ({
        messagesData: [...state.messagesData, res.data],
      }));
    } catch (error) {
      console.error(error.response?.data);
    }
  },
}));
export default messagesStore;
