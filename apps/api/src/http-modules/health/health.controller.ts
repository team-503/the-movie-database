import { Controller, Get } from '@nestjs/common'
import { HealthCheck } from '@nestjs/terminus'
import { HealthService } from './health.service'

@Controller('healthcheck')
export class HealthController {
    constructor(private readonly healthService: HealthService) {}

    @Get()
    @HealthCheck()
    healthcheck() {
        return this.healthService.healthcheck()
    }

    @Get('extended')
    @HealthCheck()
    terminusHealth() {
        return this.healthService.terminusHealth()
    }
}
