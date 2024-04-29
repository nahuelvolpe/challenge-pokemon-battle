import { Grid, Button } from "@mui/material";
import { CardPokemon } from "./CardPokemon";

/**
 * Componente que representa las cards de los pokemon a batallar con un botón de acción.
 *
 * @param {Pokemon} selectedPokemon - Pokemon seleccionado por el usuario.
 * @param {Pokemon} rivalPokemon - Pokemon aleatorio rival del pokemon seleccionado.
 * @param {Function} battleHandle - Función utilizada para lanzar la batalla.
 * @returns {ReactNode} - Componente de React que representa a los pokemons que se enfrentan y un botón de acción.
 */
export const BattleComponent = ({
  selectedPokemon,
  rivalPokemon,
  battleHandle,
}) => {
  return (
    <Grid
      container
      spacing={2}
      mt={2}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item xs={5}>
        <CardPokemon pokemon={selectedPokemon} />
      </Grid>
      <Grid item xs={2} textAlign={"center"}>
        <Button variant="contained" color="success" onClick={battleHandle}>
          Start Battle
        </Button>
      </Grid>
      <Grid item xs={5}>
        <CardPokemon pokemon={rivalPokemon} />
      </Grid>
    </Grid>
  );
};
