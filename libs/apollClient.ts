import {
    ApolloClient,
    HttpLink,
    InMemoryCache,
    NormalizedCacheObject
} from "@apollo/client";
import "cross-fetch/polyfill";

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;
const createApolloClient = (authToken?: string) => {
    return new ApolloClient({
        ssrMode: typeof window === "undefined",
        link: new HttpLink({
            uri: process.env.NEXT_PUBLIC_END_POINT_URL,
        }),
        cache: new InMemoryCache(),
    });
};
export const initializeApollo = (authToken?: string) => {
    const _apolloClient = apolloClient ?? createApolloClient(authToken);
    if (typeof window === "undefined") return _apolloClient;
    if (!apolloClient) apolloClient = _apolloClient;
    return _apolloClient;
};
