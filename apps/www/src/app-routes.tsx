import { memo } from 'react'
import { URLs } from '@/common/urls'
import { DiscoverPage } from '@/pages/discover-page'
import { ErrorPage } from '@/pages/error-page'
import { MainLayout } from '@/pages/main/main-layout'
import { MainPage } from '@/pages/main/main-page'
import { MovieIdPage } from '@/pages/movie-id/movie-id-page'
import { NotFoundPage } from '@/pages/not-found-page'
import { PopularPage } from '@/pages/popular-page'
import { TopRatedPage } from '@/pages/top-rated-page'
import { UpcomingPage } from '@/pages/upcoming-page'
import { useRoutes } from 'react-router-dom'

type AppRoutesProps = {
    location?: Parameters<typeof useRoutes>[1]
}
export const AppRoutes: React.FC<AppRoutesProps> = memo(({ location }) => {
    return useRoutes(
        [
            {
                path: URLs.main.path,
                element: <MainLayout />,
                children: [
                    { path: URLs.main.path, element: <MainPage /> },
                    { path: URLs.discover.path, element: <DiscoverPage /> },
                    { path: URLs.popular.path, element: <PopularPage /> },
                    { path: URLs.topRated.path, element: <TopRatedPage /> },
                    { path: URLs.upcoming.path, element: <UpcomingPage /> },
                    { path: URLs.movieId.path, element: <MovieIdPage /> },
                    { path: URLs.error.path, element: <ErrorPage /> },
                    { path: '*', element: <NotFoundPage /> },
                ],
            },
        ],
        location
    )
})
AppRoutes.displayName = 'Router'
