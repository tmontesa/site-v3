import { ApolloClient, createHttpLink, InMemoryCache, ApolloLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


export function getApolloClient(uri: string, token: string): ApolloClient<any> {
    let link: ApolloLink = createHttpLink({
        uri: uri,
    });

    let auth: ApolloLink = setContext((_, { headers }) => {
        return {
            headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
            }
        }
    });

    let client: ApolloClient<any> = new ApolloClient({
        link: auth.concat(link),
        cache: new InMemoryCache(),
    });

    return client;
}