import { gql } from "@apollo/client";

export const getHomeDemandsDoc = gql`
    query getHomeDemands {
        Idea(limit: 20) {
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
query getDemandDetail($ideaId: String!){
  Idea(where: {id: {_eq: $ideaId}}) {
    author
    caption
    createdAt
    title
    status
    views
  }
}`