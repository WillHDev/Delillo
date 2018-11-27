import React from "react";
import { graphql } from "react-apollo";
import { Accounts } from "meteor/accounts-base";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

const client = new ApolloClient({
  uri: "/graphql",
  request: operation =>
    operation.setContext(() => ({
      headers: {
        authorization: Accounts._storedLoginToken()
      }
    }))
});

const hiQuery = gql`
  {
    hi
    documents {
      _id
      name
    }
  }
`;

const App = ({ data }) => {
  if (data.loading) return null;
  return (
    <div>
      <h1>{data.hi}</h1>
      <ul>
        {data.documents.map(doc => (
          <li key={doc._id}>{doc.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default graphql(hiQuery)(App);
