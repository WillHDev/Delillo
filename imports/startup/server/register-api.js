import DocumentsSchema from "../../api/documents/Documents.graphql";
import { ApolloServer, gql } from "apollo-server-express";
import { WebApp } from "meteor/webapp";
import { getUser } from "meteor/apollo";
import DocumentsResolvers from "../../api/documents/resolvers";
import merge from "lodash/merge";

const testSchema = `
type Query {
    hi: String
  documents: [Document]
    }
`;



const testResolvers = {
  Query: {
    hi() {
      return "Hello Master Will";
    }
  }

};
const resolvers = merge(testResolvers, DocumentsResolvers);

const typeDefs = [testSchema, DocumentsSchema];

//make executable schema replacement
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => ({
    user: await getUser(req.headers.authorization)
  })
});

server.applyMiddleware({
  app: WebApp.connectHandlers,
  path: "/graphql"
});

WebApp.connectHandlers.use("/graphql", (req, res) => {
  if (req.method === "GET") {
    res.end();
  }
});
