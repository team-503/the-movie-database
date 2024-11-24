import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
    uri: `${import.meta.env.VITE_API_URL}/graphql`,
})

const authLink = setContext((_, { headers }) => {
    // const token = localStorage.getItem(AUTH_TOKEN_KEY)
    return {
        headers: {
            ...headers,
            // ...(token && { Authorization: `Bearer ${token}` }),
        },
    }
})

export const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    connectToDevTools: import.meta.env.DEV,
})
