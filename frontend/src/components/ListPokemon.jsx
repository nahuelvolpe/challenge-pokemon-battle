import {
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Typography,
} from "@mui/material";

export const ListPokemon = ({ pokemons, setSelectedPokemon }) => {
  return (
    <Grid container spacing={2} mt={1}>
      {pokemons.map((pokemon) => (
        <Grid item xs key={pokemon.id}>
          <Card
            sx={{ cursor: "pointer" }}
            onClick={() => setSelectedPokemon(pokemon)}
          >
            <CardActionArea>
              <CardContent>
                <img src={pokemon.imageUrl} alt={pokemon.name} width="100%" />
                <Typography variant="h6">{pokemon.name}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
