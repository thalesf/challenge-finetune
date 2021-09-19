import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import { useList } from "../../hooks/useList";
import { filterByDate } from "../../utils/filter";

export default function MaterialUIPickers() {
  const [value, setValue] = useState(new Date().toISOString());

  const { selectedDate, handleSelectedDate, handleFilterByDate } = useList();
  const handleChange = (newValue: any) => {
    console.log("NEW VALUE", newValue);
    // setValue(newValue);
    handleSelectedDate(newValue);
    handleFilterByDate(newValue);
  };

  console.log("SELECTED DATE", selectedDate);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <DesktopDatePicker
          label="Select a day"
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}
