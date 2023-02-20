import { gql } from "@apollo/client";

export const getHomeDemandsDoc = gql`
    query getHomeDemands {
      ideas(limit: 20) {
            author
            title
            status
            createdAt
            views
            id
        }
    }
`;

export const getDemandDetailDoc = gql`
query getDemandDetail($ideaId: uuid!){
  ideas(where: {id: {_eq: $ideaId}}) {
    author
    caption
    createdAt
    title
    status
    views
  }
}`

export const getSearchResultDoc = gql`
query getSearchResult($searchWord: String!) {
  ideas(where: {title: {_nilike: $searchWord}}) {
    views
    updatedAt
    title
    status
    id
    createdAt
    author
  }
  }
`
export const getCommentDoc = gql`
query getComment($ideaId: uuid!)
{
  comments(where: {ideaID: {_eq: $ideaId}}) {
    author:user {
      name
    }
    createdAt
    caption
  }
  }
`