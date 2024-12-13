import { MovieGenresResponse } from '@/common/dto/movie/response-dto/movie-genres-response'
import { MovieImagesResponse } from '@/common/dto/movie/response-dto/movie-images-response'
import { PaginatedMovieResponse } from '@/common/dto/movie/response-dto/paginated-movie-response'
import { MovieDetailsEntity, MovieDetailsRepository } from '@/db/movie-details.entity'
import { MovieRepository } from '@/db/movie.entity'
import { TMDBService } from '@/modules/tmdb/tmdb.service'
import { CACHE_MANAGER } from '@nestjs/cache-manager'
import { Inject, Injectable } from '@nestjs/common'
import { Cache } from 'cache-manager'
import ms from 'ms'

const cacheTTL = ms('1d')

@Injectable()
export class MovieService {
    constructor(
        @Inject(CACHE_MANAGER)
        private readonly cacheManager: Cache,
        private readonly tmdbService: TMDBService,
        private readonly movieRepository: MovieRepository,
        private readonly movieDetailsRepository: MovieDetailsRepository
    ) {}

    /*
    common
    */

    async getMovieGenresList(): Promise<MovieGenresResponse> {
        const cacheKey = this.getMovieGenresList.name
        const cacheValue = await this.cacheManager.get<MovieGenresResponse>(cacheKey)
        if (cacheValue) {
            return cacheValue
        }
        const movieGenresList = await this.tmdbService.getMovieGenresList()
        this.cacheManager.set(cacheKey, movieGenresList, cacheTTL)
        return movieGenresList
    }

    /*
    movies
    */

    async discoverMovies({ page }: { page: number }): Promise<PaginatedMovieResponse> {
        const cacheKey = `discover/${page}`
        const cacheValue = await this.cacheManager.get<PaginatedMovieResponse>(cacheKey)
        if (cacheValue) {
            return cacheValue
        }
        const discoverMovies = await this.tmdbService.discoverMovies({ page, include_adult: false })
        this.filterPaginatedMovieResponseGenres(discoverMovies)
        this.cacheManager.set(cacheKey, discoverMovies, cacheTTL)
        this.movieRepository.save(discoverMovies.results)
        return discoverMovies
    }

    async getPopularMovies({ page }: { page: number }): Promise<PaginatedMovieResponse> {
        const cacheKey = `popular/${page}`
        const cacheValue = await this.cacheManager.get<PaginatedMovieResponse>(cacheKey)
        if (cacheValue) {
            return cacheValue
        }
        const popularMovies = await this.tmdbService.getPopularMovies({ page })
        this.filterPaginatedMovieResponseGenres(popularMovies)
        this.cacheManager.set(cacheKey, popularMovies, cacheTTL)
        this.movieRepository.save(popularMovies.results)
        return popularMovies
    }

    async getTopRatedMovies({ page }: { page: number }): Promise<PaginatedMovieResponse> {
        const cacheKey = `top-rated/${page}`
        const cacheValue = await this.cacheManager.get<PaginatedMovieResponse>(cacheKey)
        if (cacheValue) {
            return cacheValue
        }
        const topRatedMovies = await this.tmdbService.getTopRatedMovies({ page })
        this.filterPaginatedMovieResponseGenres(topRatedMovies)
        this.cacheManager.set(cacheKey, topRatedMovies, cacheTTL)
        this.movieRepository.save(topRatedMovies.results)
        return topRatedMovies
    }

    async getUpcomingMovies({ page }: { page: number }): Promise<PaginatedMovieResponse> {
        const cacheKey = `upcoming/${page}`
        const cacheValue = await this.cacheManager.get<PaginatedMovieResponse>(cacheKey)
        if (cacheValue) {
            return cacheValue
        }
        const upcomingMovies = await this.tmdbService.getUpcomingMovies({ page })
        this.filterPaginatedMovieResponseGenres(upcomingMovies)
        this.cacheManager.set(cacheKey, upcomingMovies, cacheTTL)
        this.movieRepository.save(upcomingMovies.results)
        return upcomingMovies
    }

    async getTrengindMovies(): Promise<PaginatedMovieResponse> {
        const cacheKey = 'trending'
        const cacheValue = await this.cacheManager.get<PaginatedMovieResponse>(cacheKey)
        if (cacheValue) {
            return cacheValue
        }
        const trendingMovies = await this.tmdbService.getTrengindMovies()
        this.cacheManager.set(cacheKey, trendingMovies, cacheTTL)
        this.movieRepository.save(trendingMovies.results)
        return trendingMovies
    }

    /*
    cenrain movie
    */

    async getMovieDetails(movieId: number): Promise<MovieDetailsEntity> {
        // const dbMovieDetails = await this.movieDetailsRepository.findOne({
        //     where: { id: movieId },
        // })
        // if (dbMovieDetails) {
        //     return dbMovieDetails
        // }
        const cacheKey = `details/${movieId}`
        const cacheValue = await this.cacheManager.get<MovieDetailsEntity>(cacheKey)
        if (cacheValue) {
            return cacheValue
        }
        const tmdbMovieDetails = await this.tmdbService.getMovieDetails(movieId)
        this.cacheManager.set(cacheKey, tmdbMovieDetails, cacheTTL)
        this.movieDetailsRepository.save(tmdbMovieDetails)
        return tmdbMovieDetails
    }

    async getMovieImages(movieId: number): Promise<MovieImagesResponse> {
        // const cacheKey = `images/${movieId}`
        // const cacheValue = await this.cacheManager.get<MovieImagesResponse>(cacheKey)
        // if (cacheValue) {
        //     return cacheValue
        // }
        const movieImages = this.tmdbService.getMovieImages(movieId)
        // this.cacheManager.set(cacheKey, movieImages, cacheTTL)
        return movieImages
    }

    async getSimilarMovies(movieId: number): Promise<PaginatedMovieResponse> {
        const cacheKey = `similar/${movieId}`
        const cacheValue = await this.cacheManager.get<PaginatedMovieResponse>(cacheKey)
        if (cacheValue) {
            return cacheValue
        }
        const similarMovies = await this.tmdbService.getSimilarMovies(movieId)
        this.filterPaginatedMovieResponseGenres(similarMovies)
        this.cacheManager.set(cacheKey, similarMovies, cacheTTL)
        this.movieRepository.save(similarMovies.results)
        return similarMovies
    }

    async getMovieRecommendations(movieId: number): Promise<PaginatedMovieResponse> {
        const cacheKey = `recommendations/${movieId}`
        const cacheValue = await this.cacheManager.get<PaginatedMovieResponse>(cacheKey)
        if (cacheValue) {
            return cacheValue
        }
        const movieRecommendations = await this.tmdbService.getMovieRecommendations(movieId)
        this.filterPaginatedMovieResponseGenres(movieRecommendations)
        this.cacheManager.set(cacheKey, movieRecommendations, cacheTTL)
        this.movieRepository.save(movieRecommendations.results)
        return movieRecommendations
    }

    private filterPaginatedMovieResponseGenres(paginatedMovieResponses: PaginatedMovieResponse) {
        const forbiddenGenreIds = [18, 10_749]
        paginatedMovieResponses.results = paginatedMovieResponses.results.filter(
            movie => movie.genre_ids.length !== 0 && !movie.genre_ids.some(genreId => forbiddenGenreIds.includes(genreId))
        )
    }
}
