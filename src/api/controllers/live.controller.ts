import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { LiveService, LiveResponseDto, LiveRequestDto } from 'src/common';

@ApiTags('Lives')
@Controller('/live')
export class LiveController {

  constructor(private readonly liveService: LiveService) {}

  @Post()
  async createLive(@Body() live: LiveRequestDto): Promise<LiveResponseDto> {
    return await this.liveService.createLive(live);
  }

  @Get(':id')
  async fetchLive(@Param('id') liveId: string): Promise<LiveResponseDto> {
    return await this.liveService.fetchLive(liveId);
  }

  @Put(':id')
  async updateLive(@Param('id') liveId: string, @Body() live: LiveRequestDto): Promise<LiveResponseDto> {
    return await this.liveService.updateLive(liveId, live);
  }

  @Delete(':id')
  async deleteLive(@Param('id') liveId: string): Promise<LiveResponseDto> {
    return await this.liveService.deleteLive(liveId);
  }

}
