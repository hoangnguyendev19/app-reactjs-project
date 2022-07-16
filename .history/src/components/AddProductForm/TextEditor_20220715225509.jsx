import React from "react";
import PropTypes from "prop-types";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MUIRichTextEditor from "mui-rte";
import { Box } from "@mui/material";

TextEditor.propTypes = {};

const myTheme = createTheme({
  //   MUIRichTextEditor: {
  //     root: {
  //       marginTop: 20,
  //       width: "80%",
  //     },
  //     editor: {
  //       borderBottom: "1px solid gray",
  //     },
  //   },
});

Object.assign(myTheme, {
  overrides: {
    MUIRichTextEditor: {
      root: {
        marginTop: 20,
        width: "100%",
      },
      editor: {
        borderBottom: "1px solid gray",
      },
    },
  },
});

function TextEditor(props) {
  return (
    <ThemeProvider theme={myTheme}>
      <Box
        sx={{
          border: "1px solid #fff",
          width: "100%",
          height: "200px",
          color: "#fff",
        }}
      >
        <MUIRichTextEditor
          label="Type something here..."
          controls={[
            "bold",
            "italic",
            "code",
            "clear",
            "save",
            "highlight",
            "underline",
          ]}
        />
      </Box>
    </ThemeProvider>
  );
}

export default TextEditor;
