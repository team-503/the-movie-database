import { UserRepository } from '@/db/user.entity'
import { AuthService } from '@/modules/auth/auth.service'
import { JwtStrategy } from '@/modules/auth/strategy/jwt.strategy'
import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import config from 'config'

@Module({
    imports: [
        PassportModule.register({
            defaultStrategy: 'jwt',
        }),
        JwtModule.register({
            global: true,
            secret: config.get<string>('auth.secret'),
            signOptions: {
                expiresIn: '21d',
            },
        }),
    ],
    providers: [AuthService, JwtStrategy, UserRepository],
    exports: [AuthService],
})
export class AuthModule {}
