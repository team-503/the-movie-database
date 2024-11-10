import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class MovieBelongsToCollection {
    @Field(() => Int)
    id: number

    @Field(() => String)
    name: string

    @Field(() => String, { nullable: true })
    poster_path?: string

    @Field(() => String, { nullable: true })
    backdrop_path?: string
}
