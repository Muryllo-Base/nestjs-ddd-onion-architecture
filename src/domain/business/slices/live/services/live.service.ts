import { Injectable } from '@nestjs/common';
import { CommandBus, ICommand, IQuery, QueryBus } from '@nestjs/cqrs';

import { Live } from 'src/domain/business/slices/live/models';
import { FetchOneLiveQuery } from 'src/domain/business/slices/live/queries';

import {
  CreateLiveCommand,
  DeleteLiveCommand,
  UpdateLiveCommand
} from 'src/domain/business/slices/live/commands';

@Injectable()
export class LiveDomainService {

  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus
  ) {}

  async create(title: string): Promise<Live> {
    const command = new CreateLiveCommand(title);
    return this.commandBus.execute<ICommand, Live>(command);
  }

  async fetchById(liveId: string): Promise<Live> {
    const query = new FetchOneLiveQuery(liveId);
    return this.queryBus.execute<IQuery, Live>(query);
  }

  async deleteById(liveId: string): Promise<Live> {
    const command = new DeleteLiveCommand(liveId);
    return this.commandBus.execute<ICommand, Live>(command);
  }

  async updateById(liveId: string, title: string): Promise<Live> {
    const command = new UpdateLiveCommand(liveId, title);
    return this.commandBus.execute<ICommand, Live>(command);
  }

}
