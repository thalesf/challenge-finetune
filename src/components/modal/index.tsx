import React from "react";
import FormAddItem from "../form";
import { Modal } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import * as S from "./styles";

const ModalItem: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <S.Container>
      <Modal open={open} onClose={handleClose}>
        <S.ModalBox>
          <FormAddItem handleClose={handleClose} />
        </S.ModalBox>
      </Modal>

      <S.CustomFab
        aria-label="add"
        onClick={handleOpen}
        data-testid="add-new-button"
      >
        <AddIcon />
      </S.CustomFab>
    </S.Container>
  );
};
export default ModalItem;
