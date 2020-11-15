import { Container, Grid } from "@material-ui/core";
import React, { useState } from "react";
import SignIn from "./SignIn";
import UploadImages from "./UploadImages";

export default function Content(props) {
  const mode = props.mode;
  const userName = props.userName;
  const claimNumber = props.claimNumber;
  const setMode = props.setMode;
  const setUserName = props.setUserName;
  const setClaimNumber = props.setClaimNumber;

  return (
    <Container>
      {/* <Grid container> */}
        {mode == "SignIn" ? (
          // <Grid item>
            <SignIn
              setMode={setMode}
              claimNumber={claimNumber}
              userName={userName}
              setClaimNumber={setClaimNumber}
              setUserName={setUserName}
            />
          // </Grid>
        ) : mode == "UploadPhotos" ||
          mode == "UploadedPhotos" ||
          mode == "SubmittedPhotos" ||
          mode == "PhotoHelp" ||
          mode == "ContactUs" ? (
          // <Grid item>
            <UploadImages
              mode={mode}
              setMode={setMode}
              claimNumber={claimNumber}
              userName={userName}
            />
          // </Grid>
        ) : (
          // <Grid item>
            <p>
              The server is not responding to requests at this time. Please try
              again in a few minutes or contact EIG Restoration.
            </p>
          // </Grid>
        )}
      {/* </Grid> */}
    </Container>
  );
}
