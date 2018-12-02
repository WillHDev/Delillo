import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import Index from "../../ui/Index";
import { ApolloProvider } from "react-apollo";
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import { Router, browserHistory } from 'react-router';

const client = new ApolloClient({
  link: new HttpLink({ uri: "/graphql" }),
  cache: new InMemoryCache()
});


const ApolloApp = () => (
  <ApolloProvider client={client}>
    <Index />

  </ApolloProvider>
);

Meteor.startup(() => {
  render(<ApolloApp />, document.getElementById("app"));
});
