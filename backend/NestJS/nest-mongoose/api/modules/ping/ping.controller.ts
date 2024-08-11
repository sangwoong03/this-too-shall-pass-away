import { Controller, Get, UseInterceptors } from '@nestjs/common';

import { ResponseFormatInterceptor } from '../../common/interceptors/http-response.interceptor';
import { PingService } from './ping.service';
import { PingOutput } from './dto/ping.dto';

@Controller('/api/ping')
@UseInterceptors(ResponseFormatInterceptor)
export class PingController {
  constructor(private readonly pingService: PingService) {}

  @Get()
  ping(): PingOutput {
    return this.pingService.pong();
  }
}