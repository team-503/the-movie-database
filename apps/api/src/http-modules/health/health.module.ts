import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { TerminusModule } from '@nestjs/terminus'
import { ENV } from '../../common/env'
import { HealthController } from './health.controller'
import { HealthService } from './health.service'

@Module({
    imports: [
        TerminusModule.forRoot({
            errorLogStyle: ENV.isDevelopment() ? 'pretty' : 'json',
        }),
        HttpModule,
    ],
    controllers: [HealthController],
    providers: [HealthService],
})
export class HealthModule {}
