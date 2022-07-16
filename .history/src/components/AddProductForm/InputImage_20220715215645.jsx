import React from "react";
import PropTypes from "prop-types";
import { Box, IconButton } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

InputImage.propTypes = {};

function InputImage(props) {
  return (
    <IconButton color="primary" aria-label="upload picture" component="label">
      <Box
        sx={{
          padding: "20px",
          border: "1px dashed #fff",
          color: "#fff",
          display: "flex",
          alignItems: "center",
        }}
      >
        <input hidden accept="image/*" type="file" />
        {/* <span styles={{ color: "#fff", fontSize: "20px" }}> */}
        <PhotoCamera />
        {/* </span> */}
      </Box>
    </IconButton>
  );
}

export default InputImage;
