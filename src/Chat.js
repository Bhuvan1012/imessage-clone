import React, { useState, useEffect } from "react";
import "./Chat.css";
import MicNoneIcon from "@mui/icons-material/MicNone";
import { IconButton } from "@mui/material";
import Message from "./Message";
import { useSelector } from "react-redux";
import FlipMove from "react-flip-move";
import { selectChatName, selectChatId } from "./features/chatSlice";
import { selectUser } from "./features/userSlice";
import db from "./firebase";
import firebase from "firebase";
import textFormatting from "./utils";

export default function Chat() {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);
  const chatName = useSelector(selectChatName);
  const chatId = useSelector(selectChatId);
  const user = useSelector(selectUser);

  useEffect(() => {
    if (chatId) {
      db.collection("chats")
        .doc(chatId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMessages(
            snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
          )
        );
    }
  }, [chatId]);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("chats").doc(chatId).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: inputValue,
      uid: user.uid,
      email: user.email,
      photo: user.photo,
      displayName: user.displayName,
    });
    setInputValue("");
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
        <FlipMove>
          {messages.map(({ id, data }) => (
            <Message key={id} id={id} contents={data} />
          ))}
        </FlipMove>
      </div>
      <div className="chat__input">
        <form>
          <input
            type="text"
            placeholder="Send message"
            onChange={(e) => setInputValue(e.target.value)}
            value={textFormatting(inputValue)}
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
