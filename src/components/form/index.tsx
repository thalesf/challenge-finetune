import React, { useState } from "react";
import {
  Fab,
  Modal,
  Grid,
  Typography,
  // TextField,
  InputLabel,
  Button,
  FormControl,
  MenuItem,
  Select,
  FormHelperText,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { Close as CloseIcon } from "@mui/icons-material";
import { useList } from "../../hooks/useList";
import TextField from "@material-ui/core/TextField";
import { ItemType } from "../../types/list";

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  amount: yup
    .number()
    .min(1, "Amount should be higher than 0")
    .required("Amount is required"),
  type: yup.number().required("Type is required"),
});

export default function FormAddItem() {
  const [age, setAge] = React.useState("");
  const { addNewItem } = useList();
  const [id, setId] = useState(1);

  const formik = useFormik({
    initialValues: {
      name: "",
      amount: "",
      type: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const formDate = new Date();
      setId((id) => id + 1);
      addNewItem({
        date: `2021-09-1${id}T17:52:40.116Z`,
        name: values.name,
        amount: parseInt(values.amount),
        type: parseInt(values.type),
        id,
      });
    },
  });
  console.log('ID', id)

  const handleChangeType = (e: any) => {
    // setAge(event.target.value);
    console.log("E", e);
    formik.setFieldValue("type", e.target.value);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      {console.log("FORMIK", formik.values)}
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
      >
        <CloseIcon />

        <Typography>Register Item</Typography>
        <FormControl sx={{ m: 1, minWidth: 200 }}>
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </FormControl>

        <FormControl sx={{ m: 2, minWidth: 200 }}>
          <TextField
            id="amount"
            label="Amount"
            variant="outlined"
            placeholder="Amount"
            name="amount"
            value={formik.values.amount}
            onChange={formik.handleChange}
            error={formik.touched.amount && Boolean(formik.errors.amount)}
            helperText={formik.touched.amount && formik.errors.amount}
          />
        </FormControl>

        <FormControl sx={{ m: 2, minWidth: 200 }}>
          <InputLabel id="demo-simple-select-helper-label">Type</InputLabel>
          <Select
            id="type"
            value={age}
            label="Type"
            onChange={handleChangeType}
          >
            <MenuItem value={ItemType.Protein}>Protein</MenuItem>
            <MenuItem value={ItemType.Fat}>Fat</MenuItem>
            <MenuItem value={ItemType.Carbohydrate}>Carbohydrate</MenuItem>
          </Select>
          <FormHelperText>Item Type</FormHelperText>
        </FormControl>
        <Button variant="contained" type="submit">
          Cadastrar
        </Button>
      </Grid>
    </form>
  );
}
