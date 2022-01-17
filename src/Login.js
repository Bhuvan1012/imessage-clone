import { Button } from "@mui/material";
import React from "react";

import { auth, provider } from "./firebase";
import "./Login.css";
import "./Login.css";
import iMessageLogo from "./assets/images/imessage-logo.png";

export default function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((err) => alert(err.message));
  };
  return (
    <div className="login">
      <div>
        <img src={iMessageLogo} alt="iMessage logo" />
        <h1>iMessage</h1>
      </div>
      <Button onClick={signIn}>Sign in</Button>
    </div>
  );
}
