import { useState } from "react";
import messageStore from "../Store/messageStore.js";
import ChatBox from "../components/ChatBox.jsx";
import Users from "../components/Sidebar.jsx";
import Header from "../components/Header.jsx";
import useAuth from "../Store/useAuth.js";

function Home() {
  const { authUser } = useAuth();
  useAuth();
  const [data, setData] = useState({
    receverUsername: "",
    content: "",
  });
  const { messageReceiver } = messageStore();
  const handleMessageRecevier = () => {
    messageReceiver(data);
  };
  return (
    <div className="h-screen w-full">
      <div className=" w-full h-1/12">
        <Header className />
      </div>
      <div className="flex w-full h-11/12">
        <Users />
        <ChatBox
          userName={authUser.user.username}
          receiverName="JohnDoe"
          content="Hello there!"
          time="2025-06-30 20:05"
        />
      </div>
    </div>
  );
}
export default Home;
