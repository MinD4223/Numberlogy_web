import { CloseOutlined, MessageOutlined } from "@ant-design/icons";
import "./Chat.css";

function Chat() {
  const showChat = () => {
    const chat_box = document.querySelector(".chat-box");
    chat_box.style.display = "flex";
  };
  const hideChat = () => {
    const chat_box = document.querySelector(".chat-box");
    chat_box.style.display = "none";
  };
  return (
    <>
      <div className="chat-icon" onClick={showChat}>
        <MessageOutlined />
      </div>
      <div className="chat-box">
        <div className="chat-header">
          Hỗ trợ trực tuyến{" "}
          <div className="chat-exit" onClick={hideChat}>
            <CloseOutlined />
          </div>
        </div>
        <div className="chat-history" id="chatHistory"></div>
        <div className="chat-input">
          <input type="text" id="chatInput" placeholder="Nhập tin nhắn..." />
          <button id="sendButton">Gửi</button>
        </div>
      </div>
    </>
  );
}

export default Chat;
