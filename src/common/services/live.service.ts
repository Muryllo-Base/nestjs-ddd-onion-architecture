import { Injectable } from '@nestjs/common';
import { LiveDomainService } from 'src/domain';
import { LiveRequestDto, LiveResponseDto } from 'src/common';

@Injectable()
export class LiveService {
  
  constructor(private readonly liveDomainService: LiveDomainService) {}

  async createLive(live: LiveRequestDto): Promise<LiveResponseDto> {
    const entity = await this.liveDomainService.create(live.title);
    return entity.toDto(LiveResponseDto);
  }

  async fetchLive(liveId: string): Promise<LiveResponseDto> {
    const entity = await this.liveDomainService.fetchById(liveId);
    return entity.toDto(LiveResponseDto);
  }

  async updateLive(liveId: string, live: LiveRequestDto): Promise<LiveResponseDto> {
    const entity = await this.liveDomainService.updateById(liveId, live.title);
    return entity.toDto(LiveResponseDto);
  }

  async deleteLive(liveId: string): Promise<LiveResponseDto> {
    const entity = await this.liveDomainService.deleteById(liveId);
    return entity.toDto(LiveResponseDto);
  }

}
