import React from "react";
import {
  Fab,
  Modal,
  Grid,
  Typography,
  TextField,
  InputLabel,
  Button,
  FormControl,
  MenuItem,
  Select,
  FormHelperText,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";

export default function FormAddItem() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: any) => {
    setAge(event.target.value);
  };

  return (
    <Grid
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        boxShadow: 24,
        p: 4,
      }}
      md={6}
    >
      <CloseIcon />

      <Typography>Olá mundo</Typography>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        placeholder="Name"
      />
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        placeholder="Amount"
      />
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>With label + helper text</FormHelperText>
      </FormControl>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Button variant="contained">Cadastrar</Button>
    </Grid>
  );
}
