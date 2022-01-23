import {
  Chat,
  DonutLargeOutlined,
  MoreVert,
  Search,
} from "@mui/icons-material";
import { Avatar, IconButton, InputAdornment, TextField } from "@mui/material";
import React from "react";
import SidebarChat from "../SidebarChat";
import classes from "./index.module.css";

const Sidebar = () => {
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
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
};

export default Sidebar;
