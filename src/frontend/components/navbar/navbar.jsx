import React, { Component } from 'react';
import { Router, Switch, Route, Link } from 'react-router-dom';
import { history } from '../../history/history';

export class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };

    this.logout = this.logout.bind(this);

    history.listen((location) => {
      this.props.clearMessage();
    });

  }

  logout() {
    this.props.logout();
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default NavBar;
