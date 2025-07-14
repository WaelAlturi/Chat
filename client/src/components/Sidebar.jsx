import { useEffect } from "react";
import useUsers from "../Store/usersStore";
import messagesStore from "../Store/messageStore";

export default function Users() {
  const { users, fetchUsers } = useUsers();
  const { setReceiverSelected, messages } = messagesStore();
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div className="w-full h-full bg-base-200 p-4 space-y-2 shadow-inner">
      {users.map((user) => (
        <button
          key={user._id}
          className="flex items-center gap-3 p-2 rounded hover:bg-accent-content transition"
          onClick={() => {
            setReceiverSelected(user);
            messages();
          }}
        >
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={user.avatar} alt="avatar" />
            </div>
          </div>
          <span className="text-sm truncate">{user.username}</span>
        </button>
      ))}
    </div>
  );
}
