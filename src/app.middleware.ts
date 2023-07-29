import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class checkLoggedInMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const isLoggedIn = true;

    if (!isLoggedIn) {
      return res.status(401).json({
        error: 'You must log in!',
      });
    }
    console.log('ola');
    next();
  }
}
