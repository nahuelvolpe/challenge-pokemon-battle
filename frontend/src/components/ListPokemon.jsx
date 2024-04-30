import Grid from "@mui/material/Grid";
import { CardPokemon } from "./CardPokemon";

/**
 * Componente que representa una lista de pokemons en una card cada uno.
 *
 * @param {Pokemon[]} pokemons - Pokemon seleccionado por el usuario.
 * @param {Dispatch<React.SetStateAction<Pokemon>>} setSelectedPokemon - setState para setear el pokemon seleccionado.
 * @returns {ReactNode} - Componente de React representa una lista de pokemons en una card cada uno.
 */
export const ListPokemon = ({ pokemons, setSelectedPokemon }) => {
  return (
    <Grid container spacing={2} mt={1}>
      {pokemons.map((pokemon) => (
        <Grid item xs={12} sm={6} md key={pokemon.id}>
          <CardPokemon
            pokemon={pokemon}
            cardAction={() => {
              setSelectedPokemon(pokemon);
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
};
