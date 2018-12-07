import StaffSchema from "../../api/staff/Staff.graphql";
import { ApolloServer, gql } from "apollo-server-express";
import { WebApp } from "meteor/webapp";
import { getUser } from "meteor/apollo";
import StaffResolvers from "../../api/staff/resolvers";
import merge from "lodash/merge";

const testSchema = `
type Query {
    hi: String
  staff: [Staff]
  shifts: [Shift]
    }
`;

const testResolvers = {
  Query: {
    hi() {
      return "Scoodle";
    }
  }
};



const resolvers = merge(testResolvers, StaffResolvers);

const typeDefs = [testSchema, StaffSchema];

//make executable schema replacement
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => ({
    user: await getUser(req.headers.authorization)
  })
});

//

server.applyMiddleware({
  app: WebApp.connectHandlers,
  path: "/graphql"
});


WebApp.connectHandlers.use("/graphql", (req, res) => {
  if (req.method === "GET") {
    res.end();
  }
});


//