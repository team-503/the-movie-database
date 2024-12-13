import { memo } from 'react'
import { useGetUpcomingMoviesQuery } from '@/__generated__/graphql'
import { MovieCardsListInfiniteScroll } from '@/modules/movie/components/movie-cards-list-infinite-scroll'

type UpcomingPageProps = unknown
export const UpcomingPage: React.FC<UpcomingPageProps> = memo(() => {
    const { data, loading, fetchMore } = useGetUpcomingMoviesQuery({ variables: { page: 1 } })

    return (
        <MovieCardsListInfiniteScroll
            movies={data?.getUpcomingMovies.results ?? []}
            loading={loading}
            onLoadMore={() =>
                fetchMore({
                    variables: {
                        page: (data?.getUpcomingMovies?.page ?? 1) + 1,
                    },
                    updateQuery: (prev, { fetchMoreResult }) => {
                        if (!fetchMoreResult) {
                            return prev
                        }
                        return {
                            getUpcomingMovies: {
                                ...fetchMoreResult.getUpcomingMovies,
                                page: prev.getUpcomingMovies.page + 1,
                                results: [...prev.getUpcomingMovies.results, ...fetchMoreResult.getUpcomingMovies.results],
                            },
                        }
                    },
                })
            }
        />
    )
})
UpcomingPage.displayName = 'UpcomingPage'
