import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import THEME from "../theme.dashboard";
import GetResources from "./getResources";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import * as ACTION from "../../../services/actions";

function Content(props) {
  const { classes } = props;
  const [MAKYHD, setMAKYHD] = useState("");
  const [resources, setresources] = useState(
    JSON.parse(localStorage.getItem("resources")) || []
  );

  const handleChange = (e) => {
    setMAKYHD(e.target.value);
  };

  const handleClick = async () => {
    const resources = await ACTION.getResources(MAKYHD);
    if (resources.Data)
      switch (resources.Data) {
        case "ERR1":
          toast.error("Sai tài khoản mật khẩu");
          setresources([]);
          break;
        case "ERR2":
          toast.error("Lỗi truy vấn");
          setresources([]);
          break;
        case "ERR3":
          toast.error("Lỗi kết nối DB");
          setresources([]);
          break;
      }
    else {
      setresources(resources);
      localStorage.setItem("resources", JSON.stringify(resources));
    }
  };

  return (
    <Paper className={classes.paper}>
      <AppBar
        className={classes.searchBar}
        position="static"
        color="default"
        elevation={0}
      >
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <SearchIcon className={classes.block} color="inherit" />
            </Grid>
            <Grid item xs>
              <TextField
                onChange={(e) => handleChange(e)}
                fullWidth
                placeholder="Search by MAKYHD"
                InputProps={{
                  disableUnderline: true,
                  className: classes.searchInput,
                }}
              />
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                className={classes.addUser}
                onClick={handleClick}
              >
                Search
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
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.contentWrapper}>
        <GetResources resources={resources} makyhd={MAKYHD} />
      </div>
    </Paper>
  );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(THEME.contentstyles)(Content);
