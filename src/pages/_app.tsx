import { ApolloProvider } from "@apollo/client";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { initializeApollo } from "../libs/apollClient";
import "../styles/globals.css";
import Layout from "./components/Layout/Layout";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    const client = initializeApollo();
    return (
        <SessionProvider session={session}>
            <ApolloProvider client={client}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ApolloProvider>
        </SessionProvider>
    );
}

export default MyApp;
