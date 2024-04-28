import { Controller, Post, Body } from '@nestjs/common';
import { BattleService } from './battle.service';
import { BattleDto } from './dto/battle.dto';
import { Pokemon } from '../pokemon/pokemon.entity';

@Controller('battle')
export class BattleController {
  constructor(private readonly battleService: BattleService) {}

  @Post()
  async battle(@Body() pokemons: BattleDto): Promise<Pokemon> {
    const { pokemonSelected, pokemonRival } = pokemons;

    // Calculamos el orden de ataque basado en velocidad
    let attacker, defender;
    if (
      pokemonSelected.speed > pokemonRival.speed ||
      (pokemonSelected.speed === pokemonRival.speed &&
        pokemonSelected.attack > pokemonRival.attack)
    ) {
      attacker = pokemonSelected;
      defender = pokemonRival;
    } else {
      attacker = pokemonRival;
      defender = pokemonSelected;
    }

    // Calculamos el daño
    const damage1 = Math.max(attacker.attack - defender.defense, 1);
    const damage2 = Math.max(defender.attack - attacker.defense, 1);

    // Simulamos la batalla por turnos
    while (pokemonSelected.hp > 0 && pokemonRival.hp > 0) {
      defender.hp -= damage1;
      if (defender.hp <= 0) break;
      attacker.hp -= damage2;
    }

    // Determinamos el ganador
    const winnerPokemon =
      pokemonSelected.hp > 0 ? pokemonSelected : pokemonRival;
    const loserPokemon =
      pokemonSelected.hp > 0 ? pokemonRival : pokemonSelected;

    // Guardamos el resultado en la base de datos
    await this.battleService.create(winnerPokemon.id, loserPokemon.id);

    return winnerPokemon;
  }
}
