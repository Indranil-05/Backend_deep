import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    hello: String
    getUser(id: ID!): User
    getAllUsers: [User]
  }

  type User {
    id: ID!
    name: String!
    email: String!
  }
`;

export default typeDefs;
