const users = [
    { id: "1", name: "Deep Majee", email: "john@example.com" },
    { id: "2", name: "Indranil bada", email: "badaindro@gmail.com" },
  ];
  
  const resolvers = {
    Query: {
      hello: () => "Hello, GraphQL World! 🚀",
      getUser: (_, { id }) => users.find(user => user.id === id),
      getAllUsers: () => users,
    },
  };
  
  export default resolvers;
  