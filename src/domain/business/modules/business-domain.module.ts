import { Module } from '@nestjs/common';
import { LiveModule } from './live.module';

@Module({
  imports: [LiveModule],
  exports: [LiveModule]
})
export class BusinessDomainModule { }
