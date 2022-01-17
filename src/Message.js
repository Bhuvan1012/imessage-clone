import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { selectUser } from "./features/userSlice";
import "./Message.css";
const Message = forwardRef(
  (
    { id, contents: { timestamp, uid, displayName, email, photo, message } },
    ref
  ) => {
    const user = useSelector(selectUser);
    return (
      <div
        ref={ref}
        className={`message ${user.email === email && "message__sender"}`}
      >
        <Avatar src={photo} alt="person's avatar" className="message__photo" />
        <p>{message}</p>
        <small>
          {moment(new Date(timestamp?.toDate())).format("DD/MM/YYYY hh:mm:ss A")}
        </small>
      </div>
    );
  }
);

export default Message;
