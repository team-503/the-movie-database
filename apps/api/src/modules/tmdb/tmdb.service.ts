import { HttpService } from '@nestjs/axios'
import { Injectable, Logger, OnModuleInit } from '@nestjs/common'
import { plainToInstance } from 'class-transformer'
import { firstValueFrom } from 'rxjs'
import { MovieDetailsEntity } from '../../db/movie-details.entity'
import { MovieGenresResponse } from '../../dto/movie/response-dto/movie-genres-response'
import { MovieImagesResponse } from '../../dto/movie/response-dto/movie-images-response'
import { PaginatedMovieResponse } from '../../dto/movie/response-dto/paginated-movie-response'
import { TMDBDiscoverMovieRequest } from './types/tmdb-discover-movies-request'
import { TMDBMovieDetailsRequest } from './types/tmdb-movie-details-request'
import { TMDBMovieGenresRequest } from './types/tmdb-movie-genres-request'
import { TMDBMovieImagesRequest } from './types/tmdb-movie-images-request'
import { TMDBMovieRecommendationsRequest } from './types/tmdb-movie-recommendations-request'
import { TMDBPopularMoviesRequest } from './types/tmdb-popular-movies-request'
import { TMDBSimilarMoviesRequest } from './types/tmdb-similar-movies-request'
import { TMDBTopRatedMoviesRequest } from './types/tmdb-top-rated-movies-request'
import { TMDBTrendingMoviesRequest } from './types/tmdb-trengind-movies-request'
import { TMDBUpcomingMoviesRequest } from './types/tmdb-upcoming-movies-request'

@Injectable()
export class TMDBService implements OnModuleInit {
    private readonly logger = new Logger(TMDBService.name)

    constructor(private readonly httpService: HttpService) {}

    onModuleInit() {
        this.httpService.axiosRef.interceptors.request.use(config => {
            const { method, baseURL, url } = config
            this.logger.verbose(`${method.toUpperCase()} ${baseURL}/${url}`)
            return config
        })
        this.httpService.axiosRef.interceptors.response.use(config => {
            const { data } = config
            this.logger.verbose(data)
            return config
        })
    }

    /*
    common
    */

    async getMovieGenresList(params: TMDBMovieGenresRequest = {}): Promise<MovieGenresResponse> {
        const response = await firstValueFrom(this.httpService.get('genre/movie/list', { params }))
        return plainToInstance(MovieGenresResponse, response.data)
    }

    /*
    movies
    */

    async discoverMovies(params: TMDBDiscoverMovieRequest = {}): Promise<PaginatedMovieResponse> {
        const response = await firstValueFrom(this.httpService.get('discover/movie', { params }))
        return response.data
    }

    async getPopularMovies(params: TMDBPopularMoviesRequest = {}): Promise<PaginatedMovieResponse> {
        const response = await firstValueFrom(this.httpService.get('movie/popular', { params }))
        return response.data
    }

    async getTopRatedMovies(params: TMDBTopRatedMoviesRequest = {}): Promise<PaginatedMovieResponse> {
        const response = await firstValueFrom(this.httpService.get('movie/top_rated', { params }))
        return response.data
    }

    async getTrengindMovies(params: TMDBTrendingMoviesRequest = { time_window: 'week' }): Promise<PaginatedMovieResponse> {
        const response = await firstValueFrom(this.httpService.get('movie/upcoming', { params }))
        return response.data
    }

    async getUpcomingMovies(params: TMDBUpcomingMoviesRequest = {}): Promise<PaginatedMovieResponse> {
        const response = await firstValueFrom(this.httpService.get('movie/upcoming', { params }))
        return response.data
    }

    /*
    cenrain movie
    */

    async getMovieDetails(movieId: number, params: TMDBMovieDetailsRequest = {}): Promise<MovieDetailsEntity> {
        const response = await firstValueFrom(this.httpService.get(`movie/${movieId}`, { params }))
        return response.data
    }

    async getMovieImages(movieId: number, params: TMDBMovieImagesRequest = {}): Promise<MovieImagesResponse> {
        const response = await firstValueFrom(this.httpService.get<MovieImagesResponse>(`movie/${movieId}/images`, { params }))
        return response.data
    }

    async getSimilarMovies(movieId: number, params: TMDBSimilarMoviesRequest = {}): Promise<PaginatedMovieResponse> {
        const response = await firstValueFrom(this.httpService.get(`movie/${movieId}/similar`, { params }))
        return response.data
    }

    async getMovieRecommendations(
        movieId: number,
        params: TMDBMovieRecommendationsRequest = {}
    ): Promise<PaginatedMovieResponse> {
        const response = await firstValueFrom(this.httpService.get(`movie/${movieId}/recommendations`, { params }))
        return response.data
    }
}
