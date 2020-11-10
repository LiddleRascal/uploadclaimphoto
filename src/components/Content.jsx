import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageUploader from "react-images-upload";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

export default function Content(props) {
  const classes = useStyles();
  const [pictures, setPictures] = useState([]);

  const onDrop = (picture) => {
    setPictures([...pictures, picture]);
  };

  return (
    <ImageUploader
      withIcon={true}
      buttonText="Upload Photos"
      label= "Max image size: 5MB"
      onChange={onDrop}
      maxFileSize={5242880}
    />
  );
}
