import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { CreateLiveCommand } from 'src/domain/business/slices/live/commands';
import { LiveRepository } from 'src/domain/business/slices/live/repositories';
import { Live } from 'src/domain/business/slices/live/models';

@CommandHandler(CreateLiveCommand)
export class CreateLiveHandler implements ICommandHandler<CreateLiveCommand> {

  constructor(
    private readonly repository: LiveRepository
  ) {}

  async execute(command: CreateLiveCommand): Promise<Live> {
    return await this.repository.create(command.title);
  }

}
