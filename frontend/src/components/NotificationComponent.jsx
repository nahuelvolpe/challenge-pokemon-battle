import { useMemo } from "react";
import { Box, Collapse, Alert } from "@mui/material";

/**
 * Componente que representa un stack para informar el pokemon ganador.
 *
 * @param {Boolean} open - Indica si el stack de notificación esta abierto o cerrado.
 * @param {Dispatch<React.SetStateAction<boolean>>} setOpen - setState para cambiar el estado de open.
 * @param {Pokemon} winnerPokemon - Pokemon ganador de la batalla.
 * @returns {ReactNode} - Componente de React que representa un stack para informar el pokemon ganador.
 */
export const NotificationComponent = ({ open, setOpen, winnerPokemon }) => {
  const notificationMessage = useMemo(() => {
    if (!winnerPokemon) return null;
    return `${winnerPokemon.name} wins!`;
  }, [winnerPokemon]);

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
          {notificationMessage}
        </Alert>
      </Collapse>
    </Box>
  );
};
