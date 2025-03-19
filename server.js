import {ApolloServer,gql} from "apollo-server"
import {ApolloServerPluginLandingPageGraphQLPlayground} from "apollo-server-core"
import { url } from "inspector";
const server=new ApolloServer({
    typeDefs,
    resolvers,
    plugins:[
        ApolloServerPluginLandingPageGraphQLPlayground
      ] 
});
server.listen().then(({url})=>{
    console.log(`👍 Server ready at ${url}`)
});