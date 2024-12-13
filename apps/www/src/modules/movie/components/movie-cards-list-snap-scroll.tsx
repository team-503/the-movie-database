import { memo } from 'react'
import { MovieEntity } from '@/__generated__/graphql'
import { MovieCard } from '@/modules/movie/components/movie-card'
import { ChevronRight } from 'lucide-react'
import { Link, To } from 'react-router-dom'

type MovieCardsListSnapScrollProps = {
    movies: MovieEntity[]
    title: string
    to?: To
}
export const MovieCardsListSnapScroll: React.FC<MovieCardsListSnapScrollProps> = memo(({ movies, title, to }) => {
    return (
        <div className="space-y-3">
            <Link to={to ?? ''} className="hover:text-muted-foreground transition-color flex w-fit duration-100">
                <p className="border-l-4 border-yellow-500 pl-3 text-2xl font-semibold">{title}</p>
                <ChevronRight className="~w-8/9 ~h-8/9" />
            </Link>

            <div className="~gap-2/5 flex snap-x snap-mandatory overflow-x-auto">
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} className="~w-40/56 shrink-0 snap-start" />
                ))}
            </div>
        </div>
    )
})
MovieCardsListSnapScroll.displayName = 'MovieCardsListSnapScroll'
