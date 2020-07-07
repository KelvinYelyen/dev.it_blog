/*jshint esversion: 6 */
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import postlist from '../posts.json';

class Footer extends Component {
  render(){
    return(
      <div>
            <footer class="ftco-footer ftco-bg-dark ftco-section">
              <div class="container">
                <div class="row mb-5">
                  <div class="col-md">
                    <div class="ftco-footer-widget mb-4">
                      <h2 class="logo"><a href="#">/dev.<span>it</span>.</a></h2>
                      <p>Lets Develop together...</p>
                      <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                        <li class="ftco-animate fadeInUp ftco-animated"><a href="#"><span class="icon-instagram"></span></a></li>
                        <li class="ftco-animate fadeInUp ftco-animated"><a href="#"><span class="icon-twitter"></span></a></li>
                        <li class="ftco-animate fadeInUp ftco-animated"><a href="#"><span class="icon-facebook"></span></a></li>
                      </ul>
                    </div>
                  </div>

                  <div class="col-md">
                    <div class="ftco-footer-widget mb-5 ml-md-5">
                      <h2 class="ftco-heading-2">Information</h2>
                      <ul class="list-unstyled">
                        <li><Link  to="/"><a href="#" class="py-1 d-block"><span class="ion-ios-arrow-forward mr-3"></span>Home</a></Link></li>
                        <li><Link  to="/About"><a href="#" class="py-1 d-block"><span class="ion-ios-arrow-forward mr-3"></span>About</a></Link></li>
                        <li><Link  to="/Articles"><a href="#" class="py-1 d-block"><span class="ion-ios-arrow-forward mr-3"></span>Articles</a></Link></li>
                        <li><Link  to="/Contact"><a href="#" class="py-1 d-block"><span class="ion-ios-arrow-forward mr-3"></span>Contact</a></Link></li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-md">
                    <div class="ftco-footer-widget mb-2">
                     <h2 class="ftco-heading-2">Have a Questions?</h2>
                     <div class="block-23 mb-3">
                       <ul>
                         <li><a href="#"><span class="icon icon-phone"></span><span class="text">+233 050 0399 971</span></a></li>
                         <li><a href="#"><span class="icon icon-envelope"></span><span class="text">kevinyelyen@gmail.com</span></a></li>
                       </ul>
                     </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 text-center">
                    <p>Copyright {new Date().getFullYear()} <script>document.write(new Date().getFullYear());</script> All rights reserved | <a href="#" target="_blank">Made by Kheltech</a></p>
                  </div>
                </div>
              </div>
            </footer>

      </div>
    );
  }
}

export default Footer;
