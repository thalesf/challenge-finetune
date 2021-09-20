import React, { useState } from "react";
import {
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
import PrimaryButton from "../button";

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
      <S.CloseIconContainer onClick={handleClose} data-testid="close-icon">
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
      <FormControl sx={{ mt: 3, minWidth: 320 }}>
        <TextField
          id="name"
          label="Name"
          variant="outlined"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          data-testid="name"
        />
      </FormControl>

      <FormControl sx={{ mt: 3, minWidth: 320 }}>
        <TextField
          id="amount"
          label="Amount"
          variant="outlined"
          placeholder="Amount"
          name="amount"
          type="number"
          value={formik.values.amount}
          onChange={formik.handleChange}
          error={formik.touched.amount && Boolean(formik.errors.amount)}
          helperText={formik.touched.amount && formik.errors.amount}
          data-testid="amount"
        />
      </FormControl>

      <FormControl
        sx={{ mt: 3, minWidth: 320 }}
        error={formik.touched.type && Boolean(formik.errors.type)}
      >
        <InputLabel id="type">Type</InputLabel>
        <Select
          id="type"
          value={formik.values.type}
          label="Type"
          data-testid="type"
          onChange={handleChangeType}
        >
          <MenuItem value={0} disabled>
            Type
          </MenuItem>
          <MenuItem value={ItemType.Protein} data-testid="type-protein">
            Protein
          </MenuItem>
          <MenuItem value={ItemType.Fat} data-testid="type-fat">
            Fat
          </MenuItem>
          <MenuItem
            value={ItemType.Carbohydrate}
            data-testid="type-carbohydrate"
          >
            Carbohydrate
          </MenuItem>
        </Select>
        <FormHelperText>Item Type</FormHelperText>
      </FormControl>
      <FormControl sx={{ mt: 3, minWidth: 320 }}>
        <PrimaryButton
          variant="contained"
          data-testid="register-button"
          type="submit"
        >
          Cadastrar
        </PrimaryButton>
      </FormControl>
    </form>
  );
};
export default FormAddItem;
