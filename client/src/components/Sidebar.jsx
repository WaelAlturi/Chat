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
    <div className="join join-vertical w-1/6 h-full p-10 overflow-y-auto bg-base-200 shadow-2xl">
      {users.map((user) => (
        <button
          key={user._id}
          className="avatar flex justify-center items-center h-1/12 w-5/6 p-3 transition delay-75 ease-in-out hover:bg-accent-content focus:bg-accent-content "
          onClick={() => {
            setReceiverSelected(user);
            messages(user._id);
          }}
        >
          <div className="rounded-full w-2/6 ">
            <img src={user.avatar} />
          </div>
          <span className="w-2/6 text-center">{user.username}</span>
        </button>
      ))}
    </div>
  );
}
