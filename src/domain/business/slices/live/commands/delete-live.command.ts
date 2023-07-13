import { ICommand } from '@nestjs/cqrs';

export class DeleteLiveCommand implements ICommand {
  constructor(
    public readonly liveId: string
  ) {}
}
