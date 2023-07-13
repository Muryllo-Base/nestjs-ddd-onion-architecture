import { HttpStatus } from '@nestjs/common';
import { DomainException } from 'src/domain/exceptions';

export class LiveNotUpdatedDomainException extends DomainException {
  constructor() {
    super('A Live pôde ser atualizada com sucesso.', HttpStatus.NOT_FOUND);
  }
}
