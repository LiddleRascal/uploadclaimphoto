import "../styles/css/App.css";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "../styles/theme";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import HeaderNav from "../components/HeaderNav";
import Content from "../components/Content";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

export default function App() {
  const classes = useStyles();
  const [title, setTitle] = useState("Login");

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <HeaderNav title={title} />
        <Content />
        <Fab color="primary" aria-label="add" className={classes.fab}>
          <AddIcon />
        </Fab>
      </div>
    </ThemeProvider>
  );
}
