import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { Live } from 'src/domain/business/slices/live/models';
import { UpdateLiveCommand } from 'src/domain/business/slices/live/commands';
import { LiveRepository } from 'src/domain/business/slices/live/repositories';
import { LiveNotUpdatedDomainException } from 'src/domain/business/slices/live/exceptions';

@CommandHandler(UpdateLiveCommand)
export class UpdateLiveHandler implements ICommandHandler<UpdateLiveCommand> {

  constructor(
    private readonly repository: LiveRepository
  ) {}

  async execute(command: UpdateLiveCommand): Promise<Live> {
    try {
      const previousLive = await this.repository.fetchOne({
        where: {
          id: command.liveId
        }
      });

      previousLive.title = command.title;
      delete previousLive.updatedAt;

      const updateResult = await this.repository.updateById(
        previousLive.id, 
        previousLive
      );

      if (!updateResult.affected) {
        throw new Error();
      }

      const currentLive = await this.repository.fetchOne({
        where: {
          id: command.liveId
        }
      });

      return currentLive;
    } catch (e) {
      throw new LiveNotUpdatedDomainException();
    }
  }

}
