import { memo } from 'react'
import { MovieEntity } from '@/__generated__/graphql'
import { MovieCard } from '@/modules/movie/components/movie-card'

type MovieCardsListProps = {
    movies: MovieEntity[]
}
export const MovieCardsList: React.FC<MovieCardsListProps> = memo(({ movies }) => {
    return (
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8">
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    )
})
MovieCardsList.displayName = 'MovieCardsList'
