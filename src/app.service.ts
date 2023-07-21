import { Injectable, Res } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';

@Injectable()
export class AppService {
  getFile(@Res() res: Response): any {
    const fileLocation = join(__dirname, '..', 'public', 'index.html'); // Replace with the actual file path
    res.sendFile(fileLocation);
  }
  getHello(): string {
    return 'Hello World!';
  }
  secretCode(@Res() res: Response): any {
    return res.send(
      `Your perssonal secret code is ${process.env.SECRET_CODE}!`,
    );
  }
}
