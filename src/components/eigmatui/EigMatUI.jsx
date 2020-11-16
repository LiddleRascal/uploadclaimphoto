import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import ContentEigMatUI from "./ContentEigMatUI";
import HeaderNav from "./HeaderNav";

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    height: "100%",
  },
  header: {
    top: 0,
    position: "sticky",
    backgroundColor: "#ffffff",
    marginRight: theme.spacing(-2),
  },
  content: {
    flexGrow: 1,
    marginTop: theme.spacing(2),
  },
  footer: {
    bottom: 0,
    position: "sticky",
    backgroundColor: "#ffffff",
  },
}));

export default function EigMatUI(props) {
  const classes = useStyles();
  const mode = props.mode;
  const claimNumber = props.claimNumber;
  const userName = props.userName;
  const specUiTheme = props.specUiTheme;
  const setMode = props.setMode;
  const setUserName = props.setUserName;
  const setClaimNumber = props.setClaimNumber;
  const setSpecUiTheme = props.setSpecUiTheme;

  return (
    <Grid id="eigMatUI" item className={classes.root}>
      <Grid item className={classes.header}>
        <HeaderNav id="header" mode={mode} setMode={setMode} />
      </Grid>
      <Grid item className={classes.content}>
        <Container>
          <ContentEigMatUI
            id="content"
            mode={mode}
            userName={userName}
            claimNumber={claimNumber}
            specUiTheme={specUiTheme}
            setMode={setMode}
            setUserName={setUserName}
            setClaimNumber={setClaimNumber}
            setSpecUiTheme={setSpecUiTheme}
          />
        </Container>
      </Grid>
    </Grid>
  );
}
