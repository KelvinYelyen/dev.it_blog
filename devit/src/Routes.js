/*jshint esversion: 6 */
import React from 'react';
import Menu from './Components/Menu.js';
import Home from './Components/Home.js';
import About from './Components/About.js';
import Contact from './Components/Contact.js';
import Articles from './Components/Articles.js';
import Post from './Components/Post.js';
import NotFound from './Components/NotFound.js';
import Footer from './Components/Footer.js';
import { HashRouter as Router, Route} from 'react-router-dom';

const Routes = () => {
  return (
    <Router>
      <div className="Routes">
          <Menu/>
          <Route exact path = "/" component={Home}/>
          <Route exact path = "/About" component={About}/>
          <Route exact path = "/Contact" component={Contact}/>
          <Route exact path = "/Articles" component={Articles}/>
          <Route exact path = "/404" component={NotFound}/>
          <Route exact path = "/Post/:id" render={props => <Post {...props}/>}/>
          <Footer/>
      </div>
    </Router>
  );
};

export default Routes;
