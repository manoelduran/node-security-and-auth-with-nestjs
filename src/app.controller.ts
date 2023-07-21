import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('download')
  async downloadFile(@Res() res: Response): Promise<any> {
    return this.appService.getFile(res);
  }
  @Get('secret')
  async secretCode(@Res() res: Response): Promise<string> {
    return this.appService.secretCode(res);
  }
}
