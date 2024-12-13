import { Fragment, memo, useMemo } from 'react'
import { URLs } from '@/common/urls'
import { useLocation } from 'react-router-dom'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'

type MainHeaderProps = unknown
export const MainHeader: React.FC<MainHeaderProps> = memo(() => {
    const location = useLocation()
    const crumbs = useMemo(() => location.pathname.split('/').filter(crumb => crumb !== ''), [location.pathname])

    return (
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem className="hidden md:block">
                        <BreadcrumbLink href={URLs.main.path}>{URLs.main.label}</BreadcrumbLink>
                    </BreadcrumbItem>
                    {crumbs.length !== 0 && <BreadcrumbSeparator className="hidden md:block" />}
                    {crumbs.map((crumb, index, arr) => {
                        const isLast = index === arr.length - 1
                        const path = `/${crumbs.slice(0, index + 1).join('/')}`
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        const urlObj = Object.values(URLs).find(url => (url as any)?.path === path)
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        const label = urlObj ? (urlObj as any).label : crumb

                        return (
                            <Fragment key={index}>
                                <BreadcrumbItem>
                                    {isLast ? (
                                        <BreadcrumbPage className="capitalize">{label}</BreadcrumbPage>
                                    ) : (
                                        <BreadcrumbLink href={path} className="capitalize">
                                            {label}
                                        </BreadcrumbLink>
                                    )}
                                </BreadcrumbItem>
                                {index !== arr.length - 1 && <BreadcrumbSeparator />}
                            </Fragment>
                        )
                    })}
                </BreadcrumbList>
            </Breadcrumb>
        </header>
    )
})
MainHeader.displayName = 'MainHeader'
