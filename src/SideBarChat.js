import React from "react";
import { Avatar } from "@mui/material";
import "./SideBarChat.css";
import { useDispatch } from "react-redux";
import { setChat } from "./features/chatSlice";

export default function SideBarChat({ id, chatName }) {
  const dispatch = useDispatch();
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
      <Avatar />
      <div className="sidebarChat__info">
        <h3>{chatName}</h3>
        <p>Last message sent...</p>
        <small>timestamp</small>
      </div>
    </div>
  );
}
