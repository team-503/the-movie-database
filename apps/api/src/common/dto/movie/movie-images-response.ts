import { MovieImage } from '@/common/dto/movie/movie-image'
import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class MovieImagesResponse {
    @Field(() => [MovieImage])
    backdrops: MovieImage[]

    @Field(() => [MovieImage])
    posters: MovieImage[]

    @Field(() => [MovieImage])
    logos: MovieImage[]
}
