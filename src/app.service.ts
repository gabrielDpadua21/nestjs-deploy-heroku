import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Test deploy vercel with actions 3!!!';
  }
}
