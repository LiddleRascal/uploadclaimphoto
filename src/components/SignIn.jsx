import React from "react";
import { TextField, Grid, Paper, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(2),
  },
  button: {
    width: 180,
    height: 50,
  },
}));

export default function SignIn(props) {
  const classes = useStyles();
  const userName = props.userName;
  const claimNumber = props.claimNumber;
  const setMode = props.setMode;
  const setUserName = props.setUserName;
  const setClaimNumber = props.setClaimNumber;

  return (
    <Grid
      container
      className={classes.root}
      spacing={2}
      direction="column"
      justify="flex-start"
      alignItems="stretch"
    >
      <form className={classes.root} autoComplete="off">
        <Grid item className={classes.control}>
          <TextField
            fullWidth
            id="username"
            label="User Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </Grid>
        <Grid item className={classes.control}>
          <TextField
            fullWidth
            id="claimnumber"
            label="Claim Number"
            value={claimNumber}
            onChange={(e) => setClaimNumber(e.target.value)}
          />
        </Grid>
        <Grid
          container
          className={classes.control}
          justify="flex-end"
          alignItems="flex-end"
        >
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => setMode("UploadPhotos")}
            >
              Sign In
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
}
