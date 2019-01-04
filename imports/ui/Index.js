import "./App.css";
import App from "./App";
import AddStaff from "./AddStaff";
import React, { Component } from "react";
import Schedule from "./Schedule";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Sidebar from "react-sidebar";
import { FaAlignJustify } from "react-icons/fa";
import ShiftSelectionContainer from "./ShiftSelectionContainer";
import DropdownMenu, {
  DropdownItemGroup,
  DropdownItem,
  DropdownMenuStateless
} from "@atlaskit/dropdown-menu";
import Timeslots from "./Timeslots";
import ShiftDisplay from "./ShiftDisplay";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import StaffDisplay from "./StaffDisplay";
import StaffDisplayContainer from "./StaffDisplayContainer";
import "./Dropdown.css";

const shiftQuery = gql`
  {
    shifts {
      _id
      title
      date
      allDay
      start
      end
      type
    }
  }
`;

const Index = ({ loading, shifts, refetch }) => {
  if (loading) return null;

  return (
    <div className="app-container">
      <div className="header-card">
        <div style={{ margin: "20px" }}>
          <DropdownMenu
            trigger="Menu"
            triggerType="button"
            shouldFlip={false}
            position="right middle"
            onOpenChange={e => console.log("dropdown opened", e)}
            className="menu-dropdown"
          >
            <DropdownItemGroup>
              <DropdownItem href="/">Home</DropdownItem>
              <DropdownItem href="/schedule">Schedule</DropdownItem>
              <DropdownItem href="/shiftSelection">Add A Shift</DropdownItem>
              <DropdownItem href="/addStaff">Add Staff</DropdownItem>
              <DropdownItem href="/shiftsPrototype">
                Shifts Prototype
              </DropdownItem>
            </DropdownItemGroup>
          </DropdownMenu>
        </div>

        <h1 className="title">Scoodle</h1>
      </div>

      <Router>
        <>
          <Route
            path="/"
            exact
            render={props => (
              <StaffDisplayContainer {...props} shifts={shifts} />
            )}
          />
          <Route path="/addStaff" exact component={AddStaff} />
          <Route path="/schedule" exact component={ShiftDisplay} />
          <Route
            path="/shiftSelection"
            exact
            component={ShiftSelectionContainer}
          />
          <Route path="/timeSlots" exact component={Timeslots} />
          <Route path="/shiftsPrototype" exact component={App} />
        </>
      </Router>
    </div>
  );
};
export default graphql(shiftQuery, {
  props: ({ data }) => ({ ...data })
})(Index);

// <Route path="/shiftsPrototype"
// exact
// render={(props) => <StaffDisplay {...props} staff={staff} />}
// />
// </>

// export default withRouter(Index);

{
  /* <Sidebar
sidebar={
  <div>
    <li><a href="/" className="sidebar-link">Home</a>  </li>
    <li> <a href="/schedule" className="sidebar-link">Schedule</a> </li>
    <li> <a href="/addStaff" className="sidebar-link">Add Staff</a> </li>
    <li> <a href="/shiftSelection" className="sidebar-link">Add a Shift</a> </li>
  </div>
}
open={this.state.sidebarOpen}
onSetOpen={this.onSetSidebarOpen}
styles={{ sidebar: { background: "white" } }}
className="sidebar"
>
<div>
  <div className="header-icon" onClick={() => {
    console.log('Hit');
    this.onSetSidebarOpen(true)
  }}>
    <FaAlignJustify className="burger-icon" />
  </div>
</div>
</Sidebar> */
}
