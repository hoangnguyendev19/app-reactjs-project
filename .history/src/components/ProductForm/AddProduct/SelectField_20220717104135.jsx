import React, { useState } from "react";
import PropTypes from "prop-types";
import { MenuItem, Select } from "@mui/material";
import { makeStyles } from "@mui/styles";

SelectField.propTypes = {
  name: PropTypes.string.isRequired,
  valueList: PropTypes.array,
};

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#323259",
  },
  menuItem: {
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

function SelectField({ name = "", valueList = [] }) {
  const classes = useStyles();
  const [value, setValue] = useState("");

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Select
      value={value}
      id={name}
      onChange={handleValueChange}
      MenuProps={listProps}
      fullWidth
      displayEmpty
      size="small"
      className={classes.root}
    >
      {valueList &&
        valueList.length > 0 &&
        valueList.map((value) => (
          <MenuItem key={value} value={value} className={classes.menuItem}>
            {value}
          </MenuItem>
        ))}
    </Select>
  );
}

export default SelectField;
