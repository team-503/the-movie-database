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
    discoverMovies(): Promise<PaginatedMovieResponse> {
        return this.movieService.discoverMovies()
    }

    @Query(() => PaginatedMovieResponse)
    getPopularMovies(): Promise<PaginatedMovieResponse> {
        return this.movieService.getPopularMovies()
    }

    @Query(() => PaginatedMovieResponse)
    getTopRatedMovies(): Promise<PaginatedMovieResponse> {
        return this.movieService.getTopRatedMovies()
    }

    @Query(() => PaginatedMovieResponse)
    getTrengindMovies(): Promise<PaginatedMovieResponse> {
        return this.movieService.getTrengindMovies()
    }

    @Query(() => PaginatedMovieResponse)
    getUpcomingMovies(): Promise<PaginatedMovieResponse> {
        return this.movieService.getUpcomingMovies()
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
