import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions, Repository, UpdateResult } from 'typeorm';

import { Live } from 'src/domain/business/slices/live/models';
import { LiveNotFoundDomainException } from 'src/domain/business/slices/live/exceptions';

@Injectable()
export class LiveRepository {

  constructor(
    @InjectRepository(Live)
    private readonly repository: Repository<Live>,
  ) {}

  create(title: string): Promise<Live> {
    const user = this.repository.create({ title });
    return this.repository.save(user);
  }

  fetchOne(options: FindOneOptions<Live>): Promise<Live> {
    try {
      return this.repository.findOneOrFail(options);
    } catch (error: any) {
      throw new LiveNotFoundDomainException();
    }
  }

  fetch(options?: FindManyOptions<Live>): Promise<Live[]> {
    try {
      return this.repository.find(options);
    } catch (error: any) {
      throw new LiveNotFoundDomainException();
    }
  }

  fetchById(id: string): Promise<Live> {
    try {
      return this.repository.findOneByOrFail({ id });
    } catch (error) {
      throw new LiveNotFoundDomainException();
    }
  }

  updateById(id: string, user: Partial<Live>): Promise<UpdateResult> {
    return this.repository.update(id, user);
  }

  deleteById(id: string): Promise<UpdateResult> {
    return this.repository.softDelete(id);
  }

}
