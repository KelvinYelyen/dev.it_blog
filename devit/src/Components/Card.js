/*jshint esversion: 6 */
import React,{Component} from 'react';
import postlist from '../posts.json';
import Markdown from 'react-markdown';
import { Link } from 'react-router-dom';

class Card extends Component{
  render(){
    const excerptList = postlist.map(post => {
        return post.content.split(" ").slice(0, 40).join(" ") + "...";
    });
    return(
      <div>
          {postlist.length && postlist.map((post, i) => {
            return(
              <div key={i}>
                <div class="case">
                  <div class="row">
                    <div class="col-md-6 col-lg-6 col-xl-8 d-flex">
                        {post.thumbnail &&  <Link to={`/Post/${post.id}`}><a><img class="img-responsive w-100 mb-3 mb-md-0" src={post.thumbnail} alt="Broken Image"/></a></Link> }

                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-4 d-flex">
                      <div class="text w-100 pl-md-3">
                        <span class="subheading">{post.category}</span>
                        <h2><Link to={`/Post/${post.id}`}>{post.title}</Link></h2>
                        <a><Markdown class="mr-7" source={excerptList[i]} escapeHtml={false}/></a>
                        <ul class="media-social list-unstyled">
                          <li class="ftco-animate fadeInUp ftco-animated"><a href="#"><span class="icon-instagram"></span></a></li>
    			                <li class="ftco-animate fadeInUp ftco-animated"><a href="#"><span class="icon-twitter"></span></a></li>
    			                <li class="ftco-animate fadeInUp ftco-animated"><a href="#"><span class="icon-facebook"></span></a></li>
    			              </ul>
                        <div class="meta">
                          <p class="mb-0"><a href="#">{post.date}</a> | <a href="#">{post.author}</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}


export default Card;
