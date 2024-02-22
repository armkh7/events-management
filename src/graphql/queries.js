/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEvents = /* GraphQL */ `
  query GetEvents($id: ID!) {
    getEvents(id: $id) {
      id
      userID
      name
      description
      eventDate
      created
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        name
        description
        eventDate
        created
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
