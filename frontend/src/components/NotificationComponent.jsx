import { Box, Collapse, Alert } from "@mui/material";

export const NotificationComponent = ({ open, setOpen, winnerPokemon }) => {
  return (
    <Box sx={{ width: "100%", mt: 3 }}>
      <Collapse in={open}>
        <Alert
          variant="filled"
          severity="info"
          onClose={() => {
            setOpen(false);
          }}
        >
          {`${winnerPokemon.name} wins!`}
        </Alert>
      </Collapse>
    </Box>
  );
};
