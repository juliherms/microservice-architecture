import { Injectable } from '@nestjs/common';

/**
 * Permite a injeção de dependências
 */
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
