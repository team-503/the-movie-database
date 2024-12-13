import { memo } from 'react'
import {
    useDiscoverMoviesQuery,
    useGetPopularMoviesQuery,
    useGetTopRatedMoviesQuery,
    useGetTrengindMoviesQuery,
    useGetUpcomingMoviesQuery,
} from '@/__generated__/graphql'
import { MovieCardsListSnapScroll } from '@/modules/movie/components/movie-cards-list-snap-scroll'

type MainPageProps = unknown
export const MainPage: React.FC<MainPageProps> = memo(() => {
    const { data: discoverMoviesData } = useDiscoverMoviesQuery({ variables: { page: 1 } })
    const { data: popularMoviesData } = useGetPopularMoviesQuery({ variables: { page: 1 } })
    const { data: topRatedMoviesData } = useGetTopRatedMoviesQuery({ variables: { page: 1 } })
    const { data: upcomingMoviesData } = useGetUpcomingMoviesQuery({ variables: { page: 1 } })
    const { data: trendingMoviesData } = useGetTrengindMoviesQuery()

    return (
        <div className="~space-y-12/14">
            <MovieCardsListSnapScroll
                movies={discoverMoviesData?.discoverMovies.results ?? []}
                title="Discover movies"
                to="/discover"
            />
            <MovieCardsListSnapScroll
                movies={popularMoviesData?.getPopularMovies.results ?? []}
                title="Popular movies"
                to="/popular"
            />
            <MovieCardsListSnapScroll
                movies={upcomingMoviesData?.getUpcomingMovies.results ?? []}
                title="Upcoming movies"
                to="/upcoming"
            />
            <MovieCardsListSnapScroll
                movies={trendingMoviesData?.getTrengindMovies.results ?? []}
                title="Trending movies"
                to="/trending"
            />
            <MovieCardsListSnapScroll
                movies={topRatedMoviesData?.getTopRatedMovies.results ?? []}
                title="Top rated movies"
                to="/top-rated"
            />
        </div>
    )
})
MainPage.displayName = 'MainPage'
