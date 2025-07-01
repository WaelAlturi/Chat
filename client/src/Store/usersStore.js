import axiosInstance from "../utils/axiosInstance";
import useAuth from "./useAuth";
import { create } from "zustand";
const useUsers = create((set) => ({
  users: [],
  fetchUsers: async () => {
    try {
      const token = useAuth.getState().authUser?.token;
      const username = useAuth.getState().authUser?.user.username;
      const response = await axiosInstance.get("/user/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const filteredUsers = response.data.filter(
        (item) => item.username !== username
      );

      set({ users: filteredUsers });
    } catch (error) {
      console.error(error.response?.data || error.message);
    }
  },
}));

export default useUsers;
