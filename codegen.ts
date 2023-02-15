
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.NEXT_PUBLIC_END_POINT_URL,
  documents: "pages/**/*.tsx",
  generates: {
    "src/gql": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
