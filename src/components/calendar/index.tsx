import React from "react";
import { Stack, TextField } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { LocalizationProvider, DesktopDatePicker } from "@mui/lab";
import * as S from "./styles";
import { useList } from "../../hooks/useList";

export default function CalendarPicker() {
  const { selectedDate, handleSelectedDate, handleFilterByDate } = useList();
  const handleChange = (newValue: any) => {
    handleSelectedDate(newValue);
    handleFilterByDate(newValue);
  };

  return (
    <S.Container>
      <S.Calendar>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={3}>
            <DesktopDatePicker
              label="Choose a date"
              inputFormat="MM/dd/yyyy"
              value={!selectedDate ? new Date().toISOString() : selectedDate}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
        </LocalizationProvider>
      </S.Calendar>
    </S.Container>
  );
}
