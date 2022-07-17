import React, { useState } from "react";
import PropTypes from "prop-types";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { makeStyles } from "@mui/styles";

SelectField.propTypes = {
  name: PropTypes.string.isRequired,
  valueList: PropTypes.array,
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiSelect-outlined": {
      background: "#323259",
      color: "#fff",
    },
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
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id={name}>{`Type ${name} name to select`}</InputLabel>
      <Select
        value={value}
        labelId={name}
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
    </FormControl>
  );
}

export default SelectField;
