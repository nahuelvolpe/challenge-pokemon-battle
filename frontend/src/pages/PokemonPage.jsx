import axios from "axios";
import { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import { ListPokemon } from "../components/ListPokemon";
import { BattleComponent } from "../components/BattleComponent";
import { NotificationComponent } from "../components/NotificationComponent";

export const PokemonPage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [rivalPokemon, setRivalPokemon] = useState(null);
  const [winnerPokemon, setWinnerPokemon] = useState(null);
  const [openNotification, setOpenNotification] = useState(false);

  const fetchPokemons = async () => {
    const response = await axios.get("http://localhost:3000/pokemon");
    setPokemons(response?.data);
  };

  const battleHandle = async () => {
    if (selectedPokemon && rivalPokemon) {
      const body = {
        pokemonSelected: selectedPokemon,
        pokemonRival: rivalPokemon,
      };
      const response = await axios.post("http://localhost:3000/battle", body);
      setWinnerPokemon(response?.data);
    }
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
    if (winnerPokemon) {
      setOpenNotification(true);
    }
  }, [winnerPokemon]);

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
      {winnerPokemon && (
        <NotificationComponent
          open={openNotification}
          setOpen={setOpenNotification}
          winnerPokemon={winnerPokemon}
        />
      )}
      {selectedPokemon && rivalPokemon && (
        <BattleComponent
          selectedPokemon={selectedPokemon}
          rivalPokemon={rivalPokemon}
          battleHandle={battleHandle}
        />
      )}
    </Grid>
  );
};
