import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Type } from 'class-transformer'

@ObjectType()
export class MovieGenre {
    @Type(() => Number)
    @Field(() => Int)
    id: number

    @Type(() => String)
    @Field(() => String)
    name: string
}
