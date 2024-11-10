import { ForbiddenError } from '@nestjs/apollo'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import config from 'config'
import ms from 'ms'
import { UserEntity, UserRepository } from '../../db/user.entity'

@Injectable()
export class AuthService {
    private static readonly expiresIn = config.get<string>('auth.expiresIn')

    constructor(
        private readonly userRepository: UserRepository,
        private readonly jwtService: JwtService,
    ) {}

    // TODO: fix any
    async login(payload: any): Promise<any> {
        const user = await this.userRepository.findOne({
            where: { email: payload.email },
        })
        if (user == null) {
            throw new UnauthorizedException('User not found')
        }

        // TODO: implement password check

        const jwtToken = this.jwtService.sign({ ...user })
        const expiresInMs = ms(AuthService.expiresIn)
        return {
            token: jwtToken,
            expiresIn: expiresInMs,
        }
    }

    //

    async validateUser(payload: any): Promise<UserEntity> | never {
        if (payload.id == null) {
            throw new UnauthorizedException('Invalid token')
        }

        const user = await this.userRepository.findOne({
            where: { id: payload.id },
        })
        if (user == null) {
            throw new UnauthorizedException('User not found')
        }
        return user
    }
}
