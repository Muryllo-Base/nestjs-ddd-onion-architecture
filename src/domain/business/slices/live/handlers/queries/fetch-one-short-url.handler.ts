import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { Live } from 'src/domain/business/slices/live/models';
import { FetchOneLiveQuery } from 'src/domain/business/slices/live/queries';
import { LiveRepository } from 'src/domain/business/slices/live/repositories';
import { LiveNotFoundDomainException } from 'src/domain/business/slices/live/exceptions';

@QueryHandler(FetchOneLiveQuery)
export class FetchOneLiveHandler implements IQueryHandler<FetchOneLiveQuery> {

  constructor(private readonly repository: LiveRepository) {}

  async execute(query: FetchOneLiveQuery): Promise<Live> {
    try {
      return await this.repository.fetchOne({
        where: {
          id: query.liveId
        }
      });
    } catch (e) {
      throw new LiveNotFoundDomainException();
    }
  }

}
