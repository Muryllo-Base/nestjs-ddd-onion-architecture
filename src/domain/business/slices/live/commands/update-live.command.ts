import { ICommand } from '@nestjs/cqrs';

export class UpdateLiveCommand implements ICommand {
  constructor(
    public readonly liveId: string,
    public readonly title: string
  ) {}
}
