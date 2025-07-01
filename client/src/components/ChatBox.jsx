import messagesStore from "../Store/messageStore.js";
import useAuth from "../Store/useAuth.js";
export default function ChatBox() {
  const { authUser } = useAuth();
  const { receiverSelected, messages } = messagesStore();
  return (
    <div className=" h-full w-5/6 flex flex-col justify-between p-4 rounded-md bg-base-300 shadow-xl">
      <div className="flex flex-col-reverse overflow-y-auto h-[75vh] p-4">
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src={authUser?.user?.avatar}
              />
            </div>
          </div>
          <div className="chat-header">
            {authUser?.user?.username}
            <time className="text-xs opacity-50 ">time</time>
          </div>
          <div className="chat-bubble bg-accent-content">content</div>
        </div>

        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src={receiverSelected?.avatar}
              />
            </div>
          </div>
          <div className="chat-header">
            {receiverSelected?.username}
            <time className="text-xs opacity-50">time</time>
          </div>
          <div className="chat-bubble bg-accent-content">
            {messages[0]?.content}
          </div>
        </div>
      </div>

      <div className="pt-4">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="input input-ghost input-lg input-accent w-full"
          />
          <button className="btn btn-ghost btn-accent">Send</button>
        </div>
      </div>
    </div>
  );
}
