import { Fragment, memo } from 'react'
import { MovieEntity } from '@/__generated__/graphql'
import { MovieCard } from '@/modules/movie/components/movie-card'
import { Waypoint } from 'react-waypoint'

type MovieCardsListInfiniteScrollProps = {
    movies: MovieEntity[]
    loading: boolean
    onLoadMore?: (args: Waypoint.CallbackArgs) => void
}
export const MovieCardsListInfiniteScroll: React.FC<MovieCardsListInfiniteScrollProps> = memo(
    ({ movies, loading, onLoadMore }) => {
        return (
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8">
                {movies.map((movie, index, arr) => (
                    <Fragment key={movie.id}>
                        <MovieCard movie={movie} />
                        {index === arr.length - 1 && !loading && <Waypoint onEnter={onLoadMore} />}
                    </Fragment>
                ))}
            </div>
        )
    }
)
MovieCardsListInfiniteScroll.displayName = 'MovieCardsListInfiniteScroll'
