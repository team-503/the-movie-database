import { MovieEntity } from '@/__generated__/graphql'

export const URLs = {
    main: {
        path: '/',
        label: 'App',
    },
    discover: {
        path: '/discover',
        label: 'Discover',
    },
    popular: {
        path: '/popular',
        label: 'Popular',
    },
    topRated: {
        path: '/top-rated',
        label: 'Top-rated',
    },
    upcoming: {
        path: '/upcoming',
        label: 'Upcoming',
    },
    movieId: {
        path: '/movie/:id',
        label: 'asdasdasdasd',
        getMovieIdURL(movieid: MovieEntity['id']): string {
            return this.path.replace(':id', String(movieid))
        },
    },
    //
    error: {
        path: '/error',
        label: 'asdasdasdasd',
    },
    login: {
        path: '/login',
        label: 'asdasdasdasd',
    },
    tmdb: {
        image: 'https://image.tmdb.org/t/p/original/:imagePath',
        getImageURL(imagePath: MovieEntity['poster_path']): string {
            return this.image.replace(':imagePath', String(imagePath))
        },
    },
} as const
