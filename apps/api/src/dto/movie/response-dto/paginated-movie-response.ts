import { Field, Int, ObjectType } from '@nestjs/graphql'
import { MovieEntity } from '../../../db/movie.entity'

@ObjectType()
export class PaginatedMovieResponse {
    @Field(() => Int)
    page: number

    @Field(() => [MovieEntity])
    results: MovieEntity[]

    @Field(() => Int)
    total_pages: number

    @Field(() => Int)
    total_results: number
}
