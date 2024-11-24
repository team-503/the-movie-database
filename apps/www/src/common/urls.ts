import { Maybe } from '@/__generated__/graphql'

export const tmdbURLs = {
    image: 'https://image.tmdb.org/t/p/original',
    getImageURL(imagePath: Maybe<string> | undefined) {
        return `${this.image}/${imagePath}`
    },
}

export const URLs = {
    main: '/',
    error: '/error',
    login: '/login',
}
