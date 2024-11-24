import { memo } from 'react'
import { URLs } from '@/common/urls'
import { ErrorPage } from '@/pages/error/error-page'
import { MainLayout } from '@/pages/main/main-layout'
import { MainPage } from '@/pages/main/main-page'
import { NotFoundPage } from '@/pages/not-found/not-found-page'
import { useRoutes } from 'react-router-dom'

type AppRoutesProps = {
    location?: Parameters<typeof useRoutes>[1]
}
export const AppRoutes: React.FC<AppRoutesProps> = memo(({ location }) => {
    return useRoutes(
        [
            {
                path: URLs.main,
                element: <MainLayout />,
                children: [
                    { path: URLs.main, element: <MainPage /> },
                    { path: URLs.error, element: <ErrorPage /> },
                    { path: '*', element: <NotFoundPage /> },
                ],
            },
        ],
        location
    )
})
AppRoutes.displayName = 'Router'
