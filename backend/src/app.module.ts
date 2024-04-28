import { Module } from '@nestjs/common';
import { PokemonModule } from './pokemon/pokemon.module';
import { TypeOrmModule } from './datasource/typeorm.module';
import { BattleModule } from './battle/battle.module';

@Module({
  imports: [TypeOrmModule, PokemonModule, BattleModule],
})
export class AppModule {}
