const users = [
    { id: "1", name: "John Doe", email: "john@example.com" },
    { id: "2", name: "Jane Doe", email: "jane@example.com" },
  ];
  
  const resolvers = {
    Query: {
      hello: () => "Hello, GraphQL World! 🚀",
      getUser: (_, { id }) => users.find(user => user.id === id),
      getAllUsers: () => users,
    },
  };
  
  export default resolvers;
  