import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2b7be4",
    },
    secondary: {
      main: "#7AB5AC",
    },
  },
  shape: {
    borderRadius: 1,
  },
});

export const eigMatTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#2a2163",
    },
    secondary: {
      main: "#7AB5AC",
    },
    default: {
      main: "#cccece",
    },
  },
});

export default theme;