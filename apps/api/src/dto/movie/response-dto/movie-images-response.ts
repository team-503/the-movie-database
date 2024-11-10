import { Field, ObjectType } from '@nestjs/graphql'
import { MovieImage } from '../movie-image'

@ObjectType()
export class MovieImagesResponse {
    @Field(() => [MovieImage])
    backdrops: MovieImage[]

    @Field(() => [MovieImage])
    posters: MovieImage[]

    @Field(() => [MovieImage])
    logos: MovieImage[]
}
