import React, { useState, useRef } from "react";
import {
  Backdrop,
  CircularProgress,
  Grid,
  makeStyles,
} from "@material-ui/core";
import ImageUploading from "react-images-uploading";
import ImageListItem from "./ImageListItem";
import Instructions from "./Instructions";
import UploadButtons from "./UploadButtons";

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
  },
  gridlist: {
    [theme.breakpoints.down("XL")]: {
      maxHeight: 700,
    },
    [theme.breakpoints.down("lg")]: {
      maxHeight: 700,
    },
    [theme.breakpoints.down("md")]: {
      maxHeight: 500,
    },
    [theme.breakpoints.down("sm")]: {
      maxHeight: 400,
    },
    [theme.breakpoints.down("xs")]: {
      maxHeight: 200,
    },
    flexGrow: 0,
    overflowY: "auto",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#ffffff",
  },
}));

export default function UploadImages(props) {
  const userName = props.userName;
  const claimNumber = props.claimNumber;
  const mode = props.mode;
  const setMode = props.setMode;
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const counter = useRef(0);
  const maxNumber = 20;

  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };

  // Got this off of StackExchange
  // https://stackoverflow.com/questions/56902522/react-show-loading-spinner-while-images-load
  const imageLoaded = () => {
    counter.current += 1;
    if (counter.current >= images.length) {
      counter.current = 0;
      setLoading(false);
    }
  };

  const classes = useStyles();

  return (
    <Grid container spacing={2} direction="column" alignItems="stretch">
      <Grid item>
        <Instructions
          instructionsMode={mode}
          userName={userName}
          claimNumber={claimNumber}
        />
      </Grid>
      <Grid item>
        <Backdrop className={classes.backdrop} open={loading}>
          <CircularProgress color="inherit" />
        </Backdrop>
        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
          resolutionType="ratio"
          resolutionHeight="100"
          dataURLKey="data_url"
        >
          {({ imageList, onImageUpload, onImageRemoveAll }) => (
            <Grid
              container
              direction="column"
              spacing={2}
              className={classes.root}
            >
              <Grid item>
                <UploadButtons
                  instructionsMode={mode}
                  setMode={setMode}
                  setLoading={setLoading}
                  numImages={images.length}
                  onImageRemoveAll={onImageRemoveAll}
                  onImageUpload={onImageUpload}
                />
              </Grid>
              {mode === "PhotoHelp" || mode === "ContactUs" ? null : (
                <Grid container item xs={9} className={classes.gridlist}>
                  {imageList
                    .map((image, index) => (
                      <ImageListItem
                        key={index}
                        imageSource={image.data_url}
                        imageTitle={image.file.name}
                        imageIndex={index}
                        imageLoaded={imageLoaded}
                      />
                    ))
                    .reverse()}
                </Grid>
              )}
            </Grid>
          )}
        </ImageUploading>
      </Grid>
    </Grid>
  );
}
