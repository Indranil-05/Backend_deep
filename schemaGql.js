import { gql } from "apollo-server";

const typeDefs = gql`
  type Student {
    _id: ID!
    Name: String!
    Age: Int!
    RegistrationNo: Int!
    Email: String!
    AadharNo: String!
    Batch: String!
    Year: String!
  }

  input StudentInput {
    Name: String!
    Age: Int!
    RegistrationNo: Int!
    Email: String!
    AadharNo: String!
    Batch: String!
    Year: String!
  }

  type Mutation {
    createStudent(input: StudentInput!): Student
  }

  type Query {
    getStudents: [Student]
    getAllStudents:[Student]
    getStudentByFilter(Name: String!, RegistrationNo: Int!): Student
  }
`;

export default typeDefs;
