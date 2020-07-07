/*jshint esversion:6 */
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Bg_1 from './bgd-01-01.svg';

class Contact extends Component{
  render(){
    const OnHandleMail = (e) => {

    };
    return(
      <div>
      <section class="hero-wrap-2 js-fullheight" style={{backgroundImage:`url(${Bg_1})`,height: '736px',backgroundPosition:'50% 49px'}} data-stellar-background-ratio="0.5">
        <div class="overlay"></div>
        <div class="container">
          <div class="row no-gutters slider-text js-fullheight align-items-end justify-content-center" style={{height: '736px'}}>
            <div class="col-md-9 ftco-animate fadeInUp ftco-animated pb-5 text-center">
              <h1 style={{color:'black'}} class="mb-3 bread">Contact us</h1>
              <p class="breadcrumbs"><span class="mr-2"><Link to="/"><a style={{color:'black'}} href="index.html">Home <i style={{color:'black'}} class="ion-ios-arrow-forward"></i></a></Link></span> <span style={{color:'black'}}>Contact <i style={{color:'black'}} class="ion-ios-arrow-forward"></i></span></p>
            </div>
          </div>
        </div>
      </section>

      <section class="ftco-section contact-section">
        <div class="container">
          <div class="row d-flex mb-5 contact-info">
            <div class="col-md-12 mb-4">
              <h2 class="h3">Contact Information</h2>
            </div>
            <div class="w-100"></div>
            <div class="col-md-3">
              <p><span>Address:</span> 198 West 21th Street, Suite 721 Queens Valley, Wa 10016</p>
            </div>
            <div class="col-md-3">
              <p><span>Phone:</span> <a href="tel://1234567920">+233 050 0399 971</a></p>
            </div>
            <div class="col-md-3">
              <p><span>Email:</span><a href="mailto:kevinyelyen@gmail.com">kevinyelyen@gmail.com</a></p>
            </div>
            <div class="col-md-3">
              <p><span>Website:</span><a href="#">devit.com</a></p>
            </div>
          </div>
          <div class="row block-9 no-gutters">
            <div class="col-lg-6 order-md-last d-flex">
              <form action="#" class="bg-light p-4 p-md-5 contact-form" OnSubmit={OnHandleMail}>
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Your Name"/>
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Your Email"/>
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Subject"/>
                </div>
                <div class="form-group">
                  <textarea name="" id="" cols="30" rows="7" class="form-control" placeholder="Message"></textarea>
                </div>
                <div class="form-group">
                  <input type="submit" value="Send Message" class="btn btn-primary py-3 px-5"/>
                </div>
              </form>

            </div>

            <div class="col-lg-6 d-flex">
              <div id="map" class="bg-white"></div>
            </div>
          </div>
        </div>
      </section>

      </div>
    );
  }
}

export default Contact;
