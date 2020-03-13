import React from "react";
import Coronavirus from '../Coronavirus/Coronavirus';
import News from '../News/News';
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
                Coronavirus
            </NavLink>
            <NavLink to="/news" activeClassName="active-nav">
                News
            </NavLink>
            <NavLink to="/contact" activeClassName="active-nav">
                Contact
            </NavLink>
        </nav>
        <Switch>
                <Route exact path="/" component={Coronavirus} />
                <Route path="/news" component={News} />
                <Route path="/contact" component={Contact} />
                <Route render={ ()=><h1 className={styles.notFind}>page not found</h1> } />
          </Switch>
    </Router>
  );
}

export default Routes;

