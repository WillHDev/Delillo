import './App.css'
import App from './App';
import AddStaff from './AddStaff';
import React, { Component } from 'react'
import Schedule from './Schedule'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Sidebar from "react-sidebar";
import { FaAlignJustify } from 'react-icons/fa';
import ShiftSelectionContainer from './ShiftSelectionContainer';
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
          <Sidebar
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
          </Sidebar>


          <h1 className="title" >Scoodle</h1>



        </div>




        <Router>
          <>
            <Route path="/" exact component={App} />
            <Route path="/addStaff" exact component={AddStaff} />
            <Route path="/schedule" exact component={Schedule} />
            <Route path="/shiftSelection" exact component={ShiftSelectionContainer} />
          </>
        </Router>
      </div>
    )
  }
}


// export default withRouter(Index);