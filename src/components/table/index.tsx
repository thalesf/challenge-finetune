import React from "react";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { ItemType, ListItem } from "../../types/list";
import { useList } from "../../hooks/useList";
import * as S from "./styles";

export default function RegisterTable() {
  const { listItem, selectedDate, filteredItems, deleteItem } = useList();

  const handleDelete = (e: any) => {
    deleteItem(parseInt(e.currentTarget.dataset.value));
  };

  const setTypeName = (type: number) => {
    switch (type) {
      case ItemType.Protein:
        return "Protein";
      case ItemType.Fat:
        return "Fat";
      default:
        return "Carbohydrate";
    }
  };

  return (
    <TableContainer
      sx={{
        mt: 10,
      }}
      component={Paper}
    >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <S.StyledTableCell>Name</S.StyledTableCell>
            <S.StyledTableCell align="right">Amount</S.StyledTableCell>
            <S.StyledTableCell align="right">Type</S.StyledTableCell>
            <S.StyledTableCell align="right"></S.StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody data-testid="table-body-register">
          {!selectedDate &&
            listItem.map((row: ListItem) => {
              return (
                <S.StyledTableRow key={row.id}>
                  <S.StyledTableCell component="th" scope="row">
                    {row.name}
                  </S.StyledTableCell>
                  <S.StyledTableCell align="right">
                    {row.amount}
                  </S.StyledTableCell>
                  <S.StyledTableCell align="right">
                    {setTypeName(row.type)}
                  </S.StyledTableCell>
                  <S.StyledTableCell align="right">
                    <div
                      style={{ cursor: "pointer" }}
                      data-value={row.id}
                      onClick={handleDelete}
                    >
                      <DeleteIcon />
                    </div>
                  </S.StyledTableCell>
                </S.StyledTableRow>
              );
            })}
          {!!selectedDate &&
            filteredItems.map((row: ListItem) => {
              return (
                <S.StyledTableRow key={row.id}>
                  <S.StyledTableCell component="th" scope="row">
                    {row.name}
                  </S.StyledTableCell>
                  <S.StyledTableCell align="right">
                    {row.amount}
                  </S.StyledTableCell>
                  <S.StyledTableCell align="right">
                    {setTypeName(row.type)}
                  </S.StyledTableCell>
                  <S.StyledTableCell align="right">
                    <div
                      style={{ cursor: "pointer" }}
                      data-value={row.id}
                      onClick={handleDelete}
                    >
                      <DeleteIcon />
                    </div>
                  </S.StyledTableCell>
                </S.StyledTableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
