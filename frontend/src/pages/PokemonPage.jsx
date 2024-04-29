import axios from "axios";
import { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import { ListPokemon } from "../components/ListPokemon";
import { BattleComponent } from "../components/BattleComponent";
import { NotificationComponent } from "../components/NotificationComponent";
import { useBattle } from "../hooks/useBattle";

export const PokemonPage = () => {
  const {
    pokemons,
    selectedPokemon,
    rivalPokemon,
    winnerPokemon,
    openNotification,
    setSelectedPokemon,
    setOpenNotification,
    fetchPokemons,
    battleHandle,
  } = useBattle();

  useEffect(() => {
    fetchPokemons();
  }, []);

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
