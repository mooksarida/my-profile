import React, { Component } from 'react'
import "./navbar.scss";
import { withRouter } from "react-router";

const navItemLists = [
  {
    id: 'my-profile',
    display: 'MY PROFILE',
    link: '/',
    isInternal: true
  },
  {
    id: 'demo',
    display: 'DEMO',
    link: '/demo',
    isInternal: true
  },
  {
    id: 'github',
    display: 'GITHUB',
    link: 'https://github.com/mooksarida/my-profile',
    isInternal: false
  }
];

const gitHubRootPath = '/my-profile';

class NavbarComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      active: 'my-profile'
    }
  }

  onClickNavItem = (item) => {
    if (item.isInternal) {
      this.props.history.push(gitHubRootPath + item.link);
      this.setState({ active: item.id });
    } else {
      window.open(item.link, "_blank");
    }
  }

  render() {
    return (
      <div className="navbar-wrap">
        <div className="navbar">
          {
            navItemLists.map(item => {
              let navItemClass = ['nav-item'];
              if (item.id === this.state.active) {
                navItemClass.push('active');
              }
              return <div key={item.id} className={navItemClass.join(' ')} onClick={() => this.onClickNavItem(item)}>{item.display}</div>
            })
          }
        </div>
      </div>
    );
  }
}

export default withRouter(NavbarComponent); 