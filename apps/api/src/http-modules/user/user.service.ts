import { UserEntity, UserInput, UserRepository } from '@/db/user.entity'
import { AuthResponseType } from '@/http-modules/user/dto/auth-response.type'
import { AuthService } from '@/modules/auth/auth.service'
import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common'
import bcrypt from 'bcrypt'
import config from 'config'

@Injectable()
export class UserService {
    constructor(
        private readonly authService: AuthService,
        private readonly userRepository: UserRepository
    ) {}

    async me(currentUser: UserEntity): Promise<UserEntity> {
        return currentUser
    }

    async login(userData: UserInput): Promise<AuthResponseType> {
        const user = await this.userRepository.findOne({
            where: {
                email: userData.email,
            },
        })
        if (!user) {
            throw new NotFoundException('User not found')
        }
        const passwordMatch = await bcrypt.compare(userData.password, user.password)
        if (!passwordMatch) {
            throw new UnauthorizedException('Invalid password')
        }
        const token = await this.authService.generateJwt(user.id)
        return {
            token,
            user,
        }
    }

    async register(userData: UserInput): Promise<AuthResponseType> {
        const existingUser = await this.userRepository.findOne({
            where: {
                email: userData.email,
            },
        })
        if (existingUser) {
            throw new ConflictException('User already exists!')
        }
        const saltOrRounds = config.get<number>('auth.saltOrRounds')
        const hash = await bcrypt.hash(userData.password, saltOrRounds)
        const newUser = await this.userRepository.save({
            ...userData,
            password: hash,
        })
        const token = await this.authService.generateJwt(newUser.id)
        return {
            token,
            user: newUser,
        }
    }
}
