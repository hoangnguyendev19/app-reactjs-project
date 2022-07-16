import React from "react";
import PropTypes from "prop-types";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MUIRichTextEditor from "mui-rte";
import { Box } from "@mui/material";

TextEditor.propTypes = {};

const myTheme = createTheme({
  // Set up your custom MUI theme here
});

function TextEditor(props) {
  const save = (data) => {
    console.log(data);
  };
  return (
    <ThemeProvider theme={myTheme}>
      <Box sx={{ border: "1px solid #fff", width: "100%" }}>
        <MUIRichTextEditor label="Start typing..." />
      </Box>
      <textarea></textarea>
    </ThemeProvider>
  );
}

export default TextEditor;
