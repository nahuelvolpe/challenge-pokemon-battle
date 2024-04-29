import axios from "axios";
import { useState, useEffect } from "react";
import { ListPokemon } from "../components/ListPokemon";
import { Grid, Typography } from "@mui/material";
import { BattleComponent } from "../components/BattleComponent";

export const PokemonPage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [rivalPokemon, setRivalPokemon] = useState(null);

  const fetchPokemons = async () => {
    const response = await axios.get("http://localhost:3000/pokemon");
    setPokemons(response?.data);
  };

  const getRivalPokemon = () => {
    const availablePokemons = pokemons.filter(
      (pokemon) => pokemon.id !== selectedPokemon.id
    );

    const randomIndex = Math.floor(Math.random() * availablePokemons.length);

    return availablePokemons[randomIndex];
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  useEffect(() => {
    if (selectedPokemon) {
      setRivalPokemon(getRivalPokemon());
    }
  }, [selectedPokemon]);

  return (
    <Grid container direction="column" spacing={2}>
      <Typography variant="h4">Battle of Pokemon</Typography>
      <Typography variant="h6">Select your pokemon</Typography>
      <ListPokemon
        pokemons={pokemons}
        setSelectedPokemon={setSelectedPokemon}
      />
      {selectedPokemon && rivalPokemon && (
        <BattleComponent
          selectedPokemon={selectedPokemon}
          rivalPokemon={rivalPokemon}
        />
      )}
    </Grid>
  );
};
