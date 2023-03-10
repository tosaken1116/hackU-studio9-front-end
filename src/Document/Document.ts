import { gql } from "@apollo/client";

export const getHomeDemandsDoc = gql`
    query getHomeDemands {
      ideas(limit: 20) {
            author
            title
            status
            created_at
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
    id
    author
    caption
    created_at
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
query getSearchResult($searchWord: String!, $status: [status_enum!]!, $order_by: [ideas_order_by!] = {}) {
  ideas(where: {status: {_in: $status}, title: {_like: $searchWord}}, order_by: $order_by) {
    views
    updated_at
    title
    status
    id
    created_at
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
    created_at
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

export const viewsCountUpDoc = gql`
mutation viewsCountUp($ideaID: uuid!) {
  update_ideas(where: {id: {_eq: $ideaID}}, _inc: {views: 1}) {
    returning {
      views
    }
  }
}

`