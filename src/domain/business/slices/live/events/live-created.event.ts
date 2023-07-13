import { IEvent } from '@nestjs/cqrs';
import { Live } from 'src/domain/business/slices/live/models';

export class LiveCreatedEvent implements IEvent {
  constructor(
    public readonly id: string,
    public readonly live: Live,
  ) {}
}
