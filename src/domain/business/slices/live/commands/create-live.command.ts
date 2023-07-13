import { ICommand } from '@nestjs/cqrs';

export class CreateLiveCommand implements ICommand {
  constructor(
    public readonly title: string
  ) {}
}
