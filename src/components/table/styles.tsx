import { TableCell, tableCellClasses, TableRow, styled } from "@mui/material";

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
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export { StyledTableCell, StyledTableRow}