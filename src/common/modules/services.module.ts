import { Module } from '@nestjs/common';

import { ConfigurationService, LiveService } from 'src/common/services';

import { DomainModule } from 'src/domain';
import { CachingModule } from './caching.module';
import { DatabaseModule } from './database.module';
import { ConfigurationModule } from './configuration.module';

@Module({
  imports: [
    DomainModule,
    CachingModule,
    DatabaseModule,
    ConfigurationModule
  ],
  providers: [
    ConfigurationService,
    LiveService
  ],
  exports: [
    ConfigurationService,
    LiveService
  ]
})
export class ServicesModule {}
