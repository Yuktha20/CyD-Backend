import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { DbService } from './shared';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AppService {
  constructor(private readonly db: DbService, private readonly httpService: HttpService) { }

  async getHello(): Promise<string> {
    const result = await this.db.create('vitalikWatchlist', ['matic-network']);
    return `Hello Wold! ${JSON.stringify(result)}`;
  }

  async getBalance(): Promise<string> {
    const myKey = "AIzaSyCauaHG7ET47G4K-DYLvT2O70Lz7-7levo"
    const url = `https://api.covalenthq.com/v1/1/address/0x52114fb7396dbe19096ffa343d18830f5d77b6c6/balances_v2/?key=AIzaSyCauaHG7ET47G4K-DYLvT2O70Lz7-7levo`
    const { data } = await firstValueFrom(this.httpService.get(url));
    return data;
  }
}
