import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { useSnackbar } from "notistack";
import React from "react";
import { Link } from "react-router-dom";
import db from "../../firebase";
import classes from "./index.module.css";

const SidebarChat = ({ id, addNewButton, name }) => {
  const [seed, setSeed] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [roomName, setRoomName] = React.useState("");

  const { enqueueSnackbar } = useSnackbar();

  React.useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = async () => {
    if (roomName) {
      // Do db stuff
      await addDoc(collection(db, "rooms"), { name: roomName });
      setOpen(false);
      setRoomName("");
      enqueueSnackbar("Room Created", { variant: "success" });
    }
  };

  return !addNewButton ? (
    <Link to={`/rooms/${id}`}>
      <div className={classes.sidebarChat}>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className={classes.info}>
          <h2>{name}</h2>
          <p>Last message...</p>
        </div>
      </div>
    </Link>
  ) : (
    <>
      <div onClick={() => setOpen(true)} className={classes.sidebarChat}>
        <h4>Add new Chat</h4>
      </div>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add new chat room</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter name for your new room
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            label="Room Name"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={() => createChat(false)}>
            Add Room
          </Button>
          <Button color="error" onClick={() => setOpen(false)}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default SidebarChat;
