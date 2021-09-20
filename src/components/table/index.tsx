import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import { ItemType, ListItem } from "../../types/list";
import { useList } from "../../hooks/useList";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#072acd",
    color: theme.palette.common.white,
    fontWeight: "bold",
    fontSize: 18,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#fff",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function RegisterTable() {
  const { listItem, selectedDate, filteredItems, deleteItem } = useList();

  const handleDelete = (e: any) => {
    deleteItem(parseInt(e.currentTarget.dataset.value));
  };

  console.log("FILTERED DELETE", filteredItems);

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
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Amount</StyledTableCell>
            <StyledTableCell align="right">Type</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody data-testid="table-body-register">
          {!selectedDate &&
            listItem.map((row: ListItem) => {
              return (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.amount}</StyledTableCell>
                  <StyledTableCell align="right">
                    {setTypeName(row.type)}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <div
                      style={{ cursor: "pointer" }}
                      data-value={row.id}
                      onClick={handleDelete}
                    >
                      <DeleteIcon />
                    </div>
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
          {!!selectedDate &&
            filteredItems.map((row: ListItem) => {
              return (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.amount}</StyledTableCell>
                  <StyledTableCell align="right">
                    {setTypeName(row.type)}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <div
                      style={{ cursor: "pointer" }}
                      data-value={row.id}
                      onClick={handleDelete}
                    >
                      <DeleteIcon />
                    </div>
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
