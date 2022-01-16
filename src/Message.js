import { Avatar } from "@mui/material";
import React from "react";
import "./Message.css";
export default function Message({ id, contents }) {
  return (
    <div className="message">
      <Avatar />
      <p>i'm a message</p>
      <small>timestamp</small>
    </div>
  );
}
