import { useState } from "react";
import messageStore from "../Store/messageStore.js";
import ChatBox from "../components/ChatBox.jsx";
import Users from "../components/Sidebar.jsx";
import Header from "../components/Header.jsx";
import useAuth from "../Store/useAuth.js";
import { Toaster } from "react-hot-toast";

function Home() {
  const { authUser } = useAuth();
  useAuth();
  return (
    <div className="h-screen w-full flex flex-col">
      <div className="h-auto">
        <Header />
      </div>

      <div className="flex-1 flex flex-row overflow-hidden">
        <div className="w-1/3 lg:w-1/4 xl:w-1/6 max-h-full overflow-y-auto">
          <Users />
        </div>
        <div className="flex-1 overflow-hidden">
          <ChatBox userName={authUser.user.username} />
        </div>
      </div>

      <Toaster />
    </div>
  );
}
export default Home;
