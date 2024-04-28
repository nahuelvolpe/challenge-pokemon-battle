import { Pokemon } from 'src/pokemon/pokemon.entity';

export class BattleDto {
  pokemonSelected: Pokemon;
  pokemonRival: Pokemon;
}
