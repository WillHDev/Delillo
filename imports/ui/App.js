import React from 'react'
import { graphql } from "react-apollo";
import { Accounts } from "meteor/accounts-base";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import StaffForm from './StaffForm'
import './App.css'
import StaffDisplay from "./StaffDisplay";
import { withRouter } from "react-router";
import Sidebar from "react-sidebar";
import StaffDisplayContainer from './StaffDisplayContainer';

const client = new ApolloClient({
    uri: "/graphql",
    request: operation =>
        operation.setContext(() => ({
            headers: {
                authorization: Accounts._storedLoginToken()
            }
        }))
});

const staffQuery = gql`
  {
    
    staff {
      _id
      name
      img
      largeImg
    }
  }
`;
const App = ({ loading, staff, refetch }) => {
    console.log('staff Origin', staff);

    if (loading) return null;
    return (
        <div >
            <StaffDisplay staff={staff} />
        </div>
    );
};

export default graphql(staffQuery, {
    props: ({ data }) => ({ ...data })
})(withRouter(App));

// <Switch>
// <Route exact path="/schedule" component={Schedule} />

// </Switch>

//<StaffDisplay staff={staff} />