import { Box, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import SelectField from "../AddProduct/SelectField";

SaleField.propTypes = {};

const useStyles = makeStyles((theme) => ({
  rootInput: {
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#252547",
      border: "1px solid #a16eff",
      color: "#fff",
    },
  },
  rootSelect: {
    "& .MuiInputBase-colorPrimary": {
      backgroundColor: "#252547 !important",
      border: "1px solid #a16eff !important",
      color: "#fff !important",
    },
  },
}));

function SaleField(props) {
  const classes = useStyles();
  const [turnOn, setTurnOn] = useState("hidden");
  const [value, setValue] = useState(0);

  const handleCheckboxChange = (e) => {
    const checker = e.target;
    setTurnOn(checker.checked ? "visible" : "hidden");
  };

  const handleInputChange = (e) => {
    const input = e.target;
    setValue(input.value);
  };
  return (
    <>
      <FormControlLabel
        control={<Checkbox onChange={handleCheckboxChange} />}
        label="Sale"
      />
      <Box sx={{ display: "flex", visibility: `${turnOn}` }}>
        <SelectField
          name="sale"
          valueList={["$", "%"]}
          className={classes.rootSelect}
        />
        <TextField
          variant="outlined"
          className={classes.rootInput}
          value={value}
          onChange={(e) => handleInputChange(e)}
        />
      </Box>
    </>
  );
}

export default SaleField;
