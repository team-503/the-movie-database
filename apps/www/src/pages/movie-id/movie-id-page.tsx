import { memo, useMemo } from 'react'
import { useGetMovieDetailsQuery, useGetMovieImagesQuery } from '@/__generated__/graphql'
import { URLs } from '@/common/urls'
import dayjs from 'dayjs'
import { Star } from 'lucide-react'
import { Navigate, useParams } from 'react-router-dom'
import { FullscreenImagePreview } from '@/components/fullscreen-image-preview-modal'

type MovieIdPageProps = unknown
export const MovieIdPage: React.FC<MovieIdPageProps> = memo(() => {
    const { id } = useParams<'id'>()
    const { data: getMovieDetailsData, loading } = useGetMovieDetailsQuery({ variables: { movieId: Number(id) } })
    const { data: getMovieImagesData } = useGetMovieImagesQuery({ variables: { movieId: Number(id) } })

    const movie = useMemo(() => getMovieDetailsData?.getMovieDetails, [getMovieDetailsData?.getMovieDetails])
    const imagePaths = useMemo(
        () => [...new Set(getMovieImagesData?.getMovieImages.backdrops.map(({ file_path }) => file_path))],
        [getMovieImagesData?.getMovieImages?.backdrops]
    )

    if (!id) {
        return <Navigate to={URLs.main.path} />
    }
    if (loading || !id || !movie || !imagePaths) {
        return
    }

    return (
        <div className="flex">
            {/* left */}
            <div className="flex-1 p-10">
                <FullscreenImagePreview src={URLs.tmdb.getImageURL(movie.poster_path)} className="rounded-3xl" />
            </div>

            {/* right */}
            <div className="flex-[2] space-y-8 p-10">
                {/* common */}
                <section className="flex items-center justify-between">
                    <div className="space-y-4">
                        {/* title */}
                        <p className="text-foreground text-6xl font-medium">{movie.title}</p>
                        {/* tagline */}
                        {movie.tagline && <p className="text-4xl font-thin">{movie.tagline}</p>}
                        {/* year, genres */}
                        <p className="text-muted-foreground divide-muted-foreground divide-x-2 *:px-4">
                            <span className="first:pl-0">{dayjs(movie.release_date).get('year')}</span>
                            {movie.genres.map(({ name }) => (
                                <span key={name} className="last:pr-0">
                                    {name}
                                </span>
                            ))}
                        </p>
                    </div>
                    <div className="flex gap-1.5">
                        {/* rating */}
                        <p className="text-foreground text-4xl font-normal">{movie.vote_average.toFixed(1)}</p>
                        <Star className="h-9 w-9 fill-yellow-500 stroke-yellow-500" />
                    </div>
                </section>

                {/* overview */}
                <section className="space-y-4">
                    <p className="border-l-4 border-yellow-500 pl-3 text-3xl font-semibold">Overview</p>
                    <p className="text-balance text-base font-light">{movie.overview}</p>
                </section>

                {/* images */}

                <section className="space-y-4">
                    <p className="border-l-4 border-yellow-500 pl-3 text-3xl font-semibold">Images</p>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8">
                        {imagePaths.map(imagePath => (
                            <FullscreenImagePreview
                                key={imagePath}
                                src={URLs.tmdb.getImageURL(imagePath)}
                                className="shrink-0 snap-start rounded-lg"
                            />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
})
MovieIdPage.displayName = 'MovieIdPage'
