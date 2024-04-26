import { DataSource } from 'typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonModule } from './pokemon/pokemon.module';
import { Pokemon } from './pokemon/pokemon.entity';
import { TypeOrmModule } from './datasource/typeorm.module';

@Module({
  imports: [PokemonModule, TypeOrmModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
