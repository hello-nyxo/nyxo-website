export const getActiveCoaching = /* GraphQL */ `
  query GetActiveCoaching($id: ID!) {
    getUser(id: $id) {
      activeCoaching {
        id
        userId
        stage
        activeWeek
        started
        ended
        lessons
        createdAt
        updatedAt
        owner
      }
    }
  }
`
