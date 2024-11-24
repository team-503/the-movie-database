import { MovieGenresResponse } from '@/common/dto/movie/response-dto/movie-genres-response'
import { MovieImagesResponse } from '@/common/dto/movie/response-dto/movie-images-response'
import { PaginatedMovieResponse } from '@/common/dto/movie/response-dto/paginated-movie-response'
import { MovieDetailsEntity } from '@/db/movie-details.entity'
import { MovieService } from '@/http-modules/movie/movie.service'
import { Args, Int, Query, Resolver } from '@nestjs/graphql'

@Resolver()
// @UseGuards(GqlJwtAuthGuard)
export class MovieResolver {
    constructor(private readonly movieService: MovieService) {}

    /*
    common
    */

    @Query(() => MovieGenresResponse)
    getMovieGenresList(): Promise<MovieGenresResponse> {
        return this.movieService.getMovieGenresList()
    }

    /*
    movies
    */

    @Query(() => PaginatedMovieResponse)
    discoverMovies(@Args({ name: 'page', type: () => Int, nullable: true }) page: number): Promise<PaginatedMovieResponse> {
        return this.movieService.discoverMovies({ page })
    }

    @Query(() => PaginatedMovieResponse)
    getPopularMovies(@Args({ name: 'page', type: () => Int, nullable: true }) page: number): Promise<PaginatedMovieResponse> {
        return this.movieService.getPopularMovies({ page })
    }

    @Query(() => PaginatedMovieResponse)
    getTopRatedMovies(@Args({ name: 'page', type: () => Int, nullable: true }) page: number): Promise<PaginatedMovieResponse> {
        return this.movieService.getTopRatedMovies({ page })
    }

    @Query(() => PaginatedMovieResponse)
    getUpcomingMovies(@Args({ name: 'page', type: () => Int, nullable: true }) page: number): Promise<PaginatedMovieResponse> {
        return this.movieService.getUpcomingMovies({ page })
    }

    @Query(() => PaginatedMovieResponse)
    getTrengindMovies(): Promise<PaginatedMovieResponse> {
        return this.movieService.getTrengindMovies()
    }

    /*
    cenrain movie
    */

    @Query(() => MovieDetailsEntity)
    getMovieDetails(@Args('movieId', { type: () => Int }) movieId: number): Promise<MovieDetailsEntity> {
        return this.movieService.getMovieDetails(movieId)
    }

    @Query(() => MovieImagesResponse)
    getMovieImages(@Args('movieId', { type: () => Int }) movieId: number): Promise<MovieImagesResponse> {
        return this.movieService.getMovieImages(movieId)
    }

    @Query(() => PaginatedMovieResponse)
    getSimilarMovies(@Args('movieId', { type: () => Int }) movieId: number): Promise<PaginatedMovieResponse> {
        return this.movieService.getSimilarMovies(movieId)
    }

    @Query(() => PaginatedMovieResponse)
    getMovieRecommendations(@Args('movieId', { type: () => Int }) movieId: number): Promise<PaginatedMovieResponse> {
        return this.movieService.getMovieRecommendations(movieId)
    }
}
