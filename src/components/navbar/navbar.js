import React, { Component } from 'react'
import "./navbar.scss";

class NavbarComponent extends Component {

  render() {
    return (
      <div>
        <ul>
          <li><a className="active" href="#home">MY PROFILE</a></li>
          <li><a href="#news">DEMO</a></li>
          <li><a href="#news">GITHUB</a></li>
        </ul>
      </div>
    );
  }
}

export default NavbarComponent; 