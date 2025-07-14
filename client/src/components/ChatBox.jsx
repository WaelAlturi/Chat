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
    <div className="flex flex-col justify-between h-full w-full p-2 sm:p-4 bg-base-300 rounded-md shadow-xl">
      <div className="flex-1 overflow-y-auto p-2 sm:p-4 space-y-2">
        {messagesData?.map((msg, index) => {
          const isSender = msg.sender === authUser?.user?._id;
          return (
            <div
              key={index}
              className={`chat ${isSender ? "chat-start" : "chat-end"}`}
            >
              <div className="chat-image avatar">
                <div className="w-8 sm:w-10 rounded-full">
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
              <div className="chat-header text-sm sm:text-base">
                {isSender
                  ? authUser?.user?.username
                  : receiverSelected?.username}
                <time className="ml-2 text-xs opacity-50">
                  {new Date(msg.timestamp).toLocaleTimeString()}
                </time>
              </div>
              <div className="chat-bubble bg-accent-content break-words max-w-xs sm:max-w-md lg:max-w-xl">
                {msg.content}
              </div>
            </div>
          );
        })}
        <div ref={bottomRef} />
      </div>
      <div className="pt-2 sm:pt-4">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="input input-bordered input-accent w-full"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className="btn btn-accent"
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
