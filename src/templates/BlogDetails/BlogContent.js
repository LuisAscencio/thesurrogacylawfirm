import React, { Fragment } from "react";     
 


const BlogContentWrap = ({post}) => {
    return (
        <Fragment>
        
            <div className="col-md-8 col-sm-12 blog-area">
                <div className="blog-warp-1 blog_warp_lay_1">
                    <div className="blog_imgg">
                        <img src={require('../../assets/images/' + post.thumb)} alt="service" />
                    </div>
                    <div className="blog_content_warp">
                        <a href="#/" className="blog_datee"><i className="fa fa-calendar"></i> {post.publishDate}   </a>
                        <a href="#/" className="subtext"><i className="fa fa-tag"></i>  {post.tag} </a>
                        <a href={`${process.env.PUBLIC_URL + `/blog/${post.title.split(' ').join('-').toLowerCase()}?id=${post.id}`}`} className="subtext"><i className="fa fa-comment-o"> </i>  {post.commentCount} </a>
                        <h5><a  href={`${process.env.PUBLIC_URL + `/blog/${post.title.split(' ').join('-').toLowerCase()}?id=${post.id}`}`}>{post.title}</a></h5>
                        <p> {post.content} </p>

                        <div className="sing_blog_middle_box">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="sing_blog_img">
                                        <img src={require('../../assets/images/' + post.blockQuoteImg)} alt="service" />
                                    </div>
                                    <div className="sing_blog_text">
                                        <p> {post.blockQuote}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sing_blog_bottom_box">
                            <div className="row">
                                <div className="col-md-12">
                                    <p> {post.contentSecondPart}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

 
                        
                {/* Post Comments */}
                <div className="list-comments">
                    <div className="comments-section-title">
                        <h4>Comments [15]</h4>
                    </div> 
                    <ul className="comments">
                        <li>
                            <div className="comment">
                            <img src={require('../../assets/images/' + post.comments.proPic)} alt="blog" className="comment-avatar" /> 
                                <div className="blog_com_dt">
                                    <strong className="commenter-title"><a href="#/">{post.comments.name}</a><span className="comment-date">{post.comments.date}</span></strong>
                                    <p>{post.comments.text}</p>
                                </div>
                            </div> 
                            <ul>
                                <li>
                                    <div className="comment">
                                    <img src={require('../../assets/images/' + post.comments.proPic)} alt="service" className="comment-avatar" /> 
                                        <div className="blog_com_dt">
                                            <strong className="commenter-title"><a href="#/">{post.comments.name}</a><span className="comment-date">{post.comments.date}</span></strong>
                                            <p>{ post.comments.text }</p>
                                        </div>
                                    </div> 
                                </li>
                            </ul>
                        </li>
                    </ul> 
                </div>
                 
                {/* Comment Form*/}
                <div className="contact">
                    <div className="contact-form-warper blog-contact">
                        <h4>Leave a comment </h4>
                        <div className="contact-warper"> 
                            <div className="contact-form">
                                <form id="contactForm" method="post" name="contactForm">
                                    <div className="form-group col-sm-12">
                                        <textarea className="form-control" id="Message" name="Message" placeholder="Message :"></textarea>
                                    </div>
                                    <div className="form-group col-md-6 col-sm-12">
                                        <input className="form-control" id="Name" name="Name" placeholder="Name :" type="text" />
                                    </div>
                                    <div className="form-group col-md-6 col-sm-12">
                                        <input className="form-control" id="Email" name="Email" placeholder="Email :" type="text" />
                                    </div>
                                    <input className="submit-button btn btn-chos" name="submit" value="Submit" type="submit" />
                                </form>
                            </div> 
                        </div>
                    </div>
                </div>
                { /* End: Comment Form */}

            </div> 
            { /* End: Left Side :Blog Post */}

        </Fragment>
    );
};

export default BlogContentWrap;