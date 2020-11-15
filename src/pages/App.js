import "../styles/css/App.css";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "../styles/theme";
import Content from "../components/Content";
import Header from "../components/Header";
import { Grid } from "@material-ui/core";
import Footer from "../components/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    width: "100%",
  },
  header: {
    flex: 0,
    top: 0,
    position: "sticky",
    backgroundColor: "#ffffff",
  },
  content: {
    flex: 1,
    marginLeft: theme.spacing(2),
  },
  footer: {
    flex: 0,
    bottom: 0,
    position: "sticky",
    backgroundColor: "#ffffff",
    marginLeft: theme.spacing(2),
  },
}));

export default function App() {
  const classes = useStyles();

  const [mode, setMode] = useState("UploadPhotos");
  // mode:
  // This is a global state that is intended to control the visibility, functionality, and text
  // of all controls in the application
  // Modes:
  // "SignIn" : Sign In functionality - Going to short curcuit this as it's not in the reqs
  // "UploadPhotos" : This is the base upload photos state. No photos have been uploaded at this point.
  // "UploadedPhotos" : This is the state in which a user has uploaded photos. This state is needed to toggle the Submit button
  // and the User name field as per requirements
  // "SubmittedPhotos" : This is the state in which a user has submitted photos and cleared out the image list. This state is needed to toggle the onclick action of
  // the Upload Photos button
  // "PhotoHelp" : This is the state in which a user has submitted photos and cleared out the image list. This state is needed to toggle the onclick action of
  // the Upload Photos button
  const [userName, setUserName] = useState("Most V. Customer");

  // userName:
  // If we were signing in this would contain the username variable

  const [claimNumber, setClaimNumber] = useState("A1B2C3D4E5F6");

  return (
    <ThemeProvider theme={theme}>
      <Grid
        id="app"
        container
        direction="column"
        alignItems="stretch"
        spacing={2}
        className={classes.root}
      >
        <Grid item className={classes.header}>
          <Header id="header" setMode={setMode} />
        </Grid>
        <Grid item className={classes.content}>
          <Content
            id="content"
            mode={mode}
            userName={userName}
            claimNumber={claimNumber}
            setMode={setMode}
            setUserName={setUserName}
            setClaimNumber={setClaimNumber}
          />
        </Grid>
        {mode === "SignIn" ? null : (
          <Grid item className={classes.footer}>
            <Footer id="footer" mode={mode} setMode={setMode} />
          </Grid>
        )}
      </Grid>
    </ThemeProvider>
  );
}
