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
    const { data: discoverMoviesData } = useDiscoverMoviesQuery()
    const { data: popularMoviesData } = useGetPopularMoviesQuery()
    const { data: topRatedMoviesData } = useGetTopRatedMoviesQuery()
    const { data: trendingMoviesData } = useGetTrengindMoviesQuery()
    const { data: upcomingMoviesData } = useGetUpcomingMoviesQuery()

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
                movies={topRatedMoviesData?.getTopRatedMovies.results ?? []}
                title="Top rated movies"
                to="/top-rated"
            />
            <MovieCardsListSnapScroll
                movies={trendingMoviesData?.getTrengindMovies.results ?? []}
                title="Trending movies"
                to="/trending"
            />
            <MovieCardsListSnapScroll
                movies={upcomingMoviesData?.getUpcomingMovies.results ?? []}
                title="Upcoming movies"
                to="/upcoming"
            />
        </div>
    )
})
MainPage.displayName = 'MainPage'
