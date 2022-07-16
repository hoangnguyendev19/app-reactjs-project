import React from "react";
import PropTypes from "prop-types";
import { Box, IconButton } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

InputImage.propTypes = {};

function InputImage(props) {
  return (
    <Box sx={{ padding: "20px", border: "1px dashed #fff" }}>
      <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
        <PhotoCamera />
      </IconButton>
    </Box>
  );
}

export default InputImage;
