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

export default function App() {
  return (
    <div className="app-wrap">
      <Router>
        <NavbarComponent />
        <div className="app-body">
          <Switch>
            <Route exact path="/" component={myProfile} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
