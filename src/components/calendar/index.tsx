import React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import { useList } from "../../hooks/useList";

export default function MaterialUIPickers() {
  const { selectedDate, handleSelectedDate, handleFilterByDate } = useList();
  const handleChange = (newValue: any) => {
    handleSelectedDate(newValue);
    handleFilterByDate(newValue);
  };

  return (
    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
    <div style={{ width: 300}} >
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={3}>
          <DesktopDatePicker
            label="Choose a date"
            inputFormat="MM/dd/yyyy"
            value={selectedDate}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>
    </div>
    </div>
  );
}
