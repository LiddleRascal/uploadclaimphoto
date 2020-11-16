import React from "react";
import {
  Grid,
  Button,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {

    height: 50,
  },
}));

export default function UploadButtonsEigMatUI(props) {
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
    <Grid container direction="column" justify="center" alignItems="stretch">
      {mode === "UploadPhotos" || mode === "UploadedPhotos" ? (
        <Grid container direction="row" justify="center" alignItems="center" item spacing={2}>
          <Grid item>
            <Button
              className={classes.button}
              variant="contained"
              size="large"
              color="primary"
              onClick={() => uploadImages(onImageUpload)}
            >
              Select Photos
            </Button>
          </Grid>
          <Grid item>
            <Button
              className={classes.button}
              variant="contained"
              size="large"
              color="primary"
              onClick={() => submitImages(onImageRemoveAll)}
              disabled={numImages === 0}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      ) : mode === "SubmittedPhotos" ? (
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
