import { memo } from 'react'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader } from '@/components/ui/sidebar'

type MainSidebarProps = unknown
export const MainSidebar: React.FC<MainSidebarProps> = memo(() => {
    return (
        <Sidebar>
            <SidebarHeader />
            <SidebarContent>
                <SidebarGroup>sidebar content here</SidebarGroup>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
})
MainSidebar.displayName = 'MainSidebar'
