import { Field, ObjectType } from '@nestjs/graphql'
import { Type } from 'class-transformer'
import { MovieGenre } from '../movie-genre'

@ObjectType()
export class MovieGenresResponse {
    @Type(() => MovieGenre)
    @Field(() => [MovieGenre])
    genres: MovieGenre[]
}
