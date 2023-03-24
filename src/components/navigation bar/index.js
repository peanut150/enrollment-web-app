import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Navbar from './navbar';
import Home from '../../pages/home/index';
import About from '../../pages/about/index';
import Contact from '../../pages/contact';
import SignUp from '../../pages/sign up';
import Dashboard from '../../pages/dashboard';

export default function Routing() {
    return (
        <>
          <Router>
          
            <Navbar />
          
            <Switch>

              <Route path='/' component={Home} exact>
                <Home />
              </Route>

              <Route path='/about' component={About} exact>
                <About />
              </Route>

              <Route path='/contact' component={Contact} exact>
                <Contact />
              </Route>

              <Route path='/signup' component={SignUp} exact>
                <SignUp />
              </Route>

              <Route path='/dashboard' component={Dashboard} exact>
                <Dashboard />
              </Route>

            </Switch>
          </Router>
        </>
    )
}
