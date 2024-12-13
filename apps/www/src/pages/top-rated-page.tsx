import { memo } from 'react'
import { useGetTopRatedMoviesQuery } from '@/__generated__/graphql'
import { MovieCardsListInfiniteScroll } from '@/modules/movie/components/movie-cards-list-infinite-scroll'

type TopRatedPageProps = unknown
export const TopRatedPage: React.FC<TopRatedPageProps> = memo(() => {
    const { data, loading, fetchMore } = useGetTopRatedMoviesQuery({ variables: { page: 1 } })

    return (
        <MovieCardsListInfiniteScroll
            movies={data?.getTopRatedMovies.results ?? []}
            loading={loading}
            onLoadMore={() =>
                fetchMore({
                    variables: {
                        page: (data?.getTopRatedMovies?.page ?? 1) + 1,
                    },
                    updateQuery: (prev, { fetchMoreResult }) => {
                        if (!fetchMoreResult) {
                            return prev
                        }
                        return {
                            getTopRatedMovies: {
                                ...fetchMoreResult.getTopRatedMovies,
                                page: prev.getTopRatedMovies.page + 1,
                                results: [...prev.getTopRatedMovies.results, ...fetchMoreResult.getTopRatedMovies.results],
                            },
                        }
                    },
                })
            }
        />
    )
})
TopRatedPage.displayName = 'TopRatedPage'
