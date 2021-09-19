import React from "react";
import { AppBar, Box, Toolbar } from "@mui/material";

const Header: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar />
      </AppBar>
    </Box>
  );
};
export default Header;
