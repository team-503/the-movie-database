import { memo } from 'react'
import { useDiscoverMoviesQuery } from '@/__generated__/graphql'
import { MovieCardsListInfiniteScroll } from '@/modules/movie/components/movie-cards-list-infinite-scroll'

type DiscoverPageProps = unknown
export const DiscoverPage: React.FC<DiscoverPageProps> = memo(() => {
    const { data, loading, fetchMore } = useDiscoverMoviesQuery({ variables: { page: 1 } })

    return (
        <MovieCardsListInfiniteScroll
            movies={data?.discoverMovies.results ?? []}
            loading={loading}
            onLoadMore={() =>
                fetchMore({
                    variables: {
                        page: (data?.discoverMovies?.page ?? 1) + 1,
                    },
                    updateQuery: (prev, { fetchMoreResult }) => {
                        if (!fetchMoreResult) {
                            return prev
                        }
                        return {
                            discoverMovies: {
                                ...fetchMoreResult.discoverMovies,
                                page: prev.discoverMovies.page + 1,
                                results: [...prev.discoverMovies.results, ...fetchMoreResult.discoverMovies.results],
                            },
                        }
                    },
                })
            }
        />
    )
})
DiscoverPage.displayName = 'DiscoverPage'
