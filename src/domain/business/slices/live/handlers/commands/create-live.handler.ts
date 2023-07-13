import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';

import { CreateLiveCommand } from 'src/domain/business/slices/live/commands';
import { LiveRepository } from 'src/domain/business/slices/live/repositories';
import { LiveCreatedEvent } from 'src/domain/business/slices/live/events';
import { Live } from 'src/domain/business/slices/live/models';

@CommandHandler(CreateLiveCommand)
export class CreateLiveHandler implements ICommandHandler<CreateLiveCommand> {

  constructor(
    private readonly repository: LiveRepository,
    private readonly eventBus: EventBus,
  ) {}

  async execute(command: CreateLiveCommand): Promise<Live> {
    const createdLive = await this.repository.create(command.title);
    this.eventBus.publish(new LiveCreatedEvent(createdLive.id, createdLive));
    return createdLive;
  }

}
