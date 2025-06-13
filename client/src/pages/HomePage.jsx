import { useState } from "react";
import messageStore from "../Store/messageStore.js";

function Home() {
  const [data, setData] = useState({
    receverUsername: "",
    content: "",
  });
  const { messageReceiver } = messageStore();
  const handleMessageRecevier = () => {
    messageReceiver(data);
  };
  return (
    <div className="h-1/2 w-1/2">
      <h1>new message</h1>
      UserName
      <input
        className="text-white"
        type="text"
        onChange={(e) => setData({ ...data, receverUsername: e.target.value })}
      />
      Content:
      <input
        className="text-white"
        type="text"
        onChange={(e) => setData({ ...data, content: e.target.value })}
      />
      <button onClick={handleMessageRecevier}>Login</button>
    </div>
  );
}
export default Home;
