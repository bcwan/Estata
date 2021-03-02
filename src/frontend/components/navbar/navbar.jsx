import React, { Component } from 'react'

export class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };

    this.logOut = this.logOut.bind(this);

  }

  logOut() {

  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default NavBar;
