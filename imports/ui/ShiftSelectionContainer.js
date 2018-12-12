import React, { Component } from "react";
import ShiftSelection from "./ShiftSelection";
import ShiftDisplay from "./ShiftDisplay";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

export default class ShiftSelectionContainer extends Component {
  render() {
    return (
      <div>
        <ShiftSelection />
      </div>
    );
  }
}
//
//       <ShiftDisplay />
