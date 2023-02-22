import {
    ApolloClient,
    HttpLink,
    InMemoryCache,
    NormalizedCacheObject
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import "cross-fetch/polyfill";

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_END_POINT_URL,
    headers: {
        "x-hasura-admin-secret":
            String(process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ADMIN_SECRET),
    }
})

const headerLink = setContext((request, previousContext) => {
    const token = localStorage.getItem("token")
    return {
        headers: {
            ...previousContext.headers,
            authorization: token ? `Bearer ${token}` : ""
        }
    }
})

const createApolloClient = (authToken?: string) => {
    return new ApolloClient({
        ssrMode: typeof window === "undefined",
        link: headerLink.concat(httpLink),
        cache: new InMemoryCache(),
    });
};
export const initializeApollo = (authToken?: string) => {
    const _apolloClient = apolloClient ?? createApolloClient(authToken);
    if (typeof window === "undefined") return _apolloClient;
    if (!apolloClient) apolloClient = _apolloClient;
    return _apolloClient;
};
