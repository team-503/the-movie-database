import React, { memo } from 'react'
import { MovieEntity } from '@/__generated__/graphql'
import { URLs } from '@/common/urls'
import { cn } from '@/common/utils/cn'
import dayjs from 'dayjs'
import { Star } from 'lucide-react'
import { Link } from 'react-router-dom'

type MovieCardProps = {
    movie: MovieEntity
} & Omit<React.ComponentProps<typeof Link>, 'to'>
export const MovieCard: React.FC<MovieCardProps> = memo(({ movie, className, ...props }) => {
    return (
        <Link
            {...props}
            to={URLs.movieId.getMovieIdURL(movie.id)}
            className={cn('relative overflow-hidden rounded-2xl border', className)}
        >
            <img src={URLs.tmdb.getImageURL(movie.poster_path)} alt={movie.poster_path ?? ''} className="aspect-[2/3]" />
            <div className="bg-background/40 text-foreground ~p-2/3 absolute bottom-0 flex w-full flex-col gap-y-1 backdrop-blur-lg">
                {/* title */}
                <p className="text-balance text-lg font-semibold">{movie.title}</p>
                <div className="flex items-center justify-between">
                    <div className="flex gap-1.5">
                        <Star className="h-6 w-6 fill-yellow-500 stroke-yellow-500" />
                        {/* rating */}
                        <p className="text-base font-bold">{movie.vote_average.toFixed(1)}</p>
                    </div>
                    {/* release year */}
                    <p className="text-base">{dayjs(movie.release_date).get('year')}</p>
                </div>
            </div>
        </Link>
    )
})
MovieCard.displayName = 'MovieCard'
