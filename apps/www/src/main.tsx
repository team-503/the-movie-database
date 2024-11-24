import { App } from '@/app'
import { apolloClient } from '@/modules/graphql/apollo-client'
import { ThemeProvider } from '@/modules/theme/components/theme-provider'
import { SidebarProvider } from '@/components/ui/sidebar'
import '@/styles.css'
import { ApolloProvider } from '@apollo/client'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

const element = document.getElementById('root')!
const root = createRoot(element)

root.render(
    <ApolloProvider client={apolloClient}>
        <ThemeProvider storageKey="_theme">
            <SidebarProvider defaultOpen={false}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </SidebarProvider>
        </ThemeProvider>
    </ApolloProvider>
)
