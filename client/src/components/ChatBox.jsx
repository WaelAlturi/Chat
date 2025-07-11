import { useEffect, useRef, useState } from "react";
import messagesStore from "../Store/messageStore.js";
import useAuth from "../Store/useAuth.js";
export default function ChatBox() {
  const { authUser } = useAuth();
  const { receiverSelected, messagesData, messageReceiver, messages } =
    messagesStore();
  const [inputValue, setInputValue] = useState("");
  const bottomRef = useRef(null);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "auto" }); // or "smooth"
  }, [messagesData]);

  return (
    <div className="h-full w-5/6 flex flex-col justify-between p-4 rounded-md bg-base-300 shadow-xl">
      <div className="flex flex-col overflow-y-auto h-[75vh] p-4">
        {messagesData?.map((msg, index) => {
          const isSender = msg.sender === authUser?.user?._id;
          return (
            <div
              key={index}
              className={`chat ${isSender ? "chat-start" : "chat-end"}`}
            >
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    src={
                      isSender
                        ? authUser?.user?.avatar
                        : receiverSelected?.avatar
                    }
                    alt="User avatar"
                  />
                </div>
              </div>
              <div className="chat-header">
                {isSender
                  ? authUser?.user?.username
                  : receiverSelected?.username}
                <time className="text-xs opacity-50 ml-2">
                  {new Date(msg.timestamp).toLocaleTimeString()}
                </time>
              </div>
              <div className="chat-bubble bg-accent-content">{msg.content}</div>
            </div>
          );
        })}
        <div ref={bottomRef} />
      </div>

      <div className="pt-4">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="input input-ghost input-lg input-accent w-full"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className="btn btn-ghost btn-accent"
            onClick={async () => {
              await messageReceiver(inputValue);
              setInputValue("");
              messages();
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
