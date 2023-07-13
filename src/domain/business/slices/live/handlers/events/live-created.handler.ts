import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { LiveCreatedEvent } from 'src/domain/business/slices/live/events';

@EventsHandler(LiveCreatedEvent)
export class LiveCreatedEventHandler implements IEventHandler<LiveCreatedEvent> {

  handle(event: LiveCreatedEvent) {
    console.log(`[LiveCreatedEvent] Live has created with ID (${event.id}).`);
  }

}
