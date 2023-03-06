import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Navbar from './navbar';
import Home from '../../pages/home/index';
import About from '../../pages/about/index';
import Contact from '../../pages/contact';

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

            </Switch>
          </Router>
        </>
    )
}
