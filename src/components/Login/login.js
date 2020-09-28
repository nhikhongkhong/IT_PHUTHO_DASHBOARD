import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Copyright from "./copyRight";

import auth from "../../services/auth"

import useStyles from "./login.theme"

export default function LogIn(props) {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [err, setErr] = useState(false);
  const [errText, setErrText] = useState("");

  const handleUserNameChange = (e) => {
    const name = e.target.value;
    setUserName(name)
  }

  const handlePassWordChange = (e) => {
    const passWord = e.target.value;
    setPassWord(passWord)
  };

  console.log("authenticatde API login page", auth.isAuthenticated())

  const handleClick = async () => {
    const authObj = { userName: userName, passWord: passWord }
    const res = await auth.login(authObj);

    if (res.Data === "ERR1") {
      setErr(true);
      setErrText("Incorrect password or username");
    }

    if (auth.isAuthenticated())
      props.history.push({
        pathname: "/dashboard",
      });
  }

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          onChange={e => handleUserNameChange(e)}
          label="Username"
        />
        <TextField
          error={err}
          helperText={errText}
          variant="outlined"
          type="password"
          margin="normal"
          required
          fullWidth
          onChange={e => handlePassWordChange(e)}
          label="Password"
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={handleClick}

        >
          Log In
          </Button>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}