import React, { useEffect, useState } from "react";
import "./SideBar.css";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import RateReviewIcon from "@mui/icons-material/RateReview";
import SideBarChat from "./SideBarChat";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import db, { auth } from "./firebase";
import textFormatting from "./utils";

export default function SideBar() {
  const user = useSelector(selectUser);
  const [chats, setChats] = useState([]);

  useEffect(() => {
    db.collection("chats").onSnapshot((snapshot) =>
      setChats(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
  }, []);

  const handleLogout = () => {
    auth.signOut().catch((error) => alert(error.message));
  };

  const addChat = async () => {
    let chatName = prompt("Kindly, enter a channel name");
    if (chatName) {
      return db.collection("chats").add({ chatName: textFormatting(chatName) });
    }
    return;
  };
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar
          src={user.photo}
          alt="User Avatar"
          onClick={handleLogout}
          className="sidebar__avatar"
        />
        <div className="sidebar__input">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
        <IconButton onClick={addChat}>
          <RateReviewIcon />
        </IconButton>
      </div>
      <div className="sidebar__chats">
        {chats.map(({ id, data: { chatName } }) => (
          <SideBarChat key={id} id={id} chatName={chatName} />
        ))}
      </div>
    </div>
  );
}
