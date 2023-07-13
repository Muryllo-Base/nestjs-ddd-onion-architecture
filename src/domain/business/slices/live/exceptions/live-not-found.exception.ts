import { HttpStatus } from '@nestjs/common';
import { DomainException } from 'src/domain/exceptions';

export class LiveNotFoundDomainException extends DomainException {
  constructor() {
    super('A Live especificada não foi encontrada.', HttpStatus.NOT_FOUND);
  }
}
