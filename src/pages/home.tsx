import React from "react";
import { Fab, Modal } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { ItemListProvider } from "../context/ItemListContext";
import Table from "../components/table";
import Chart from "../components/graph";
import Header from "../components/header";
import HeaderDate from '../components/header/date';
import FormAddItem from "../components/form";
import Calendar from '../components/calendar'

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
    <ItemListProvider>
      <Header />
      <br />
      <br />
      <Chart />


     <HeaderDate />
      <Calendar />
      <br />
      <br />
      <Table />
      
      <Modal open={open} onClose={handleClose}>
        <div
          style={{
            background: "#fff",
          }}
        >
          <FormAddItem />
        </div>
      </Modal>
      <Fab color="primary" aria-label="add" onClick={handleOpen}>
        <AddIcon />
      </Fab>
    </ItemListProvider>
  );
}
