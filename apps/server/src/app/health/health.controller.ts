import { Controller, Get } from '@nestjs/common';
import { HealthCheck } from '@nestjs/terminus';

@Controller('health')
export class HealthController {
  //constructor(private health: HealthCheckService, private mongoose: MongooseHealthIndicator) {}

  @Get()
  @HealthCheck()
  readiness() {
    return true;
    //return this.health.check([async () => this.mongoose.pingCheck('mongoose')]);
  }
}
