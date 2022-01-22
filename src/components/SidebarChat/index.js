import { Avatar } from "@mui/material";
import React from "react";
import classes from "./index.module.css";

const SidebarChat = ({ addNewButton }) => {
  const [seed, setSeed] = React.useState("");

  React.useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter name for the chat.");
    if (roomName) {
      // Do db stuff
    }
  };

  return !addNewButton ? (
    <div className={classes.sidebarChat}>
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className={classes.info}>
        <h2>Room name</h2>
        <p>Last message...</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className={classes.sidebarChat}>
      <h4>Add new Chat</h4>
    </div>
  );
};

export default SidebarChat;
