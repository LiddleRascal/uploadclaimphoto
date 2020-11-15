import React, { useState } from "react";
import {
  Button,
  Container,
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  makeStyles,
  Paper,
  Table,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import ImageUploading from "react-images-uploading";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "100%",
    height: 450,
  },
  paper: {
    backgroundColor: "rgba(122, 181, 172,0.15)",
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(122, 181, 172,0.0) 0%, " +
      "rgba(122, 181, 172,0.3) 70%, rgba(122, 181, 172,0.5) 100%)",
  },
}));

const getTime = () => {
  let hour = new Date().getHours();
  var timeGreeting =
    hour < 11 ? "Morning" : hour < 16 ? "Afternoon" : "Evening";
  return timeGreeting;
};

export default function UploadImages(props) {
  const userName = props.userName;
  const claimNumber = props.claimNumber;
  const timeOfDay = getTime();
  const [pictureCount, setPictureCount] = useState(0);
  const [images, setImages] = useState([]);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
    setPictureCount(imageList.length);
  };
  const classes = useStyles();

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">
            Good {timeOfDay}, {userName}.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          In order to most accurately process your recent claim ({claimNumber}),
          we ask that you submit photos of the damage that you reported.
        </Grid>
        <Grid item xs={12} className={classes.root}>
          <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            resolutionType="ratio"
            resolutionHeight="100"
            dataURLKey="data_url"
          >
            {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              <Grid container direction="column" spacing={2}>
                <Grid
                  container
                  direction="row"
                  spacing={2}
                  justify="space-between"
                  item
                  xs={12}
                >
                  <Grid item>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={onImageUpload}
                      {...dragProps}
                    >
                      Select Images
                    </Button>
                  </Grid>
                  <Grid item>
                    {pictureCount > 1 && (
                      <Button
                        onClick={onImageRemoveAll}
                        variant="contained"
                        color="secondary"
                      >
                        Remove All
                      </Button>
                    )}
                  </Grid>
                </Grid>
                <Grid item>
                  {/* <Paper variant="outlined" className={classes.paper}> */}
                    <GridList
                      cellHeight={160}
                      cols={1}
                      spacing={2}
                      className={classes.gridList}
                    >
                      {imageList
                        .map((image, index) => (
                          <GridListTile key={index} item xs={3}>
                            <img src={image.data_url} alt={image.title} />
                            <GridListTileBar
                              title={image.title}
                              className={classes.titleBar}
                              titlePosition="bottom"
                              actionIcon={
                                <IconButton
                                  color="primary"
                                  onClick={() => onImageRemove(index)}
                                >
                                  <DeleteIcon />
                                </IconButton>
                              }
                              actionPosition="right"
                            />
                          </GridListTile>
                        ))
                        .reverse()}
                    </GridList>
                  {/* </Paper> */}
                </Grid>
              </Grid>
            )}
          </ImageUploading>
        </Grid>
      </Grid>
    </Container>
  );
}
