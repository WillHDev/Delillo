import React from 'react'
import { graphql } from "react-apollo";
import { Accounts } from "meteor/accounts-base";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import StaffForm from './StaffForm'
import './App.css'
import StaffDisplay from "./StaffDisplay";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { withRouter } from "react-router";
import Schedule from './Schedule';
import Sidebar from "react-sidebar";
// import Index from './Index';

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

    if (loading) return null;
    return (

        <div className="app-container">


            <StaffDisplay staff={staff} />
            <StaffForm refetch={refetch} />

        </div>


    );
};

export default graphql(staffQuery, {
    props: ({ data }) => ({ ...data })
})(withRouter(App));

// <Switch>
// <Route exact path="/schedule" component={Schedule} />

// </Switch>