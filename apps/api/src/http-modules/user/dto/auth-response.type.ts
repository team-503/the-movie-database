import { UserOutput } from '@/db/user.entity'
import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class AuthResponseType {
    @Field(() => String)
    token: string

    @Field(() => UserOutput)
    user: UserOutput
}
