import React from "react";
import {
  TextField,
  Grid,
  Button,
  FormControlLabel,
  FormGroup,
  Switch,
} from "@material-ui/core";
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
  const claimNumber = props.claimNumber;
  const userName = props.userName;
  const specUiTheme = props.specUiTheme;
  const setMode = props.setMode;
  const setUserName = props.setUserName;
  const setClaimNumber = props.setClaimNumber;
  const setSpecUiTheme = props.setSpecUiTheme;

  const switchUITheme = () => {
    setSpecUiTheme((specUiTheme) => !specUiTheme);
  };

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
        <Grid container className={classes.control} justify="flex-end">
          <Grid item>
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    color="primary"
                    checked={specUiTheme}
                    onChange={switchUITheme}
                  />
                }
                label="Use Spec'd UI"
              />
            </FormGroup>
          </Grid>
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
