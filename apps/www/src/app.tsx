import { memo } from 'react'
import { AppRoutes } from '@/app-routes'
import { ErrorPage } from '@/pages/error-page'
import { AnimatePresence } from 'framer-motion'
import { ErrorBoundary } from 'react-error-boundary'
import { useLocation } from 'react-router-dom'
import { Toaster } from '@/components/ui/sonner'

type AppProps = unknown
export const App: React.FC<AppProps> = memo(() => {
    const location = useLocation()

    return (
        <ErrorBoundary FallbackComponent={ErrorPage}>
            <AnimatePresence mode="wait">
                <AppRoutes location={location} key={location.pathname} />
            </AnimatePresence>
            <Toaster />
            {/* <TailwindIndicator /> */}
        </ErrorBoundary>
    )
})
App.displayName = 'App'
