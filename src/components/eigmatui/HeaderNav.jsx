import "../../styles/css/App.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
} from "@material-ui/core";
import HelpIcon from "@material-ui/icons/HelpOutline";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Logo from "../../styles/img/logowhite.svg";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    width: 68,
    marginRight: theme.spacing(0.5),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    height: 24,
    marginY: 2,
  },
}));

export default function HeaderNav(props) {
  const mode = props.mode;
  const setMode = props.setMode;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);  

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
    if (event.currentTarget.id){
      setMode(event.currentTarget.id);
    }
  };  

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        {mode === "PhotoHelp" || mode === "ContactUs" ? (
          <IconButton
            edge="end"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => setMode("UploadPhotos")}
          >
            <ArrowBackIcon />
          </IconButton>
        ) : (
          <IconButton
            edge="end"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => setMode("SignIn")}
          >
            <img src={Logo} alt="EIG logo" className={classes.logo} />
          </IconButton>
        )}
        <Typography variant="h6" className={classes.title}>
          {mode === "SignIn"
            ? "Sign In"
            : mode === "ContactUs"
            ? " Contact Us"
            : mode === "PhotoHelp"
            ? "Photo Help"
            : mode === "SubmittedPhotos"
            ? "Photos Submitted"
            : "Upload Photos"}
        </Typography>

        {mode !== "SignIn" ? (
          <div>
            <IconButton
              edge="end"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <HelpIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem id="PhotoHelp" onClick={handleClose}>
                Photo Help
              </MenuItem>
              <MenuItem id="ContactUs" onClick={handleClose}>
                Contact Us
              </MenuItem>
            </Menu>
          </div>
        ) : null}
      </Toolbar>
    </AppBar>
  );
}
