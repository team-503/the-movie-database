import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import config from 'config'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { UserEntity } from '../../../db/user.entity'
import { AuthServiceHelper } from '../auth-service.helper'
import { JWT_STRATEGY_NAME } from '../auth.constants'
import { AuthService } from '../auth.service'
import { BaseJwtStragy } from './base-jwt-strategy.type'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, JWT_STRATEGY_NAME) implements BaseJwtStragy {
    private static readonly AUTH_SECRET = config.get<string>('auth.secret')

    constructor(private readonly authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([
                ExtractJwt.fromAuthHeaderAsBearerToken(),
                ExtractJwt.fromHeader('auth'),
                AuthServiceHelper.extractJwtFromCookie,
            ]),
            ignoreExpiration: false,
            secretOrKey: JwtStrategy.AUTH_SECRET,
        })
    }

    async validate(payload: any): Promise<UserEntity> {
        return this.authService.validateUser(payload)
    }
}
