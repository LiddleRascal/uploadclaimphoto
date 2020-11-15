import React from "react";
import { Grid, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    width: 180,
    height: 50,
  },
}));

export default function UploadButtons(props) {
  const classes = useStyles();

  const mode = props.instructionsMode;
  const setMode = props.setMode;
  const setLoading = props.setLoading;
  const numImages = props.numImages;
  const onImageUpload = props.onImageUpload;
  const onImageRemoveAll = props.onImageRemoveAll;

  const reloadImageUpload = () => {
    setMode("UploadPhotos");
  };

  const uploadImages = (onImageUpload) => {
    onImageUpload();
    setLoading(true);
    setMode("UploadedPhotos");
  };

  const submitImages = (onImageRemoveAll) => {
    onImageRemoveAll();
    setMode("SubmittedPhotos");
  };

  return (
    <Grid container>
      {mode == "UploadPhotos" || mode == "UploadedPhotos" ? (
        <Grid container direction="column" spacing={2} alignItems="center" item>
          <Grid item>
            <Button
              className={classes.button}
              variant="contained"
              size="large"
              color="primary"
              onClick={() => uploadImages(onImageUpload)}
            >
              Upload Photos
            </Button>
          </Grid>
          <Grid item>
            <Button
              className={classes.button}
              variant="contained"
              size="large"
              color="primary"
              onClick={() => submitImages(onImageRemoveAll)}
              disabled={numImages == 0}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      ) : mode == "SubmittedPhotos" || mode == "ContactUs" ? (
        <Grid container direction="column" spacing={2} alignItems="center" item>
          <Grid item>
            <Button
              className={classes.button}
              variant="contained"
              size="large"
              color="primary"
              onClick={() => reloadImageUpload()}
            >
              Upload Photos
            </Button>
          </Grid>
        </Grid>
      ) : null}
    </Grid>
  );
}
