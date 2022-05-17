import { Public } from '@finastra/nestjs-oidc';
import { Controller, Get } from '@nestjs/common';
import { HealthCheck } from '@nestjs/terminus';

@Controller('health')
export class HealthController {
  constructor() { }
  //constructor(private health: HealthCheckService, private mongoose: MongooseHealthIndicator) {}

  @Get()
  @Public()
  @HealthCheck()
  healthCheck() {
    return true;
    //return this.health.check([async () => this.mongoose.pingCheck('mongoose')]);
  }
}
