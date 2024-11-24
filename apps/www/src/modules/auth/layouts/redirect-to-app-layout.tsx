import { memo } from 'react'
import { URLs } from '@/common/urls'
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated'
import { Navigate, Outlet } from 'react-router-dom'

type RedirectToAppLayoutProps = unknown
export const RedirectToAppLayout: React.FC<RedirectToAppLayoutProps> = memo(() => {
    const isAuth = useIsAuthenticated()

    if (isAuth) {
        // TODO: customize URL
        return <Navigate to={URLs.main} />
    }

    return <Outlet />
})
RedirectToAppLayout.displayName = 'RedirectToAppLayout'
