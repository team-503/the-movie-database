import { UserEntity, UserInput } from '@/db/user.entity'
import { AuthResponseType } from '@/http-modules/user/dto/auth-response.type'
import { UserService } from '@/http-modules/user/user.service'
import { CurrentUser } from '@/modules/auth/decorators/current-user.decorator'
import { GqlAuthGuard } from '@/modules/auth/guards/gql-auth.guard'
import { UseGuards } from '@nestjs/common'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

@Resolver()
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Query(() => UserEntity)
    @UseGuards(GqlAuthGuard)
    me(@CurrentUser() currentUser: UserEntity): Promise<UserEntity> {
        return this.userService.me(currentUser)
    }

    @Mutation(() => AuthResponseType)
    login(@Args({ name: 'user', type: () => UserInput }) userData: UserInput): Promise<AuthResponseType> {
        return this.userService.login(userData)
    }

    @Mutation(() => AuthResponseType)
    register(@Args({ name: 'user', type: () => UserInput }) userData: UserInput): Promise<AuthResponseType> {
        return this.userService.register(userData)
    }
}
