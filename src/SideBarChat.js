import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import "./SideBarChat.css";
import { useDispatch } from "react-redux";
import { setChat } from "./features/chatSlice";
import db from "./firebase";
import moment from "moment";

export default function SideBarChat({ id, chatName }) {
  const dispatch = useDispatch();
  const [chatInfo, setChatInfo] = useState([]);

  useEffect(() => {
    db.collection("chats")
      .doc(id)
      .collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setChatInfo(snapshot.docs.map((doc) => doc.data()))
      );
  }, [id]);
  return (
    <div
      onClick={() =>
        dispatch(
          setChat({
            chatId: id,
            chatName,
          })
        )
      }
      className="sidebarChat"
    >
      <Avatar src={chatInfo[0]?.photo} alt="person avatar" />
      <div className="sidebarChat__info">
        <h3>{chatName}</h3>
        <p>{chatInfo[0]?.message}</p>
        <small>
          {moment(new Date(chatInfo[0]?.timestamp?.toDate())).fromNow(true)}
        </small>
      </div>
    </div>
  );
}
