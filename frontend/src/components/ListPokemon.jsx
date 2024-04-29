import {
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Typography,
} from "@mui/material";

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
          <Card
            sx={{ cursor: "pointer", boxShadow: 3 }}
            onClick={() => setSelectedPokemon(pokemon)}
          >
            <CardActionArea>
              <CardContent>
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <img src={pokemon.imageUrl} alt={pokemon.name} width="50%" />
                </div>
                <Typography variant="h6">{pokemon.name}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
