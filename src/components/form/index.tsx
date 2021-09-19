import React, { useEffect, useState } from "react";
import {
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
import { useFormik } from "formik";
import * as yup from "yup";
import { Close as CloseIcon } from "@mui/icons-material";
import { useList } from "../../hooks/useList";
import { ItemType } from "../../types/list";
import * as S from "./styles";

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  amount: yup
    .number()
    .min(1, "Amount should be higher than 0")
    .required("Amount is required"),
  type: yup.number().required("Type is required"),
});

interface Props {
  handleClose: () => void;
}
const FormAddItem: React.FC<Props> = ({ handleClose }: Props) => {
  const { addNewItem, listItem } = useList();
  const [id, setId] = useState(1);

  const formik = useFormik({
    initialValues: {
      name: "",
      amount: "",
      type: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("VALUES", values);
      const d = new Date();
      setId((id) => id + 1);
      addNewItem({
        date: d.toISOString(),
        name: values.name,
        amount: parseInt(values.amount),
        type: parseInt(values.type),
        id,
      });
    },
  });
  console.log("LIST ITEM FORM", formik.errors);

  const handleChangeType = (e: any) => {
    // setAge(event.target.value);
    console.log("E", e);
    formik.setFieldValue("type", e.target.value);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <S.CloseIconContainer onClick={handleClose}>
        <CloseIcon />
      </S.CloseIconContainer>

      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
        }}
      >
        Register Item
      </Typography>
      <FormControl sx={{ mt: 3, minWidth: 300 }}>
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

      <FormControl sx={{ mt: 3, minWidth: 300 }}>
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

      <FormControl
        sx={{ mt: 3, minWidth: 300 }}
        error={formik.touched.type && Boolean(formik.errors.type)}
      >
        <InputLabel id="type">Type</InputLabel>
        <Select id="type" value={0} label="Type" onChange={handleChangeType}>
          <MenuItem value={0} disabled>Select the type</MenuItem>
          <MenuItem value={ItemType.Protein}>Protein</MenuItem>
          <MenuItem value={ItemType.Fat}>Fat</MenuItem>
          <MenuItem value={ItemType.Carbohydrate}>Carbohydrate</MenuItem>
        </Select>
        <FormHelperText>Item Type</FormHelperText>
      </FormControl>
      <FormControl sx={{ mt: 3, minWidth: 300 }}>
        <Button
          variant="contained"
          type="submit"
          sx={{
            height: 50,
            fontWeight: "bold",
            background: "#072acd",
          }}
        >
          Cadastrar
        </Button>
      </FormControl>
    </form>
  );
};
export default FormAddItem;
