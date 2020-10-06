import React from "react";
import {
  DialogTitle,
  IconButton,
  DialogContent,
  DialogActions,
  Button,
  Dialog,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/CloseOutlined";
import { useSylesSignIn } from "../../pages/SignIn";

interface ModalProps {
  children: React.ReactNode;
  title: string;
  classes: ReturnType<typeof useSylesSignIn>;
  open: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({
  title,
  children,
  open = false,
  onClose,
}): React.ReactElement => {
  return (
    <div>
      {open && (
        <Dialog open={open} onClose={onClose}>
          <DialogTitle id="form-dialog-title">
            <IconButton onClick={onClose} color="secondary" aria-label="close">
              <CloseIcon style={{ fontSize: 26 }} color="primary" />
            </IconButton>
            {title}
          </DialogTitle>
          <DialogContent>{children}</DialogContent>
          <DialogActions>
            <Button onClick={onClose} color="primary">
              Cancel
            </Button>
            <Button variant="contained">Login</Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
};

export default Modal;
