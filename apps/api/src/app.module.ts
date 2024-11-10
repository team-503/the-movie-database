import { join } from 'path'
import {
    ApolloServerPluginLandingPageLocalDefault,
    ApolloServerPluginLandingPageProductionDefault,
} from '@apollo/server/plugin/landingPage/default'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { CacheModule } from '@nestjs/cache-manager'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ThrottlerModule } from '@nestjs/throttler'
import { TypeOrmModule } from '@nestjs/typeorm'
import ms from 'ms'
import { ENV } from './common/env'
import './enums'
import { AuthModule } from './http-modules/auth/auth.module'
import { HealthModule } from './http-modules/health/health.module'
import { MovieModule } from './http-modules/movie/movie.module'

@Module({
    imports: [
        ThrottlerModule.forRoot([
            {
                name: 'short',
                ttl: ms('1s'),
                limit: 3,
            },
            {
                name: 'medium',
                ttl: ms('10s'),
                limit: 20,
            },
            {
                name: 'long',
                ttl: ms('60s'),
                limit: 100,
            },
        ]),
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: './LOCAL/db.sqlite',
            entities: [join(__dirname, '**', '*.entity.{js,ts}')],
            synchronize: ENV.isDevelopment(),
            cache: ENV.isDevelopment(),
            logging: ENV.isDevelopment() ? ['query', 'error'] : false,
        }),
        CacheModule.register({
            isGlobal: true,
        }),
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            path: '/graphql',
            autoSchemaFile: join(process.cwd(), './src/schema.gql'),
            sortSchema: false,
            playground: false,
            introspection: ENV.isDevelopment(),
            includeStacktraceInErrorResponses: ENV.isDevelopment(),
            plugins: [
                ENV.isDevelopment()
                    ? ApolloServerPluginLandingPageLocalDefault({ footer: false })
                    : ApolloServerPluginLandingPageProductionDefault({ footer: false }),
            ],
        }),
        /* http-modules */
        AuthModule,
        HealthModule,
        MovieModule,
        /* modules */
    ],
})
export class AppModule {}
