import { Controller, Get } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { Pokemon } from './pokemon.entity';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  async getAllPokemon(): Promise<Pokemon[]> {
    return this.pokemonService.getAllPokemon();
  }
}
