import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Content from "../components/Content";
import Header from "../components/Header";
import { Container, Grid } from "@material-ui/core";
import Footer from "../components/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    height: "100%",
  },
  header: {
    top: 0,
    position: "sticky",
    backgroundColor: "#ffffff",
  },
  content: {
    flexGrow: 1,
  },
  footer: {
    bottom: 0,
    position: "sticky",
    backgroundColor: "#ffffff",
  },
}));

export default function SpecUI(props) {
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
    <Grid id="specUI" item className={classes.root}>
      <Grid item className={classes.header}>
        <Header id="header" setMode={setMode} />
      </Grid>
      <Grid item className={classes.content}>
        <Container>
          <Content
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
      {mode === "SignIn" ? null : (
        <Grid item className={classes.footer}>
          <Footer id="footer" mode={mode} setMode={setMode} />
        </Grid>
      )}
    </Grid>
  );
}
