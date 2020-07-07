/*jshint esversion: 6 */
import React from 'react';
import { Redirect } from 'react-router-dom';
import postlist from '../posts.json';
import Bg_1 from './bgd-01-01.svg';
import Markdown from "react-markdown";


const Post = (props) => {
  const validId = parseInt(props.match.params.id);
  if (!validId){
    return <Redirect to="/404"/>;
  }
  const fetchedPost = { };
  let postExists = false;
  postlist.forEach((post, i) => {
      if (validId === post.id) {
          fetchedPost.title = post.title ? post.title : "No title given";
          fetchedPost.date = post.date ? post.date : "No date given";
          fetchedPost.author = post.author ? post.author : "No author given";
          fetchedPost.content = post.content ? post.content : "No content given";
          fetchedPost.category = post.category ? post.category : "No content given";
          fetchedPost.thumbnail = post.thumbnail;
          postExists = true;
      }
  });
  if (postExists === false) {
      return <Redirect to="/404" />;
  }
  return (
      <div>
          <section class="js-fullheight" style={{backgroundImage:`url(${Bg_1})`,height: '736px',backgroundPosition:'50% 49px'}} data-stellar-background-ratio="0.5">
            <div class="overlay"></div>
            <div class="container">
              <div class="row no-gutters slider-text js-fullheight align-items-end justify-content-center" style={{height: '736px'}}>
                <div class="col-md-9 ftco-animate fadeInUp ftco-animated pb-5 text-center">
                  <h1 class="mb-3 bread" style={{fontSize:'90px', color:'black'}}>{fetchedPost.title}</h1>
                  <p class="breadcrumbs"><span class="mr-2"><a style={{color:'black'}} href="index.html">Home <i style={{color:'black'}} class="ion-ios-arrow-forward"></i></a></span> <span class="mr-2"><a style={{color:'black'}} href="blog.html">Blog <i style={{color:'black'}} class="ion-ios-arrow-forward"></i></a></span> <span style={{color:'black'}}>Blog Single <i class="ion-ios-arrow-forward"></i></span></p>
                </div>
              </div>
            </div>
          </section>

             <section class="ftco-section ftco-degree-bg">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-8 ftco-animate fadeInUp ftco-animated">
                    	<p class="mb-5">
                        <img src={fetchedPost.thumbnail} class="img-fluid"/>
                      </p>
                      <span class="subheading">{fetchedPost.category}</span>
                      <h2 class="mb-3">{fetchedPost.title}</h2>
                      <div class="meta">
                        <p class="mb-0"><a href="#">{fetchedPost.date}</a></p>
                      </div>
                      <Markdown source={fetchedPost.content} escapeHtml={false} />


                      <div class="about-author d-flex p-4 bg-light">
                        <div class="bio mr-5">
                          <img src={fetchedPost.thumbnail} alt="Image placeholder" class="img-fluid mb-4"/>
                        </div>
                        <div class="desc">
                          <h3>By {fetchedPost.author}</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
                        </div>
                      </div>


                      <div class="pt-5 mt-5">
                        <h3 class="mb-5">1 Comment</h3>

                        <ul class="comment-list">
                          <li class="comment">
                            <div class="vcard bio">
                            <li class="comment">
                              <div class="vcard bio">

                              </div>
                              <div class="comment-body">
                                <h3>John Doe</h3>
                                <div class="meta mb-3">November 13, 2019 at 2:21pm</div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                <p><a href="#" class="reply">Reply</a></p>
                            </div>
                          </li>
                          </div>
                          </li>
                        </ul>


                        <div class="comment-form-wrap pt-5">
                          <h3 class="mb-5">Leave a comment</h3>
                          <form action="#" class="p-5 bg-light">
                            <div class="form-group">
                              <label for="name">Name *</label>
                              <input type="text" class="form-control" id="name"/>
                            </div>
                            <div class="form-group">
                              <label for="email">Email *</label>
                              <input type="email" class="form-control" id="email"/>
                            </div>
                            <div class="form-group">
                              <label for="website">Website</label>
                              <input type="url" class="form-control" id="website"/>
                            </div>

                            <div class="form-group">
                              <label for="message">Message</label>
                              <textarea name="" id="message" cols="30" rows="10" class="form-control"></textarea>
                            </div>
                            <div class="form-group">
                              <input type="submit" value="Post Comment" class="btn py-3 px-4 btn-primary"/>
                            </div>

                          </form>
                        </div>
                      </div>

                    </div>
                    <div class="col-lg-4 sidebar pl-lg-5 ftco-animate fadeInUp ftco-animated">
                      <div class="sidebar-box">
                        <form action="#" class="search-form">
                          <div class="form-group">
                            <span class="icon icon-search"></span>
                            <input type="text" class="form-control" placeholder="Type a keyword and hit enter"/>
                          </div>
                        </form>
                      </div>
                      <div class="sidebar-box ftco-animate  fadeInUp ftco-animated">

                      <div class="sidebar-box ftco-animate fadeInUp ftco-animated">
                        <h3>Recent Blog</h3>
                        <div class="block-21 mb-4 d-flex">
                          <a class="blog-img mr-4" ></a>
                          <div class="text">
                            <h3 class="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                            <div class="meta">
                              <div><a href="#"><span class="icon-calendar"></span> Nov. 14, 2019</a></div>
                              <div><a href="#"><span class="icon-person"></span> Admin</a></div>
                              <div><a href="#"><span class="icon-chat"></span> 19</a></div>
                            </div>
                          </div>
                        </div>
                        <div class="block-21 mb-4 d-flex">
                          <a class="blog-img mr-4"></a>
                          <div class="text">
                            <h3 class="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                            <div class="meta">
                              <div><a href="#"><span class="icon-calendar"></span> Nov. 14, 2019</a></div>
                              <div><a href="#"><span class="icon-person"></span> Admin</a></div>
                              <div><a href="#"><span class="icon-chat"></span> 19</a></div>
                            </div>
                          </div>
                        </div>
                        <div class="block-21 mb-4 d-flex">
                          <a class="blog-img mr-4" ></a>
                          <div class="text">
                            <h3 class="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                            <div class="meta">
                              <div><a href="#"><span class="icon-calendar"></span> Nov. 14, 2019</a></div>
                              <div><a href="#"><span class="icon-person"></span> Admin</a></div>
                              <div><a href="#"><span class="icon-chat"></span> 19</a></div>
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
};

export default Post;
