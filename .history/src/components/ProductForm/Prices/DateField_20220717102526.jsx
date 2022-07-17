import { Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

DateField.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {
    "& .css-sfm0oi-MuiInputBase-root-MuiOutlinedInput-root": {
      backgroundColor: "#252547",
      border: "1px solid #a16eff",
      color: "#fff important",
    },
  },
}));

function DateField(props) {
  const classes = useStyles();
  const [value, setValue] = useState(null);

  return (
    <>
      <Button
        variant="outlined"
        disabled
        sx={{
          backgroundColor: "rgba(180,180,219,.24)",
          backgroundImage: "none",
          height: "100%",
        }}
      >
        <CalendarMonthIcon color="secondary" />
      </Button>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          className={classes.root}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </>
  );
}

export default DateField;
