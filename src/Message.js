import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./Message.css";
export default function Message({
  id,
  contents: { timestamp, uid, displayName, email, photo, message },
}) {
  const user = useSelector(selectUser);
  return (
    <div className={`message ${user.email === email && "message__sender"}`}>
      <Avatar src={photo} alt="person's avatar" className="message__photo"/>
      <p>{message}</p>
      <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
    </div>
  );
}
