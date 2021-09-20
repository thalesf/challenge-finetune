import React from "react";
import FormAddItem from "../form";
import { Fab, Modal, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import * as S from "./styles";

const ModalItem: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <S.Container>
      <Modal open={open} onClose={handleClose}>
        <S.Background>
          <Box
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
            <FormAddItem handleClose={handleClose} />
          </Box>
        </S.Background>
      </Modal>

      <Fab
        sx={{ background: "#072acd", color: "#fff" }}
        aria-label="add"
        onClick={handleOpen}
        data-testid="add-new-button"
      >
        <AddIcon />
      </Fab>
    </S.Container>
  );
};
export default ModalItem;
