import { Module } from '@nestjs/common'
import { MovieDetailsRepository } from '../../db/movie-details.entity'
import { MovieRepository } from '../../db/movie.entity'
import { TMDBModule } from '../../modules/tmdb/tmdb.module'
import { MovieResolver } from './movie.resolver'
import { MovieService } from './movie.service'

@Module({
    imports: [TMDBModule],
    providers: [MovieResolver, MovieService, MovieRepository, MovieDetailsRepository],
})
export class MovieModule {}
