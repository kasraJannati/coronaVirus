import React from "react";
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';
import styles from './Routes.module.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

function Routes() {  

  return (
    <Router>
        <nav>
            <NavLink to="/" exact activeClassName="active-nav">
                Home
            </NavLink>
            <NavLink to="/about" activeClassName="active-nav">
                About
            </NavLink>
            <NavLink to="/contact" activeClassName="active-nav">
                Contact
            </NavLink>
        </nav>
        <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route render={ ()=><h1 className={styles.notFind}>page not found</h1> } />
          </Switch>
    </Router>
  );
}

export default Routes;

