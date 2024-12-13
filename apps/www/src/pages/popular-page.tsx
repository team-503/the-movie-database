import { memo } from 'react'
import { useGetPopularMoviesQuery } from '@/__generated__/graphql'
import { MovieCardsListInfiniteScroll } from '@/modules/movie/components/movie-cards-list-infinite-scroll'

type PopularPageProps = unknown
export const PopularPage: React.FC<PopularPageProps> = memo(() => {
    const { data, loading, fetchMore } = useGetPopularMoviesQuery({ variables: { page: 1 } })

    return (
        <MovieCardsListInfiniteScroll
            movies={data?.getPopularMovies.results ?? []}
            loading={loading}
            onLoadMore={() =>
                fetchMore({
                    variables: {
                        page: (data?.getPopularMovies?.page ?? 1) + 1,
                    },
                    updateQuery: (prev, { fetchMoreResult }) => {
                        if (!fetchMoreResult) {
                            return prev
                        }
                        return {
                            getPopularMovies: {
                                ...fetchMoreResult.getPopularMovies,
                                page: prev.getPopularMovies.page + 1,
                                results: [...prev.getPopularMovies.results, ...fetchMoreResult.getPopularMovies.results],
                            },
                        }
                    },
                })
            }
        />
    )
})
PopularPage.displayName = 'PopularPage'
