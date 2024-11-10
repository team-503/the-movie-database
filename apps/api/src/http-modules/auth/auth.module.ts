import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import config from 'config'
import { UserRepository } from '../../db/user.entity'
import { JWT_STRATEGY_NAME } from './auth.constants'
import { AuthResolver } from './auth.resolver'
import { AuthService } from './auth.service'
import { GqlJwtAuthGuard } from './guards/gql-jwt-auth.guard'
import { JwtStrategy } from './strategies/jwt.strategy'

@Module({
    imports: [
        PassportModule.register({
            defaultStrategy: JWT_STRATEGY_NAME,
        }),
        JwtModule.register({
            global: true,
            secret: config.get<string>('auth.secret'),
            signOptions: {
                expiresIn: config.get<string>('auth.expiresIn'),
            },
        }),
    ],
    providers: [AuthResolver, AuthService, UserRepository, JwtStrategy, GqlJwtAuthGuard],
    exports: [GqlJwtAuthGuard],
})
export class AuthModule {}
