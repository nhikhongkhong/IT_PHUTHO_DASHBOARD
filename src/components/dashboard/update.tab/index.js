import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Grid from "@material-ui/core/Grid";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import * as ACTION from "../../../services/actions";

const useStyles = makeStyles((theme) => ({
  paper: {
    maxWidth: 936,
    margin: "auto",
    marginBottom: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 5),
  },
}));

function Update() {
  const [csmoi, setCsmoi] = useState("");
  const [idtt, setIdtt] = useState("");
  const [makh, setMakh] = useState("");
  const [makyhd, setMakyhd] = useState("");

  const handleChange = (e, field) => {
    switch (field) {
      case "csmoi":
        setCsmoi(e.target.value);
        break;
      case "idtt":
        setIdtt(e.target.value);
        break;
      case "makh":
        setMakh(e.target.value);
        break;
      case "makyhd":
        setMakyhd(e.target.value);
        break;
    }
  };

  const handleClick = async () => {
    const res = await ACTION.updateCS(csmoi, idtt, makh, makyhd);
    console.log(res.Data);
    switch (res.Data) {
      case "ERR1":
        toast.error("Sai tài khoản mật khẩu");
        break;
      case "ERR2":
        toast.error("Lỗi truy vấn");
        break;
      case "ERR3":
        toast.error("Lỗi kết nối DB");
        break;
      case "ERR4":
        toast.error("Không có bản ghi nào trên DB");
        break;
      case "OK":
        toast.success("Update sucessfully");
        break;
    }
  };

  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PersonPinIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Update CS moi
        </Typography>
        <div className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={(e) => handleChange(e, "makh")}
                fullWidth
                name="makh"
                variant="outlined"
                required
                id="makh"
                label="MAKH"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={(e) => handleChange(e, "makyhd")}
                fullWidth
                variant="outlined"
                required
                id="makyhd"
                label="MAKYHD"
                name="makyhd"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => handleChange(e, "idtt")}
                fullWidth
                variant="outlined"
                required
                id="idtt"
                label="IDTT"
                name="idtt"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => handleChange(e, "csmoi")}
                fullWidth
                variant="outlined"
                required
                name="csmoi"
                label="CSMOI"
                id="csmoi"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            onClick={handleClick}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Update
          </Button>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </div>
    </Paper>
  );
}

export default Update;
