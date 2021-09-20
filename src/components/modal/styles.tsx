import { styled } from "@mui/system";
import { Fab } from "@mui/material";

const Container = styled("div")({
  position: "fixed",
  bottom: 30,
  right: 30,
});

const Background = styled("div")({
  background: "#fff",
});

const CustomFab = styled(Fab)({
  background: "#072acd",
  color: "#fff",
  '&:hover': {
    backgroundColor: '#311b92',
  },
});

export { Container, Background, CustomFab };
