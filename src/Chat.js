import React, { useState, useEffect } from "react";
import "./Chat.css";
import MicNoneIcon from "@mui/icons-material/MicNone";
import { IconButton } from "@mui/material";
import Message from "./Message";
import { useSelector } from "react-redux";
import { selectChatName, selectChatId } from "./features/chatSlice";
import db from "./firebase";
import { onSnapshot, doc, collection, orderBy } from "firebase/firestore";

export default function Chat() {
  const [input, setInput] = useState("");
  const chatName = useSelector(selectChatName);
  const chatId = useSelector(selectChatId);
  const [messages, setMessages] = useState([]);

  // useEffect(() => {
  //   const chatsRef = collection(db, "chats");
  //   onSnapshot(doc(chatsRef, chatId, "messages"), (snapshot) =>
  //     setMessages(
  //       snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
  //     )
  //   )
  //   console.log("chatsRef", chatsRef);;
  // }, [chatId]);

  const sendMessage = (e) => {
    e.preventDefault();
    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <h4>
          To: <span className="chat__name">{chatName}</span>
        </h4>
        <strong>Details</strong>
      </div>
      <div className="chat__messages">
        <Message />
        <Message />
        <Message />
      </div>
      <div className="chat__input">
        <form>
          <input
            type="text"
            placeholder="Send message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" onClick={sendMessage}>
            Send message
          </button>
        </form>
        <IconButton>
          <MicNoneIcon />
        </IconButton>
      </div>
    </div>
  );
}
