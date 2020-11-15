import React from "react";
import { Grid } from "@material-ui/core";

export default function Footer(props) {
  const mode = props.mode;
  const setMode = props.setMode;

  return (
    <Grid container direction="column" alignItems="center" spacing={2}>
      {mode != "ContactUs" && mode != "PhotoHelp"  ? (
      <Grid item >
        <a href="#" onClick={() => setMode("PhotoHelp")}>
          What photos should I take?
        </a>
      </Grid>) : null}
      {mode != "ContactUs" ? (
        <Grid item>
          <a href="#" onClick={() => setMode("ContactUs")}>
            Contact EIG
          </a>
        </Grid>
      ) : null}
    </Grid>
  );
}
