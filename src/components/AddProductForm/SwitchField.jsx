import React from "react";
import PropTypes from "prop-types";
import { Switch } from "@mui/material";

SwitchField.propTypes = {};

const label = { inputProps: { "aria-label": "Switch demo" } };

function SwitchField(props) {
  return <Switch {...label} defaultChecked color="success" size="medium" />;
}

export default SwitchField;
