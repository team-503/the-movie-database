import { MovieGenresResponse } from '@/common/dto/movie/response-dto/movie-genres-response'
import { MovieImagesResponse } from '@/common/dto/movie/response-dto/movie-images-response'
import { PaginatedMovieResponse } from '@/common/dto/movie/response-dto/paginated-movie-response'
import { MovieDetailsEntity } from '@/db/movie-details.entity'
import { TMDBDiscoverMovieRequest } from '@/modules/tmdb/types/tmdb-discover-movies-request'
import { TMDBMovieDetailsRequest } from '@/modules/tmdb/types/tmdb-movie-details-request'
import { TMDBMovieGenresRequest } from '@/modules/tmdb/types/tmdb-movie-genres-request'
import { TMDBMovieImagesRequest } from '@/modules/tmdb/types/tmdb-movie-images-request'
import { TMDBMovieRecommendationsRequest } from '@/modules/tmdb/types/tmdb-movie-recommendations-request'
import { TMDBPopularMoviesRequest } from '@/modules/tmdb/types/tmdb-popular-movies-request'
import { TMDBSimilarMoviesRequest } from '@/modules/tmdb/types/tmdb-similar-movies-request'
import { TMDBTopRatedMoviesRequest } from '@/modules/tmdb/types/tmdb-top-rated-movies-request'
import { TMDBTrendingMoviesRequest } from '@/modules/tmdb/types/tmdb-trengind-movies-request'
import { TMDBUpcomingMoviesRequest } from '@/modules/tmdb/types/tmdb-upcoming-movies-request'
import { HttpService } from '@nestjs/axios'
import { Injectable, Logger, OnModuleInit } from '@nestjs/common'
import { plainToInstance } from 'class-transformer'
import { firstValueFrom } from 'rxjs'

@Injectable()
export class TMDBService implements OnModuleInit {
    private readonly logger = new Logger(TMDBService.name)

    constructor(private readonly httpService: HttpService) {}

    onModuleInit(): any {
        const axios = this.httpService.axiosRef

        axios.interceptors.request.use(req => {
            const url = new URL(req.url, req.baseURL)
            const urlSearchParams = new URLSearchParams(req.params)
            this.logger.verbose(`${req.method.toUpperCase()} ${url}${urlSearchParams}`)
            return req
        })
        // axios.interceptors.response.use(res => {
        //     this.logger.verbose(res.data)
        //     return res
        // })
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
