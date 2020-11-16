import "../styles/css/App.css";
import React, { useState } from "react";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { theme, eigMatTheme } from "../styles/theme";
import SpecUI from "../components/SpecUI";
import EigMatUI from "../components/eigmatui/EigMatUI";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    width: "100vw",
    height: "100vh",
  },
}));

export default function App() {
  // mode:
  // This is a global state that is intended to control the visibility, functionality, and text
  // of all controls in the application
  // Modes:
  // "SignIn" : Displays Sign In functionality
  // "UploadPhotos" : This is the base upload photos state. No photos have been uploaded at this point. The Submit button is disabled in this state
  // "UploadedPhotos" : This is the state in which a user has uploaded photos. This state is needed to enable the Submit button
  // and the User name field as per requirements
  // "SubmittedPhotos" : This is the state in which a user has submitted photos and cleared out the image list. This state is needed to toggle the onclick action of
  // the Upload Photos button
  // "PhotoHelp" : This state toggles the 'help' instructions. Both buttons are hidden in this state This state does not clear the images variable
  // "ContactUs" : This state toggles the 'contact' instructions, hides the submit button, and changes the upload photos button to a button that toggles mode to "UploadPhotos"
  // This state does not clear the images variable
  const [mode, setMode] = useState("SignIn");

  // userName: The UserName variable
  const [userName, setUserName] = useState("Most V. Customer");

  // claimNumber: The claimNumber variable
  const [claimNumber, setClaimNumber] = useState("A1B2C3D4E5F6");

  // specUiTheme: Toggles the UI theme.
  // True = UI as Spec'd in requirements documentation
  // False = UI as interpreted by yours truly
  const [specUiTheme, setSpecUiTheme] = useState(true);

  const classes = useStyles();

  return (
    <ThemeProvider
      theme={specUiTheme ? createMuiTheme(theme) : createMuiTheme(eigMatTheme)}
    >
      <Grid
        id="app"
        container
        direction="column"
        justify="center"
        className={classes.root}
        alignItems="stretch"
        spacing={2}
      >
          {specUiTheme ? (
            <SpecUI
              mode={mode}
              userName={userName}
              claimNumber={claimNumber}
              specUiTheme={specUiTheme}
              setMode={setMode}
              setUserName={setUserName}
              setClaimNumber={setClaimNumber}
              setSpecUiTheme={setSpecUiTheme}
              className={classes.root}
            />
          ) : (
            <EigMatUI
              mode={mode}
              userName={userName}
              claimNumber={claimNumber}
              specUiTheme={specUiTheme}
              setMode={setMode}
              setUserName={setUserName}
              setClaimNumber={setClaimNumber}
              setSpecUiTheme={setSpecUiTheme}
              className={classes.root}
            />
          )}
        </Grid>
    </ThemeProvider>
  );
}
