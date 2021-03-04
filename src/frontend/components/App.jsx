import React, { Component } from "react";
import { Router, Switch, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

// import { history } from '../history/history';
import NavBarContainer from './navbar/navbar';

class App extends Component {

  render() {
    <div>
      {/* <Router history={history}> */}
      <Router>
        <NavBarContainer />
        <Switch>
          
        </Switch>
      </Router>
    </div>
  }
}

export default App;