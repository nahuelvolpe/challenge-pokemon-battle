import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonModule } from './pokemon/pokemon.module';
import { TypeOrmModule } from './datasource/typeorm.module';
import { BattleModule } from './battle/battle.module';

@Module({
  imports: [TypeOrmModule, PokemonModule, BattleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
