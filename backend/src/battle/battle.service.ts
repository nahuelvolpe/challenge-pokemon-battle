import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Battle } from './battle.entity';

@Injectable()
export class BattleService {
    constructor(
        @InjectRepository(Battle)
        private battleRepository: Repository<Battle>,
      ) {}
    
      async create(winnerId: number, loserId: number): Promise<Battle> {
        const battle = new Battle();
        battle.winnerId = winnerId;
        battle.loserId = loserId;
        battle.createdAt = new Date();
        return this.battleRepository.save(battle);
      }
}
