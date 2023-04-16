import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import dataSource from '../db/typeorm.config';
import { runSeeders } from 'typeorm-extension';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<string> {
    await runSeeders(dataSource);
    return this.appService.getHello();
  }

}
