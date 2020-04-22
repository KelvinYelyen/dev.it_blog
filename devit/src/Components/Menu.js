/*jshint esversion: 6 */
import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class Menu extends Component {
  render(){
    return(
      <div>
            <nav class="navbar px-md-0 navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light scrolled awake" id="ftco-navbar">
             <div class="container">
               <a class="navbar-brand" href="index.html">/dev<i>it</i>.</a>
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                 <span class="oi oi-menu"></span> Menu
               </button>
               <div class="collapse navbar-collapse" id="ftco-nav">
                 <ul class="navbar-nav ml-auto">
                   <li><Link  to="/" class="nav-item nav-link">Home</Link></li>
                   <li><Link to="/Articles" class="nav-item nav-link">Articles</Link></li>
                   <li><Link to="/About" class="nav-item nav-link">Team</Link></li>
                   <li><Link to="/Contact" class="nav-item nav-link">Contact</Link></li>
                 </ul>
               </div>
             </div>
           </nav>

      </div>
    );
  }
}


export default Menu;
