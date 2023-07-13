import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common';
import { LiveController } from 'src/api/controllers';

@Module({
  imports: [CommonModule],
  controllers: [
    LiveController
  ]
})
export class ApiModule {}
