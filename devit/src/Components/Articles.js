/*jshint esversion: 6*/
import React,{Component} from 'react';
import Markdown from 'react-markdown';
import postlist from '../posts.json';
import Bg_1 from './bgd-01-01.svg';
import { Link } from 'react-router-dom';


class Articles extends Component{
  render(){
    const excerptList = postlist.map(post => {
        return post.content.split(" ").slice(0, 20).join(" ") + "...";
    });
    return(
      <div>
      <div class="js-fullheight" style={{backgroundImage:`url(${Bg_1})`, height: '736px',backgroundPosition:'50% 49px'}} data-stellar-background-ratio="0.5">
        <div class="overlay"></div>
        <div class="container">
          <div class="row no-gutters slider-text js-fullheight align-items-center justify-content-start" data-scrollax-parent="true" style={{height: '736px'}}>
            <div class="col-md-12 ftco-animate fadeInUp ftco-animated">
              <h1 style={{color:'black'}} class="mb-4 mb-md-0">Articles</h1>
              <div class="row">
                <div class="col-md-7">
                  <div class="text">
                    <div class="mouse">
                      <a href="#" class="mouse-icon">
                        <div class="mouse-wheel"><span style={{color:'black'}} class="ion-ios-arrow-round-down"></span></div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        {postlist.length && postlist.map((post,i) => {
          return(
            <div key={i}>
              <section class="ftco-section bg-light">
                <div class="container">
                  <div class="row d-flex">
                    <div class="col-md-6 d-flex ftco-animate fadeInUp ftco-animated">
                      <div class="blog-entry justify-content-end">
                        <a href="blog-single.html" class="block-20">
                          <Link to={`/Post/${post.id}`}><img class="img-responsive w-100 mb-3 mb-md-0" src={post.thumbnail}/></Link>
                        </a>
                        <div class="text p-4 float-right d-block">
                          <div class="topper d-flex align-items-center">
                            <div class="one py-2 pl-3 pr-1 align-self-stretch">
                              <span class="day">18</span>
                            </div>
                            <div class="two pl-0 pr-3 py-2 align-self-stretch">
                              <span class="yr">2019</span>
                              <span class="mos">October</span>
                            </div>
                          </div>
                           <Link to={`/Post/${post.id}`}><h3 class="heading mb-4"><a href="#">{post.title}</a></h3></Link>
                          <a><Markdown class="mb-4" source={excerptList.content} escapeHtml={false}/></a>
                          <p><a href="#" class="btn-custom"><span class="ion-ios-arrow-round-forward mr-3"></span>Read more</a></p>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                </section>
            </div>
          );
        })}
      </div>
    );
  }
}


export default Articles;
