import { useState, useEffect } from "react";
import axios from "axios";

/**
 * Hook utilizado para manejar la lógica de batalla, como también para ejecutar las request
 * que populan la lista de pokemon y lanzan la batalla.
 */
export const useBattle = () => {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [rivalPokemon, setRivalPokemon] = useState(null);
  const [winnerPokemon, setWinnerPokemon] = useState(null);
  const [openNotification, setOpenNotification] = useState(false);

  const fetchPokemons = async () => {
    try {
      const response = await axios.get("http://localhost:3000/pokemon");
      setPokemons(response?.data);
    } catch (error) {
      console.error(error);
    }
  };

  const battleHandle = async () => {
    if (selectedPokemon && rivalPokemon) {
      try {
        const body = {
          pokemonSelected: selectedPokemon,
          pokemonRival: rivalPokemon,
        };
        const response = await axios.post("http://localhost:3000/battle", body);
        setWinnerPokemon(response?.data);
      } catch (error) {
        console.error(error);
      }
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
    if (selectedPokemon) {
      setRivalPokemon(getRivalPokemon());
    }
  }, [selectedPokemon]);

  useEffect(() => {
    if (winnerPokemon) {
      setOpenNotification(true);
    }
  }, [winnerPokemon]);

  return {
    pokemons,
    selectedPokemon,
    rivalPokemon,
    winnerPokemon,
    openNotification,
    setSelectedPokemon,
    setOpenNotification,
    fetchPokemons,
    battleHandle,
  };
};
