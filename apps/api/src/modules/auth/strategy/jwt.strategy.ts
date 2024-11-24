import { UserRepository } from '@/db/user.entity'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import config from 'config'
import { Request as RequestType } from 'express'
import { ExtractJwt, JwtFromRequestFunction, Strategy } from 'passport-jwt'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly userRepository: UserRepository) {
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([
                ExtractJwt.fromAuthHeaderAsBearerToken(),
                ExtractJwt.fromHeader('auth'),
                JwtStrategy.extractJwtFromCookie,
            ]),
            ignoreExpiration: false,
            secretOrKey: config.get<string>('auth.secret'),
        })
    }

    private static extractJwtFromCookie(
        req: Parameters<JwtFromRequestFunction<RequestType>>['0']
    ): ReturnType<JwtFromRequestFunction<RequestType>> {
        return req.cookies?.auth
    }

    async validate(payload: { userId: number; iat: number; exp: number }) {
        if (!payload.userId) {
            throw new UnauthorizedException('[Auth] Invalid token')
        }
        const user = await this.userRepository.findOne({
            where: {
                id: payload.userId,
            },
        })
        if (!user) {
            throw new UnauthorizedException('[Auth] User not found')
        }
        return user
    }
}
