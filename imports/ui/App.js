import React from "react";
import { graphql } from "react-apollo";
import { Accounts } from "meteor/accounts-base";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import StaffForm from './StaffForm'
import './App.css'
import StaffDisplay from "./StaffDisplay";

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
    staff {
      _id
      name
      img
      largeImg
    }
  }
`;

const App = ({ data }) => {
  console.log('data', data);
  if (data.loading) return null;
  return (
    <div className="app-container">
      <div>
        <div className="header-card">
          <h1>{data.hi}</h1>
        </div>

        <StaffDisplay data={data} />
        <StaffForm refetch={data.refetch} />
      </div>
    </div>
  );
};

export default graphql(hiQuery)(App);
