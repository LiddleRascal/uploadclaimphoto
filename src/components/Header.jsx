import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { theme } from "../styles/theme";
import Logo from '../styles/img/logo.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    margin: theme.spacing(2),
  },
  grow: {
    flex:1,
    maxHeight: 50,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const setMode = props.setMode;

  return (
    <Grid container item justify="center" className={classes.root}>
        <img
          src={Logo}
          alt="EIG logo"
          onClick={() => setMode("SignIn")}
          className={classes.grow}
        />
    </Grid>
  );
}
