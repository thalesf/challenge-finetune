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
  FormHelperText
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { ItemListProvider } from "../context/ItemListContext";
import Table from "../components/table";
import Header from "../header";
import Chart from "../components/graph";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function Home() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [age, setAge] = React.useState('');

  const handleChange = (event:any) => {
    setAge(event.target.value);
  };

  return (
    <ItemListProvider>
      <Header />
      <br />
      <br />
      <Chart />
      <Table />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Grid
          sx={{
            bgcolor: "#fff",
            height: "100vh",
          }}
          md={2}
        >
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
      </Modal>
      <Fab color="primary" aria-label="add" onClick={handleOpen}>
        <AddIcon />
      </Fab>
    </ItemListProvider>
  );
}
