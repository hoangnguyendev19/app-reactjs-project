import React from "react";
import PropTypes from "prop-types";
import { MenuItem, Select } from "@mui/material";
import { makeStyles } from "@mui/styles";

SelectField.propTypes = {};

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
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left",
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "left",
    },
  },
};

function SelectField() {
  const classes = useStyles();
  return (
    <Select
      // value="Type brand name to select"
      //   onChange={handleChange}
      id="brand"
      name="brand"
      MenuProps={listProps}
      fullWidth
      displayEmpty
      size="small"
      className={classes.root}
    >
      <MenuItem value="">
        <em>Type brand name to select</em>
      </MenuItem>
      <MenuItem>Ten</MenuItem>
      <MenuItem>Twenty</MenuItem>
      <MenuItem>Thirty</MenuItem>
      <MenuItem>Fourty</MenuItem>
      <MenuItem>Fifty</MenuItem>
      <MenuItem>Fifty</MenuItem>
      <MenuItem>Fifty</MenuItem>
      <MenuItem>Fifty</MenuItem>
      <MenuItem>Fifty</MenuItem>
    </Select>
  );
}

export default SelectField;
