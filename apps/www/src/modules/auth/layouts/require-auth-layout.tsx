import { memo } from 'react'
import { URLs } from '@/common/urls'
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated'
import { Navigate, Outlet } from 'react-router-dom'

type RequireAuthLayoutProps = unknown
export const RequireAuthLayout: React.FC<RequireAuthLayoutProps> = memo(() => {
    const isAuth = useIsAuthenticated()

    if (!isAuth) {
        return <Navigate to={URLs.login.path} />
    }

    return <Outlet />
})
RequireAuthLayout.displayName = 'RequireAuthLayout'
