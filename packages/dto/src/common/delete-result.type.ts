import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class DeleteResultObjectType {
    constructor(isSuccess: boolean) {
        this.isSuccess = isSuccess
    }

    @Field(() => Boolean)
    isSuccess: boolean
}
