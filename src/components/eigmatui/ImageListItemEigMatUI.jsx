import React from "react";
import {
  makeStyles,
  GridListTile,
  GridListTileBar,
  IconButton,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  hideoverflow: {
    overflow: "hidden",
  },
  myimage: {
    height: 100,
    width: 100,
    objectFit: "cover",
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

const getImageExtension = (imageTitle, imageIndex) => {
  var imageExtension = imageTitle.split(".").pop();
  var imageName = "Photo".concat(imageIndex + 1, ".", imageExtension);
  return imageName;
};

export default function ImageListItemEigMatUI(props) {
  const classes = useStyles();
  const imageSource = props.imageSource;
  const imageIndex = props.imageIndex;
  const imageLoaded = props.imageLoaded;
  const imageTitle = getImageExtension(props.imageTitle, props.imageIndex);
  const onImageRemove = props.onImageRemove;

  return (
    <GridListTile key={imageIndex}>
      <img
        src={imageSource}
        alt={imageTitle}
        className={classes.myimage}
        onLoad={imageLoaded}
      />
      <GridListTileBar
        className={classes.titleBar}
        titlePosition="bottom"
        actionIcon={
          <IconButton color="primary" onClick={()=>onImageRemove(imageIndex)}>
            <DeleteIcon />
          </IconButton>
        }
        actionPosition="right"
      />
    </GridListTile>
  );
}
