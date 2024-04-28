import axios from "axios";
import { useState, useEffect } from "react";
import { ListPokemon } from "../components/ListPokemon";
import { Grid, Typography } from "@mui/material";

export const PokemonPage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const fetchPokemons = async () => {
    const response = await axios.get("http://localhost:3000/pokemon");
    setPokemons(response?.data);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <Grid container direction="column" spacing={2}>
      <Typography variant="h4">Pokemon Battle</Typography>
      <Typography variant="h6">Select your pokemon</Typography>
      <ListPokemon
        pokemons={pokemons}
        setSelectedPokemon={setSelectedPokemon}
      />
    </Grid>
  );
};
