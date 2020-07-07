/*jshint esversion: 6*/
import React, {Component} from 'react';
import Bg_1 from './bgd-01-01.svg';

class About extends Component {
  render(){
    return(
      <div>
          <section class="js-fullheight" style={{backgroundImage:`url(${Bg_1})`, height: '700px',backgroundPosition:'50% 49px'}} data-stellar-background-ratio="0.5">
            <div class="overlay"></div>
            <div class="container">
              <div class="row no-gutters slider-text js-fullheight align-items-end justify-content-center" style={{height: '736px'}}>
                <div class="col-md-9 ftco-animate fadeInUp ftco-animated pb-5 text-center">
                  <h1 style={{color:'black'}} class="mb-3 bread">About</h1>
                  <p class="breadcrumbs"><span class="mr-2"><a style={{color:'black'}} href="index.html">Home <i style={{color:'black'}} class="ion-ios-arrow-forward"></i></a></span> <span style={{color:'black'}}>About <i style={{color:'black'}} class="ion-ios-arrow-forward"></i></span></p>
                </div>
              </div>
            </div>
          </section>

          <section class="ftco-section ftco-no-pt ftco-no-pb">
            <div class="container">
              <div class="row d-flex">
                <div class="col-md-6 d-flex">
                  <div class="img img-video d-flex align-self-stretch align-items-center justify-content-center justify-content-md-end">
                    <a href="https://vimeo.com/45830194" class="icon-video popup-vimeo d-flex justify-content-center align-items-center">
                      <span class="icon-play"></span>
                    </a>
                  </div>
                </div>
                <div class="col-md-6 pl-md-5 py-md-5">
                  <div class="row justify-content-start pt-3 pb-3">
                    <div class="col-md-12 heading-section ftco-animate fadeInUp ftco-animated">
                      <span class="subheading">Welcome to /devit</span>
                      <h2 class="mb-4">We give you the best articles you want.</h2>
                      <p>From storytellers to career professionals.</p>
                      <div class="tabulation-2 mt-4">
                        <ul class="nav nav-pills nav-fill d-md-flex d-block">
                          <li class="nav-item mb-md-0 mb-2">
                            <a class="nav-link active py-2" data-toggle="tab" href="#home1">Our Mission</a>
                          </li>
                          <li class="nav-item px-lg-2 mb-md-0 mb-2">
                            <a class="nav-link py-2" data-toggle="tab" href="#home2">Our Vision</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link py-2 mb-md-0 mb-2" data-toggle="tab" href="#home3">Our Value</a>
                          </li>
                        </ul>
                        <div class="tab-content bg-light rounded mt-2">
                          <div class="tab-pane container p-0 active" id="home1">
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                          </div>
                          <div class="tab-pane container p-0 fade" id="home2">
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                          </div>
                          <div class="tab-pane container p-0 fade" id="home3">
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                          </div>
                        </div>
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

export default About;
