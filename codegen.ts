
import type { CodegenConfig } from '@graphql-codegen/cli';
const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
        "https://hacku-hasura.hasura.app/v1/graphql": {
            headers: {
                "x-hasura-admin-secret": String(
                    process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ADMIN_SECRET
                ),
            },
        },
    },
],
  documents: ["src/**/*.ts","src/**/*.tsx"],
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: []
    },
  }
} ;

export default config;
