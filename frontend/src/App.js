import React, { Component } from "react";
import { Router, Switch, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

// import { history } from '../history/history';
import NavBarContainer from './navbar/navbar';
import BoardAdminContainer from './board/board_admin_container';
import BoardModContainer from './board/board_mod_container';
import BoardUserContainer from './board/board_user_container';
import HomeContainer from './home/home_container';
import LoginFormContainer from './session/login_form_container';
import ProfileContainer from './session/profile_container';
import RegisterFormContainer from './session/register_form_container';

class App extends Component {

  render() {
    <div className="container mt-3">
      {/* <Router history={history}> */}
      <Router>
        <NavBarContainer />
        <Switch>
          <Route exact path={["/", "/home"]} component={HomeContainer} />
          <Route exact path="/login" component={LoginFormContainer} />
          <Route exact path="/register" component={RegisterFormContainer} />
          <Route exact path="/profile" component={ProfileContainer} />
          <Route path="/user" component={BoardUserContainer} />
          <Route path="/mod" component={BoardModContainer} />
          <Route path="/admin" component={BoardAdminContainer} />
        </Switch>
      </Router>
    </div>
  }
}

export default App;