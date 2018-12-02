import './App.css'
import App from './App';
import Schedule from './Schedule';
import React, { Component } from 'react'
//import Sidebar from 'react-sidebar';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class Index extends Component {

  render() {
    return (
      <div className="app-container">

        <div className="header-card">
          <h1>Scoodle</h1>
        </div>
        <Router>
          <Switch>
            <Route path="/" exact component={App} />
            <Route path="/schedule" exact component={Schedule} />
          </Switch>
        </Router>
      </div>
    )
  }
}


// export default withRouter(Index);