import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { Live } from 'src/domain/business/slices/live/models';
import { DeleteLiveCommand } from 'src/domain/business/slices/live/commands';
import { LiveRepository } from 'src/domain/business/slices/live/repositories';
import { LiveNotFoundDomainException } from 'src/domain/business/slices/live/exceptions';

@CommandHandler(DeleteLiveCommand)
export class DeleteLiveHandler implements ICommandHandler<DeleteLiveCommand> {

  constructor(
    private readonly repository: LiveRepository
  ) {}

  async execute(command: DeleteLiveCommand): Promise<Live> {
    try {
      const previousLive = await this.repository.fetchOne({
        where: {
          id: command.liveId
        }
      });
  
      const updateResult = await this.repository.deleteById(previousLive.id);
  
      if (!updateResult.affected) {
        throw new LiveNotFoundDomainException();
      }
  
      return previousLive;
    } catch (e) {
      throw new LiveNotFoundDomainException();
    }
  }

}
