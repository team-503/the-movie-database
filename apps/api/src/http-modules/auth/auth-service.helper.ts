import { Request } from 'express'
import { JwtFromRequestFunction } from 'passport-jwt'

export class AuthServiceHelper {
    static extractJwtFromCookie(
        req: Parameters<JwtFromRequestFunction<Request>>['0']
    ): ReturnType<JwtFromRequestFunction<Request>> {
        return req.cookies?.auth
    }
}
