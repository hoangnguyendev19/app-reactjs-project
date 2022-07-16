import React from "react";
import PropTypes from "prop-types";
import { IconButton } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

InputImage.propTypes = {};

function InputImage(props) {
  return (
    <>
      <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
        <PhotoCamera />
      </IconButton>
    </>
  );
}

export default InputImage;
