import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import config from 'config'
import ms from 'ms'
import { ENV } from '../../common/env'
import { TMDBService } from './tmdb.service'

@Module({
    imports: [
        HttpModule.register({
            timeout: ms('10s'),
            baseURL: config.get<string>('tmdb.baseUrl'),
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${ENV.TMDB_API_KEY}`,
            },
        }),
    ],
    providers: [TMDBService],
    exports: [TMDBService],
})
export class TMDBModule {}
