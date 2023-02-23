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
    "\n    query getHomeDemands {\n      ideas(limit: 20) {\n            author\n            title\n            status\n            createdAt\n            views\n            id\n            likes {\n              user {\n                email\n              }\n            }\n        }\n    }\n": types.GetHomeDemandsDocument,
    "\nquery getDemandDetail($ideaId: uuid!){\n  ideas(where: {id: {_eq: $ideaId}}) {\n    author\n    caption\n    createdAt\n    title\n    status\n    views\n    likes {\n      user {\n        email\n      }\n    }\n  }\n}": types.GetDemandDetailDocument,
    "\nquery getSearchResult($searchWord: String!) {\n  ideas(where: {title: {_like: $searchWord}}) {\n    views\n    updatedAt\n    title\n    status\n    id\n    createdAt\n    author\n    likes {\n      user {\n        email\n      }\n    }\n  }\n  }\n": types.GetSearchResultDocument,
    "\nquery getComment($ideaId: uuid!)\n{\n  comments(where: {ideaID: {_eq: $ideaId}}) {\n    author:user {\n      name\n    }\n    createdAt\n    caption\n  }\n  }\n": types.GetCommentDocument,
    "\nquery getProfile($email: String!) {\n  users(where: {email: {_eq: $email}}) {\n    description\n    name\n    picture\n    isEmailPublic\n    email\n  }\n}\n\n": types.GetProfileDocument,
    "\nmutation updateProfile($email: String!,$description: String!, $isEmailPublic: Boolean!) {\n  update_users(where: {email: {_eq: $email}}, _set: {description: $description, isEmailPublic: $isEmailPublic}) {\n    affected_rows\n    returning {\n      description\n      name\n      picture\n    }\n  }\n}\n\n": types.UpdateProfileDocument,
    "\nmutation insertLike($ideaID: uuid!, $userEmail: String!) {\n  insert_likes_one(object: {userEmail: $userEmail, ideaID: $ideaID}) {\n    ideaID\n    userEmail\n  }\n}\n": types.InsertLikeDocument,
    "\nmutation deleteLike($userEmail: String!, $ideaID: uuid!) {\n  delete_likes_by_pk(ideaID: $ideaID, userEmail: $userEmail) {\n    ideaID\n    userEmail\n  }\n}\n": types.DeleteLikeDocument,
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
export function graphql(source: "\n    query getHomeDemands {\n      ideas(limit: 20) {\n            author\n            title\n            status\n            createdAt\n            views\n            id\n            likes {\n              user {\n                email\n              }\n            }\n        }\n    }\n"): (typeof documents)["\n    query getHomeDemands {\n      ideas(limit: 20) {\n            author\n            title\n            status\n            createdAt\n            views\n            id\n            likes {\n              user {\n                email\n              }\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery getDemandDetail($ideaId: uuid!){\n  ideas(where: {id: {_eq: $ideaId}}) {\n    author\n    caption\n    createdAt\n    title\n    status\n    views\n    likes {\n      user {\n        email\n      }\n    }\n  }\n}"): (typeof documents)["\nquery getDemandDetail($ideaId: uuid!){\n  ideas(where: {id: {_eq: $ideaId}}) {\n    author\n    caption\n    createdAt\n    title\n    status\n    views\n    likes {\n      user {\n        email\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery getSearchResult($searchWord: String!) {\n  ideas(where: {title: {_like: $searchWord}}) {\n    views\n    updatedAt\n    title\n    status\n    id\n    createdAt\n    author\n    likes {\n      user {\n        email\n      }\n    }\n  }\n  }\n"): (typeof documents)["\nquery getSearchResult($searchWord: String!) {\n  ideas(where: {title: {_like: $searchWord}}) {\n    views\n    updatedAt\n    title\n    status\n    id\n    createdAt\n    author\n    likes {\n      user {\n        email\n      }\n    }\n  }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery getComment($ideaId: uuid!)\n{\n  comments(where: {ideaID: {_eq: $ideaId}}) {\n    author:user {\n      name\n    }\n    createdAt\n    caption\n  }\n  }\n"): (typeof documents)["\nquery getComment($ideaId: uuid!)\n{\n  comments(where: {ideaID: {_eq: $ideaId}}) {\n    author:user {\n      name\n    }\n    createdAt\n    caption\n  }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery getProfile($email: String!) {\n  users(where: {email: {_eq: $email}}) {\n    description\n    name\n    picture\n    isEmailPublic\n    email\n  }\n}\n\n"): (typeof documents)["\nquery getProfile($email: String!) {\n  users(where: {email: {_eq: $email}}) {\n    description\n    name\n    picture\n    isEmailPublic\n    email\n  }\n}\n\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation updateProfile($email: String!,$description: String!, $isEmailPublic: Boolean!) {\n  update_users(where: {email: {_eq: $email}}, _set: {description: $description, isEmailPublic: $isEmailPublic}) {\n    affected_rows\n    returning {\n      description\n      name\n      picture\n    }\n  }\n}\n\n"): (typeof documents)["\nmutation updateProfile($email: String!,$description: String!, $isEmailPublic: Boolean!) {\n  update_users(where: {email: {_eq: $email}}, _set: {description: $description, isEmailPublic: $isEmailPublic}) {\n    affected_rows\n    returning {\n      description\n      name\n      picture\n    }\n  }\n}\n\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation insertLike($ideaID: uuid!, $userEmail: String!) {\n  insert_likes_one(object: {userEmail: $userEmail, ideaID: $ideaID}) {\n    ideaID\n    userEmail\n  }\n}\n"): (typeof documents)["\nmutation insertLike($ideaID: uuid!, $userEmail: String!) {\n  insert_likes_one(object: {userEmail: $userEmail, ideaID: $ideaID}) {\n    ideaID\n    userEmail\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation deleteLike($userEmail: String!, $ideaID: uuid!) {\n  delete_likes_by_pk(ideaID: $ideaID, userEmail: $userEmail) {\n    ideaID\n    userEmail\n  }\n}\n"): (typeof documents)["\nmutation deleteLike($userEmail: String!, $ideaID: uuid!) {\n  delete_likes_by_pk(ideaID: $ideaID, userEmail: $userEmail) {\n    ideaID\n    userEmail\n  }\n}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;