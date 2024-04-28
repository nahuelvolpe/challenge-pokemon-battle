import { Controller, Post, Body, Get } from '@nestjs/common';
import { BattleService } from './battle.service';
import { Battle } from './battle.entity';
import { Pokemon } from '../pokemon/pokemon.entity';

interface BattleRequest {
  pokemon1: Pokemon;
  pokemon2: Pokemon;
}

@Controller('battle')
export class BattleController {
  constructor(private readonly battleService: BattleService) {}

  @Get()
  async getAllBattles(): Promise<string> {
    return 'todas las batallas';
  }

  @Post('battle')
  async battle(@Body() data: BattleRequest): Promise<Battle> {
    //TODO: Agregar trycatch
    const { pokemon1, pokemon2 } = data;

    // Calculamos el orden de ataque basado en velocidad
    let attacker, defender;
    if (
      pokemon1.speed > pokemon2.speed ||
      (pokemon1.speed === pokemon2.speed && pokemon1.attack > pokemon2.attack)
    ) {
      attacker = pokemon1;
      defender = pokemon2;
    } else {
      attacker = pokemon2;
      defender = pokemon1;
    }

    // Calculamos el daño
    const damage1 = Math.max(attacker.attack - defender.defense, 1);
    const damage2 = Math.max(defender.attack - attacker.defense, 1);

    // Simulamos la batalla
    while (pokemon1.hp > 0 && pokemon2.hp > 0) {
      defender.hp -= damage1;
      console.log(
        `${attacker.name} attack ${defender.name} - damage: ${damage1} - defender hp: ${defender.hp}`,
      );
      if (defender.hp <= 0) break;
      attacker.hp -= damage2;
      console.log(
        `${defender.name} attack ${attacker.name} - damage: ${damage2} - attacker hp: ${attacker.hp}`,
      );
    }

    // Determinamos el ganador
    const winnerId = pokemon1.hp > 0 ? pokemon1.id : pokemon2.id;
    const loserId = pokemon1.hp > 0 ? pokemon2.id : pokemon1.id;

    // Guardamos el resultado de la batalla en la base de datos
    return this.battleService.create(winnerId, loserId);
  }
}
