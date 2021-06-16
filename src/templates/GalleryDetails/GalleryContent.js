import React, { Fragment } from "react";   
import SlickSlider from "../../components/UI/Carousel/slick";
import SectionTitle from "../../components/SectionTitles/SectionTitle";
 

const GalleryContentWrap = ({gallery}) => {


    return (
        <Fragment>
  
            <section className="single-work-page">
                <div className="container">  
                    {/* Heading */} 
                    <SectionTitle 
                        title="Work with kc company"
                        subtitle="Subjects to ecstatic children he could ye leave up as built match. Dejection agreeable attention set suspected led offending dmitting an performed supposing by garden agreed matter ."
                    />
                    {/* End: Heading */ }  
        
                    <div className="row"> 
                        <div className="col-md-8 col-sm-12">
                            <div className="row">
                                <div className="portfolioitem col-sm-12">
                                    <div className="carousel slide" id="blog-post-slider">
                                        <SlickSlider settings={{
                                            arrows: true,
                                            dots: false
                                        }}>
                                        {
                                        gallery.previewImages.map((previewImg, i) => (
                                            <div key={i}>
                                                <img src={require('../../assets/images/' + previewImg)} alt={gallery.title} />
                                            </div>
                                        ))
                                        }
                                        </SlickSlider> 
                                    </div>
                                </div>
                                <div className="portfoliodesc">
                                    <div className="col-sm-12">
                                        <div className="project-details">
                                            <h4>{gallery.title}</h4>
                                            <hr/>
                                            <p>{gallery.content}</p> 
                                             
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-12">
                            <div className="portfolio-single-detail">
                                <h4>Project Detail</h4> 
                                <ul className="list-unstyled project-detail-list">
                                    <li><strong>Client Name</strong> <span>{gallery.clientName}</span> </li>
                                    <li><strong>Company Name </strong> <span>{gallery.companyName}</span></li>
                                    <li><strong>Work Type</strong> <span>{gallery.workType}</span></li>
                                    <li><strong>Project Date</strong> <span>{gallery.projectDate}</span></li>
                                    <li><strong>Budget</strong> <span>{gallery.Budget}</span></li>
                                    <li><strong>Location</strong> <span>{gallery.Location}</span></li>
                                </ul>  

                                <div className="port_single_share">
                                    <h4>Share this project</h4> 
                                    <ul className="list-inline social-icons">
                                        <li>
                                            <a className="facebook" href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}>
                                                <i className="fa fa-facebook"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="twitter" href={`https://twitter.com/home?status=${window.location.href}`}>
                                                <i className="fa fa-twitter"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="reddit" href={`http://reddit.com/submit?url=${window.location.href}&title=${gallery.title}`}>
                                                <i className="fa fa-reddit"/>
                                            </a>
                                        </li>
                                        <li> 
                                            <a className="pinterest" href={`https://pinterest.com/pin/create/button/?url=${window.location.href}&media=&description=`}>
                                                <i className="fa fa-pinterest"/>
                                            </a>
                                        </li>
                                    </ul> 
                                </div>

                            </div> 
                        </div>
                    </div> 
                </div> 
            </section> 

        </Fragment>
    );
};

export default GalleryContentWrap;