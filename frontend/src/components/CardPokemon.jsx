import { styled } from "@mui/material/styles";
import { Card, CardContent, Typography } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 7,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#dbdad7",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#76ff03",
  },
}));

/**
 * Componente que representa una card de un pokemon con una imagen, su nombre y sus stats.
 *
 * @param {Pokemon} pokemon - Pokemon que se enfrentara en la batalla.
 * @param {Function} cardAction - Función que se ejecuta al hacer click en la card.
 * @param {Boolean} stats - Booleano utilizado para mostrar/ocultar las stats del pokemon.
 * @returns {ReactNode} - Componente de React que representa a una card de un pokemon con una imagen, su nombre y sus stats.
 */
export const CardPokemon = ({ pokemon, cardAction = null, stats = false }) => {
  return (
    <Card
      sx={{ cursor: cardAction ? "pointer" : "default", boxShadow: 3 }}
      onClick={() => {
        if (cardAction) cardAction();
      }}
    >
      <CardContent>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <img src={pokemon.imageUrl} alt={pokemon.name} width="50%" />
        </div>
        <Typography variant="h5">{pokemon.name}</Typography>
        {stats && (
          <div>
            <Typography>Attack</Typography>
            <BorderLinearProgress
              variant="determinate"
              value={(pokemon.attack / 10) * 100}
            />
            <Typography>Defense</Typography>
            <BorderLinearProgress
              variant="determinate"
              value={(pokemon.defense / 10) * 100}
            />
            <Typography>HP</Typography>
            <BorderLinearProgress
              variant="determinate"
              value={(pokemon.hp / 10) * 100}
            />
            <Typography>Speed</Typography>
            <BorderLinearProgress
              variant="determinate"
              value={(pokemon.speed / 10) * 100}
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
};
