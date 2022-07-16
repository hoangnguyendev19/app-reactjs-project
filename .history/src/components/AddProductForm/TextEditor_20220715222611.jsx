import React from "react";
import PropTypes from "prop-types";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MUIRichTextEditor from "mui-rte";

TextEditor.propTypes = {};

const myTheme = createTheme({
  // Set up your custom MUI theme here
});

function TextEditor(props) {
  const save = (data) => {
    console.log(data);
  };
  return (
    <div className="editorContainer">
      <ThemeProvider theme={myTheme}>
        <MUIRichTextEditor
          label="Type something here..."
          onSave={save}
          inlineToolbar={true}
        />
      </ThemeProvider>
    </div>
  );
}

export default TextEditor;
