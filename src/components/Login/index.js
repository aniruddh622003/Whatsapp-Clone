import React from "react";
import classes from "./index.module.css";
import { Chat } from "@mui/icons-material";
import { Button } from "@mui/material";
import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { useSnackbar } from "notistack";
import { useUserValue } from "../../providers/UserProvider";
import { actionTypes } from "../../reducer";

const Login = () => {
  const [{}, dispatch] = useUserValue();
  const { enqueueSnackbar } = useSnackbar();
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((res) =>
        dispatch({
          type: actionTypes.SET_USER,
          user: res.user,
        })
      )
      .catch((err) => enqueueSnackbar(err.message, { variant: "error" }));
  };
  return (
    <div className={classes.login}>
      <div className={classes.container}>
        <Chat sx={{ fontSize: "200px", color: "hsl(221, 70%, 33%)" }} />
        <div className={classes.text}>
          <h1>Sign In to Chat</h1>
        </div>
        <Button variant="contained" className={classes.button} onClick={signIn}>
          Sign in with Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
