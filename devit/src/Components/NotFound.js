/*jshint esversion: 6 */
import React from 'react';
import Image_1 from '../images/Image_1.jpg';

const NotFound = () => {
  return (
      <div>
      <div class="hero-wrap js-fullheight"  data-stellar-background-ratio="0.5">
        <div class="overlay"></div>
        <div class="container">
          <div class="row no-gutters slider-text js-fullheight align-items-center justify-content-start" data-scrollax-parent="true">
            <div class="col-md-12 ftco-animate">
              <h1 class="mb-4 mb-md-0">Readit blog</h1>
              <div class="row">
                <div class="col-md-7">
                  <div class="text">
                    <div class="mouse">
                      <a href="#" class="mouse-icon">
                        <div class="mouse-wheel"><span class="ion-ios-arrow-round-down"></span></div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <div class=" container col-md-5 col-lg-5 col-xl-7 d-flex">
        <a href="blog-single.html"><img class="img-responsive w-100 mb-3 mb-md-0" src={Image_1}/></a>
        <h1>The Page you are looking for does not exist!</h1>
      </div>
      <br/>
      <br/>
      </div>
  );
};

export default NotFound;
