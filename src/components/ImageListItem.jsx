import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  hideoverflow: {
    overflow: "hidden",
  },
  myimage: {
    height: 100,
    resizeMode: "contain",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#ffffff",
  },
}));

const getImageExtension = ( imageTitle, imageIndex ) => {
  var imageExtension = imageTitle.split(".").pop();
  var imageName = "Photo".concat(
    imageIndex + 1,
    ".",
    imageExtension
  );
  return imageName;
};

export default function ImageListItem(props) {
  const classes = useStyles();
  const imageSource = props.imageSource;
  const imageLoaded = props.imageLoaded;
  const imageTitle = getImageExtension(props.imageTitle, props.imageIndex);

  return (
    <Grid container direction="row" alignItems="flex-start" spacing={2}>
      <Grid item xs={6} className={classes.hideoverflow}>
        <img
          src={imageSource}
          alt={imageTitle}
          className={classes.myimage}
          onLoad={imageLoaded}
        />
      </Grid>
      <Grid item xs={6}>
        {imageTitle}
      </Grid>
    </Grid>
  );
}
