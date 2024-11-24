import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class MovieImage {
    @Field(() => Number)
    aspect_ratio: number

    @Field(() => Int)
    height: number

    @Field(() => String, { nullable: true })
    iso_639_1?: string

    @Field(() => String)
    file_path: string

    @Field(() => Number)
    vote_average: number

    @Field(() => Int)
    vote_count: number

    @Field(() => Int)
    width: number
}
