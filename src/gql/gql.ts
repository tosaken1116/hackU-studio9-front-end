/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n    query getHomeDemands {\n        Idea(limit: 20) {\n            author\n            title\n            status\n            createdAt\n            views\n            id\n        }\n    }\n": types.GetHomeDemandsDocument,
    "\nquery getDemandDetail($ideaId: String!){\n  Idea(where: {id: {_eq: $ideaId}}) {\n    author\n    caption\n    createdAt\n    title\n    status\n    views\n  }\n}": types.GetDemandDetailDocument,
    "\nquery getSearchResult($searchWord: String!) {\n  Idea(where: {title: {_nilike: $searchWord}}) {\n    views\n    updatedAt\n    title\n    status\n    id\n    createdAt\n    author\n  }\n  }\n": types.GetSearchResultDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getHomeDemands {\n        Idea(limit: 20) {\n            author\n            title\n            status\n            createdAt\n            views\n            id\n        }\n    }\n"): (typeof documents)["\n    query getHomeDemands {\n        Idea(limit: 20) {\n            author\n            title\n            status\n            createdAt\n            views\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery getDemandDetail($ideaId: String!){\n  Idea(where: {id: {_eq: $ideaId}}) {\n    author\n    caption\n    createdAt\n    title\n    status\n    views\n  }\n}"): (typeof documents)["\nquery getDemandDetail($ideaId: String!){\n  Idea(where: {id: {_eq: $ideaId}}) {\n    author\n    caption\n    createdAt\n    title\n    status\n    views\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery getSearchResult($searchWord: String!) {\n  Idea(where: {title: {_nilike: $searchWord}}) {\n    views\n    updatedAt\n    title\n    status\n    id\n    createdAt\n    author\n  }\n  }\n"): (typeof documents)["\nquery getSearchResult($searchWord: String!) {\n  Idea(where: {title: {_nilike: $searchWord}}) {\n    views\n    updatedAt\n    title\n    status\n    id\n    createdAt\n    author\n  }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;