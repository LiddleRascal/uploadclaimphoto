import { Grid } from "@material-ui/core";
import React from "react";
import SignIn from "../SignIn";
import UploadImagesEigMatUI from "./UploadImagesEigMatUI";

export default function Content(props) {
  const mode = props.mode;
  const claimNumber = props.claimNumber;
  const userName = props.userName;
  const specUiTheme = props.specUiTheme;
  const setMode = props.setMode;
  const setUserName = props.setUserName;
  const setClaimNumber = props.setClaimNumber;
  const setSpecUiTheme = props.setSpecUiTheme;

  return (
    <Grid container direction="column" justify="center" spacing={2}>
      <Grid item>
        {mode === "SignIn" ? (
          <SignIn
            setMode={setMode}
            claimNumber={claimNumber}
            userName={userName}
            specUiTheme={specUiTheme}
            setClaimNumber={setClaimNumber}
            setUserName={setUserName}
            setSpecUiTheme={setSpecUiTheme}
          />
        ) : mode === "UploadPhotos" ||
          mode === "UploadedPhotos" ||
          mode === "SubmittedPhotos" ||
          mode === "PhotoHelp" ||
          mode === "ContactUs" ? (
          <UploadImagesEigMatUI
            mode={mode}
            setMode={setMode}
            claimNumber={claimNumber}
            userName={userName}
          />
        ) : (
          <p>
            The server is not responding to requests at this time. Please try
            again in a few minutes or contact EIG Restoration.
          </p>
        )}
      </Grid>
    </Grid>
  );
}
