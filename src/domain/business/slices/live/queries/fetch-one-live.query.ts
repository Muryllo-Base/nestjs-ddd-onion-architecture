import { IQuery } from '@nestjs/cqrs';

export class FetchOneLiveQuery implements IQuery {
  constructor(
    public readonly liveId: string
  ) {}
}
