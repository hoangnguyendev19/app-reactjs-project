import React from "react";
import PropTypes from "prop-types";
import { MenuItem, Select } from "@mui/material";
import { makeStyles } from "@mui/styles";

SelectField.propTypes = {
  name: PropTypes.string.isRequired,
  values: PropTypes.array,
};

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#323259",
    color: "#fff",
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const listProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
    anchororigin: {
      vertical: "bottom",
      horizontal: "left",
    },
    transformorigin: {
      vertical: "top",
      horizontal: "left",
    },
  },
};

function SelectField({ name = "", values = [] }) {
  const classes = useStyles();

  return (
    <Select
      //   onChange={handleChange}
      value={`Type ${name} name to select`}
      id={name}
      name={name}
      MenuProps={listProps}
      fullWidth
      displayEmpty
      size="small"
      className={classes.root}
    >
      <MenuItem value={name}>
        <em>Type {name} name to select</em>
      </MenuItem>
      {values &&
        values.length > 0 &&
        values.map((value) => (
          <MenuItem key={value} value={value}>
            {value}
          </MenuItem>
        ))}
    </Select>
  );
}

export default SelectField;
