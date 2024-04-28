import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BattleController } from './battle.controller';
import { BattleService } from './battle.service';
import { Battle } from './battle.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Battle])],
  controllers: [BattleController],
  providers: [BattleService]
})
export class BattleModule {}
