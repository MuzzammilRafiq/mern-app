import { Alert, AlertTitle, Button, Collapse, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";

import { useState } from "react";

function Error({ severity, message }) {
  const style = {
    width: "400px",
  };

  const [open, setOpen] = useState(true);
  const timer = setTimeout(() => {
    setOpen(false);
  }, 1000);
  return (
    <Box sx={style}>
      <Collapse in={open}>
        <Alert
          severity={severity.toLowerCase()}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          <AlertTitle>{severity}</AlertTitle>
          {message}
        </Alert>
      </Collapse>
    </Box>
  );
}

export default Error;
