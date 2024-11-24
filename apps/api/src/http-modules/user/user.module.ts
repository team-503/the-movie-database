import { UserRepository } from '@/db/user.entity'
import { UserResolver } from '@/http-modules/user/user.resolver'
import { UserService } from '@/http-modules/user/user.service'
import { AuthModule } from '@/modules/auth/auth.module'
import { Module } from '@nestjs/common'

@Module({
    imports: [AuthModule],
    providers: [UserResolver, UserService, UserRepository],
})
export class UserModule {}
