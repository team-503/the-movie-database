import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class MovieVideosResponse {
    @Field(() => Int)
    id: number

    @Field(() => [MovieVideosResults])
    results: MovieVideosResults[]
}

@ObjectType()
class MovieVideosResults {
    @Field(() => String)
    iso_639_1: string

    @Field(() => String)
    iso_3166_1: string

    @Field(() => String)
    id: string

    @Field(() => String)
    name: string

    @Field(() => String)
    key: string

    @Field(() => String)
    site: string

    @Field(() => Number)
    size: number

    @Field(() => String)
    type: string

    @Field(() => Boolean)
    official: boolean

    @Field(() => String)
    published_at: string
}
