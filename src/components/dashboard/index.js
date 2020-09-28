import React, { useState } from "react";
import PropTypes from "prop-types";
import { ThemeProvider, withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Hidden from "@material-ui/core/Hidden";
import Navigator from "./navigator.dashboard";
import Resources from "./resources.tab";
import Customer from "./customers.tab";
import Update from "./update.tab";
import Header from "./header.dashboard";
import THEME from "./theme.dashboard";
import Copyright from "../Login/copyRight";

function Dashboard(props) {
  const { classes } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  const handleTab = (event, newValue) => {
    console.log("CLICK ON PARENT");
    setSelectedTab(newValue);
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={THEME.theme}>
      <div className={classes.root}>
        <CssBaseline />
        <nav className={classes.drawer}>
          <Hidden smUp implementation="js">
            <Navigator
              PaperProps={{ style: { width: THEME.drawerWidth } }}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
            />
          </Hidden>
          <Hidden xsDown implementation="css">
            <Navigator PaperProps={{ style: { width: THEME.drawerWidth } }} />
          </Hidden>
        </nav>
        <div className={classes.app}>
          <Header
            onDrawerToggle={handleDrawerToggle}
            selectedTab={selectedTab}
            handleChangeTab={handleTab}
          />
          {selectedTab === 0 && (
            <main className={classes.main}>
              <Resources />
            </main>
          )}
          {selectedTab === 1 && (
            <main className={classes.main}>
              <Customer />
            </main>
          )}
          {selectedTab === 2 && (
            <main className={classes.main}>
              <Update />
            </main>
          )}
          <footer className={classes.footer}>
            <Copyright />
          </footer>
        </div>
      </div>
    </ThemeProvider>
  );
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(THEME.dasboardstyles)(Dashboard);
