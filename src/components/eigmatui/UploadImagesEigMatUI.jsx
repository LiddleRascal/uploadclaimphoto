import React, { useState, useRef } from "react";
import {
  Backdrop,
  CircularProgress,
  Grid,
  makeStyles,
  GridList,
} from "@material-ui/core";
import ImageUploading from "react-images-uploading";
import ImageListItemEigMatUI from "./ImageListItemEigMatUI";
import InstructionsEigMatUI from "./InstructionsEigMatUI";
import UploadButtonsEigMatUI from "./UploadButtonsEigMatUI";

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 0,
  },
  gridlist: {
    flexGrow: 1,
    maxHeight: 400,
    overflowY: "auto",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#ffffff",
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(122, 181, 172,0.0) 0%, " +
      "rgba(122, 181, 172,0.3) 70%, rgba(122, 181, 172,0.5) 100%)",
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
      setLoading(false);
    }
  };

  const classes = useStyles();

  return (
    <Grid container spacing={2} direction="column" alignItems="stretch">
      <Grid item>
        <InstructionsEigMatUI
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
          {({ imageList, onImageUpload, onImageRemoveAll, onImageRemove }) => (
            <Grid
              container
              direction="column"
              spacing={2}
              className={classes.root}
            >
              <Grid item>
                <UploadButtonsEigMatUI
                  instructionsMode={mode}
                  setMode={setMode}
                  setLoading={setLoading}
                  numImages={images.length}
                  onImageRemoveAll={onImageRemoveAll}
                  onImageUpload={onImageUpload}
                />
              </Grid>
              {mode === "PhotoHelp" || mode === "ContactUs" ? null : (
                <Grid item className={classes.gridlist}>
                  <GridList cellHeight={80} cols={3} spacing={2}>
                    {imageList
                      .map((image, index) => (
                        <ImageListItemEigMatUI
                          key={index}
                          imageSource={image.data_url}
                          imageTitle={image.file.name}
                          imageIndex={index}
                          imageLoaded={imageLoaded}
                          onImageRemove={onImageRemove}
                        />
                      ))
                      .reverse()}
                  </GridList>
                </Grid>
              )}
            </Grid>
          )}
        </ImageUploading>
      </Grid>
    </Grid>
  );
}
