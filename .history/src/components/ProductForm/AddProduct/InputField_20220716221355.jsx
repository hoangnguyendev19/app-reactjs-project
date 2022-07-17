import React from "react";
import PropTypes from "prop-types";
import { Grid, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

InputField.propTypes = {
  name: PropTypes.string.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiOutlinedInput-root": {
      background: "#323259",
      color: "#fff",
    },
  },
}));

function InputField({ name = "" }) {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={3} sx={{ margin: "auto 0" }}>
        <label htmlFor="vendor">Vendor</label>
      </Grid>
      <Grid item xs={9}>
        required
        <TextField
          id={name}
          name={name}
          fullWidth
          size="small"
          autoComplete="given-name"
          variant="outlined"
          className={classes.root}
          placeholder={name === "vendor" ? `Type ${name} name to select` : ""}
        />
      </Grid>
    </>
  );
}

export default InputField;
