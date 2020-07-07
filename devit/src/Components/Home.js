/*jshint esversion: 6 */
import React, {Component} from 'react';
import Card from './Card.js';
import Bg_1 from './bgd-01-01.svg';

class Home extends Component {
  render(){
    return(
      <div>
      <div class="js-fullheight" style={{backgroundImage:`url(${Bg_1})`, height:'736px', backgroundPosition:'50% 50%'}} data-stellar-background-ratio="0.5">
        <div class="overlay"></div>
        <div class="container">
          <div class="row no-gutters slider-text js-fullheight align-items-center justify-content-start" data-scrollax-parent="true" style={{height: '736px'}}>
            <div class="col-md-12 ftco-animate fadeInUp ftco-animated">
             <h2 class="subheading">Hello! Welcome to</h2>
             <h1 class="mb-4 mb-md-0" style={{color:'black',opacity: '100%'}}>/dev.it blog</h1>
             <div class="row">
               <div class="col-md-7">
                 <div class="text" >
                   <p style={{color:'black'}}>Dev.it or develop it is a career slash lifestyle blog for programmers, digital creators and anyone who likes to share something he/she has developed in the various aspects of life. To inspire and to develop us as human beings, as we learn from each other.</p>
                   <div class="mouse">
                     <a href="#" class="mouse-icon">
                       <div class="mouse-wheel"><span style={{color:'black'}}  class="ion-ios-arrow-round-down"></span></div>
                     </a>
                   </div>
                 </div>
               </div>
             </div>
            </div>
          </div>
        </div>
      </div>
      <section class="ftco-section">
        <div class="container">
          <div class="row">
            <div class="col-md-12">

              <Card/>

               <div class="row mt-5">
                <div class="col text-center">
                  <div>
                      <a style={{boxSizing:'border-box'}} href="#">Load more...</a>
                  </div>
                </div>
              </div>

          </div>
         </div>
        </div>
       </section>

      </div>
    );
  }
}



export default Home;
