import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.scss';
import NavbarComponent from './components/navbar/navbar';
import myProfile from './containers/myProfile/myProfile';

const gitHubRootPath = '/my-profile';

export default function App() {
  return (
    <div className="app-wrap">
      <Router>
        <NavbarComponent />
        <div className="app-body">
          <Route exact path={gitHubRootPath + '/'} component={myProfile} />
        </div>
      </Router>
    </div>
  );
}
