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
            likes {
              user {
                email
              }
            }
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
    likes {
      user {
        email
      }
    }
  }
}`

export const getSearchResultDoc = gql`
query getSearchResult($searchWord: String!) {
  ideas(where: {title: {_like: $searchWord}}) {
    views
    updatedAt
    title
    status
    id
    createdAt
    author
    likes {
      user {
        email
      }
    }
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
export const getProfileDoc = gql`
query getProfile($email: String!) {
  users(where: {email: {_eq: $email}}) {
    description
    name
    picture
    isEmailPublic
    email
  }
}

`
export const updateProfileDoc = gql`
mutation updateProfile($email: String!,$description: String!, $isEmailPublic: Boolean!) {
  update_users(where: {email: {_eq: $email}}, _set: {description: $description, isEmailPublic: $isEmailPublic}) {
    affected_rows
    returning {
      description
      name
      picture
    }
  }
}

`

export const insertLikeDoc = gql`
mutation insertLike($ideaID: uuid!, $userEmail: String!) {
  insert_likes_one(object: {userEmail: $userEmail, ideaID: $ideaID}) {
    ideaID
    userEmail
  }
}
`

export const deleteLikeDoc = gql`
mutation deleteLike($userEmail: String!, $ideaID: uuid!) {
  delete_likes_by_pk(ideaID: $ideaID, userEmail: $userEmail) {
    ideaID
    userEmail
  }
}
`
