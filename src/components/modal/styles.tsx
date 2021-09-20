import { styled } from "@mui/system";
import { Fab, Box } from "@mui/material";

const Container = styled("div")({
  position: "fixed",
  bottom: 30,
  right: 30,
});

const Background = styled("div")({
  background: "#fff",
});

const ModalBox = styled(Box)({
  position: "absolute",
  display: "flex",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 400,
  padding: 40,
  background: '#fff',
  boxShadow: '5px 5px 37px -9px rgba(0,0,0,0.43)',
});

const CustomFab = styled(Fab)({
  background: "#072acd",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#311b92",
  },
});

export { Container, ModalBox, Background, CustomFab };
