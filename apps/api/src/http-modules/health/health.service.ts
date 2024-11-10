import { Injectable } from '@nestjs/common'
import {
    DiskHealthIndicator,
    HealthCheckService,
    HttpHealthIndicator,
    MemoryHealthIndicator,
    TypeOrmHealthIndicator,
} from '@nestjs/terminus'

@Injectable()
export class HealthService {
    constructor(
        private readonly healthCheck: HealthCheckService,
        private readonly http: HttpHealthIndicator,
        private readonly typeorm: TypeOrmHealthIndicator,
        private readonly disk: DiskHealthIndicator,
        private readonly memory: MemoryHealthIndicator,
    ) {}

    healthcheck() {
        return {
            status: 'OK',
        }
    }

    terminusHealth() {
        return this.healthCheck.check([
            () => this.http.pingCheck('some nestjs docs external api', 'https://docs.nestjs.com'),
            () => this.typeorm.pingCheck('typeorm'),
            /**
             * would be unhealthy in case the path / would exceed 80% or 250 GB
             */
            () =>
                this.disk.checkStorage('storage', {
                    path: '/',
                    // thresholdPercent: 0.8,
                    threshold: 250 * 1024 * 1024 * 1024,
                }),
            /**
             * would return an unhealthy response code in case your process does have more than 150 MB allocated
             */
            () => this.memory.checkHeap('memory_heap', 150 * 1024 * 1024),
        ])
    }
}
