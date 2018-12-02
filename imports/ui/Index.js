import './App.css'
import App from './App';
import AddStaff from './AddStaff';
import React, { Component } from 'react'
import Schedule from './Schedule'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Sidebar from "react-sidebar";
import { FaAlignJustify } from 'react-icons/fa';

export default class Index extends Component {


  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  };

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
  render() {
    return (
      <div className="app-container">
        <div className="header-card">
          <h1>Scoodle</h1>
        </div>
        <Sidebar
          sidebar={
            <div>
              <a href="/" className="sidebar-link">Home</a>
              <a href="/schedule" className="sidebar-link">Schedule</a>
              <a href="/addStaff" className="sidebar-link">Add Staff</a>
            </div>
          }
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          styles={{ sidebar: { background: "white" } }}
          className="sidebar"
        >
          <div onClick={() => this.onSetSidebarOpen(true)} >
            <FaAlignJustify className="theme" />
          </div>
        </Sidebar>

        <Router>
          <Switch>
            <Route path="/" exact component={App} />
            <Route path="/addStaff" exact component={AddStaff} />
            <Route path="/schedule" exact component={Schedule} />
          </Switch>
        </Router>
      </div>
    )
  }
}


// export default withRouter(Index);