import { ENV } from '@/common/env'
import '@/enums'
import { join } from 'path'
import { HealthModule } from '@/http-modules/health/health.module'
import { MovieModule } from '@/http-modules/movie/movie.module'
import { UserModule } from '@/http-modules/user/user.module'
import {
    ApolloServerPluginLandingPageLocalDefault,
    ApolloServerPluginLandingPageProductionDefault,
} from '@apollo/server/plugin/landingPage/default'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { CacheModule } from '@nestjs/cache-manager'
import { Logger, Module, Scope } from '@nestjs/common'
import { INQUIRER } from '@nestjs/core'
import { GraphQLModule } from '@nestjs/graphql'
import { ThrottlerModule } from '@nestjs/throttler'
import { TypeOrmModule } from '@nestjs/typeorm'
import config from 'config'
import ms from 'ms'

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
            database: config.get<string>('db.url'),
            entities: [join(__dirname, '**', '*.entity.{js,ts}')],
            synchronize: ENV.isDevelopment(),
            cache: ENV.isDevelopment(),
            // logging: ENV.isDevelopment() ? ['query', 'error'] : false,
            logging: false,
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
        HealthModule,
        MovieModule,
        UserModule,
        /* modules */
    ],
    providers: [
        {
            provide: Logger,
            scope: Scope.TRANSIENT,
            inject: [INQUIRER],
            useFactory: (parentClass: object) => new Logger(parentClass.constructor.name),
        },
    ],
})
export class AppModule {}
