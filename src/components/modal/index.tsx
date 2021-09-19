import React from "react";
import FormAddItem from "../form";
import { Fab, Modal } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import * as S from './styles';

const ModalItem: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <S.Container>
      <Modal open={open} onClose={handleClose}>
        <S.Background>
          <FormAddItem />
        </S.Background>
      </Modal>

      <Fab color="primary" aria-label="add" onClick={handleOpen}>
        <AddIcon />
      </Fab>
    </S.Container>
  );
};
export default ModalItem;
