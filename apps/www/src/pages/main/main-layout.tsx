import { memo, PropsWithChildren } from 'react'
import { MainHeader } from '@/pages/main/components/main-header'
import { MainSidebar } from '@/pages/main/components/main-sidebar'
import { Outlet } from 'react-router-dom'
import { SidebarInset } from '@/components/ui/sidebar'

type MainLayoutProps = PropsWithChildren
export const MainLayout: React.FC<MainLayoutProps> = memo(({ children }) => {
    return (
        <>
            <MainSidebar />
            <main className="w-full">
                <SidebarInset>
                    <MainHeader />
                    <div className="p-4">
                        {/*  */}
                        <Outlet />
                        {children}
                        {/*  */}
                    </div>
                </SidebarInset>
            </main>
        </>
    )
})
MainLayout.displayName = 'MainLayout'
