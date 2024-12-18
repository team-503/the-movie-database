import { MovieGenre } from '@/common/dto/movie/movie-genre'
import { Field, ObjectType } from '@nestjs/graphql'
import { Type } from 'class-transformer'

@ObjectType()
export class MovieGenresResponse {
    @Type(() => MovieGenre)
    @Field(() => [MovieGenre])
    genres: MovieGenre[]
}
