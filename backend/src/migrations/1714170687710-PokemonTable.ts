import { MigrationInterface, QueryRunner } from 'typeorm';
import * as pokemonData from '../data/pokemon-data.json';

export class PokemonTable1714170176299 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await Promise.all(
      pokemonData.pokemon.map((pokemon) =>
        queryRunner.query(`
                INSERT INTO "pokemon" ("name", "attack", "defense", "hp", "speed", "type", "imageUrl")
                VALUES ("${pokemon.name}", ${pokemon.attack}, ${pokemon.defense}, ${pokemon.hp}, ${pokemon.speed}, "${pokemon.type}", "${pokemon.imageUrl}")
              `),
      ),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "pokemon"`);
  }
}
