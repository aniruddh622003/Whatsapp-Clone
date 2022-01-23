import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  Search,
  Send,
} from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import React from "react";
import RecieverMessage from "./ChatMessage/Reciever";
import SenderMessage from "./ChatMessage/Sender";
import classes from "./index.module.css";

const Chat = () => {
  const [message, setMessage] = React.useState("");
  const [seed, setSeed] = React.useState("");

  React.useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    alert(`Yout typed -> ${message}`);
    setMessage("");
  };

  return (
    <div className={classes.chat}>
      <div className={classes.header}>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className={classes.headerInfo}>
          <h3>Room Name</h3>
          <p>Last Seen...</p>
        </div>
        <div className={classes.headerRight}>
          <IconButton>
            <Search />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className={classes.body}>
        <RecieverMessage />
        <SenderMessage />
      </div>
      <div className={classes.footer}>
        <InsertEmoticon />
        <form>
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            placeholder="Type a message"
          />
          <IconButton type="submit" onClick={sendMessage}>
            <Send />
          </IconButton>
        </form>
      </div>
    </div>
  );
};

export default Chat;
