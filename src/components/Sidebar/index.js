import {
  Chat,
  DonutLargeOutlined,
  ExitToApp,
  MoreVert,
  Search,
} from "@mui/icons-material";
import { Avatar, IconButton, InputAdornment, TextField } from "@mui/material";
import { signOut } from "firebase/auth";
import { onSnapshot, collection } from "firebase/firestore";
import { useSnackbar } from "notistack";
import React from "react";
import db, { auth } from "../../firebase";
import { useUserValue } from "../../providers/UserProvider";
import { actionTypes } from "../../reducer";
import SidebarChat from "../SidebarChat";
import classes from "./index.module.css";

const Sidebar = () => {
  const [rooms, setRooms] = React.useState([]);
  const [{ user }, dispatch] = useUserValue();

  React.useEffect(
    () =>
      onSnapshot(collection(db, "rooms"), (snap) =>
        setRooms(snap.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      ),
    []
  );

  const { enqueueSnackbar } = useSnackbar();

  const _signOut = () => {
    signOut(auth)
      .then(() => {
        dispatch({
          type: actionTypes.SET_USER,
          user: null,
        });
        enqueueSnackbar("Signed out", { variant: "success" });
      })
      .catch((err) => enqueueSnackbar(err.message, { variant: "error" }));
  };

  return (
    <div className={classes.sidebar}>
      <div className={classes.header}>
        <Avatar src={user?.photoURL} />
        <div className={classes.headerRight}>
          <IconButton>
            <DonutLargeOutlined sx={{ fontSize: "24px" }} />
          </IconButton>
          <IconButton>
            <Chat sx={{ fontSize: "24px" }} />
          </IconButton>
          <IconButton onClick={_signOut}>
            <ExitToApp sx={{ fontSize: "24px" }} />
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
