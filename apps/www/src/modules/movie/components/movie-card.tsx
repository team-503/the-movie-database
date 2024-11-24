import React, { memo } from 'react'
import { MovieEntity } from '@/__generated__/graphql'
import { tmdbURLs } from '@/common/urls'
import { cn } from '@/common/utils/cn'
import dayjs from 'dayjs'
import { Star } from 'lucide-react'

type MovieCardProps = {
    movie: MovieEntity
} & React.ComponentProps<'div'>
export const MovieCard: React.FC<MovieCardProps> = memo(
    ({ movie: { title, poster_path, release_date, vote_average }, className, ...props }) => {
        return (
            <div className={cn('relative overflow-hidden rounded-2xl border', className)} {...props}>
                <img src={tmdbURLs.getImageURL(poster_path)} alt={poster_path ?? ''} className="aspect-[2/3]" />
                <div className="bg-background/40 text-foreground absolute bottom-0 flex w-full flex-col gap-y-1 ~p-2/3 backdrop-blur-lg">
                    <p className="text-lg font-semibold">{title}</p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                            <Star className="fill-yellow-500 stroke-yellow-500" />
                            <p className="text-base font-bold">{vote_average.toFixed(1)}</p>
                        </div>
                        <p className="text-base">{dayjs(release_date).get('year')}</p>
                    </div>
                </div>
            </div>
        )
    }
)
MovieCard.displayName = 'MovieCard'
