import {
  Chat,
  DonutLargeOutlined,
  MoreVert,
  Search,
} from "@mui/icons-material";
import { Avatar, IconButton, InputAdornment, TextField } from "@mui/material";
import { onSnapshot, collection } from "firebase/firestore";
import React from "react";
import db from "../../firebase";
import SidebarChat from "../SidebarChat";
import classes from "./index.module.css";

const Sidebar = () => {
  const [rooms, setRooms] = React.useState([]);

  React.useEffect(
    () =>
      onSnapshot(collection(db, "rooms"), (snap) =>
        setRooms(snap.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      ),
    []
  );

  return (
    <div className={classes.sidebar}>
      <div className={classes.header}>
        <Avatar />
        <div className={classes.headerRight}>
          <IconButton>
            <DonutLargeOutlined sx={{ fontSize: "24px" }} />
          </IconButton>
          <IconButton>
            <Chat sx={{ fontSize: "24px" }} />
          </IconButton>
          <IconButton>
            <MoreVert sx={{ fontSize: "24px" }} />
          </IconButton>
        </div>
      </div>
      <div className={classes.search}>
        <TextField
          placeholder="Search or start a new chat"
          id="outlined-start-adornment"
          fullWidth
          sx={{ backgroundColor: "#fff" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div className={classes.chat}>
        <SidebarChat addNewButton />
        {rooms.map((room) => (
          <SidebarChat key={room.id} id={room.id} name={room.data.name} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
