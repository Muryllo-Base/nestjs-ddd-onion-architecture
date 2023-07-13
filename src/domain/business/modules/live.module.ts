import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  CreateLiveHandler,
  FetchOneLiveHandler,
  UpdateLiveHandler,
  DeleteLiveHandler,
  LiveCreatedEventHandler,
} from 'src/domain/business/slices/live';

import {
  Live,
  LiveRepository,
  LiveDomainService,
} from 'src/domain/business/slices/live';

@Module({
  imports: [
    CqrsModule,
    TypeOrmModule.forFeature([Live])
  ],
  providers: [
    CreateLiveHandler,
    FetchOneLiveHandler,
    UpdateLiveHandler,
    DeleteLiveHandler,
    LiveCreatedEventHandler,
    LiveRepository,
    LiveDomainService
  ],
  exports: [LiveDomainService]
})
export class LiveModule { }

