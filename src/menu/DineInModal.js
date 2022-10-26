import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Dinein from "../assets/menu/icon/dinner_dining_FILL0_wght400_GRAD0_opsz48.svg";
import Takeaway from "../assets/menu/icon/takeout_dining_FILL0_wght400_GRAD0_opsz48.svg";

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const min = 1;
  const max = 8;

  const [value, setValue] = useState();

  return (
    <div>
      <div className="modal--button--containers">
        <Button id="modal--button" variant="outlined" onClick={handleClickOpen}>
          <img src={Dinein} alt="dine-in" />
          Dine-in
        </Button>
        <Button
          id="modal--button"
          variant="outlined"
          onClick={() => {
            props.handleMenuPageChange("MenuCategory");
            props.getTableNumber("Takeaway");
          }}
        >
          <img src={Takeaway} alt="dine-in" />
          Takeaway
        </Button>
      </div>
      <Dialog id="dialog" open={open} onClose={handleClose}>
        <DialogTitle>Dine - In</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter your Table Number</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Table Number"
            type="Number"
            inputProps={{ min, max }}
            value={value}
            onChange={(e) => {
              let value = parseInt(e.target.value, 10);

              if (value > max) value = max;
              if (value < min) value = min;

              setValue(value);
            }}
            fullWidth
            id="outlined-basic"
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button id="cancel--button" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            id="proceed--button"
            onClick={() => {
              props.handleMenuPageChange("MenuCategory");
              props.getTableNumber(value);
            }}
          >
            Proceed
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
