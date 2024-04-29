import React from "react";
import { Grid, Button } from "@mui/material";
import { CardPokemon } from "./CardPokemon";

export const BattleComponent = ({ selectedPokemon, rivalPokemon }) => {
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
        <Button variant="contained" color="success">
          Start Battle
        </Button>
      </Grid>
      <Grid item xs={5}>
        <CardPokemon pokemon={rivalPokemon} />
      </Grid>
    </Grid>
  );
};
