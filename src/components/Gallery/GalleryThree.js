import React from 'react';
import {Link} from 'react-router-dom'; 
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import GalleryData from '../../data/Gallery/gallery'

const GalleryContent  = () => {
    
    return (
            <section className="work-section work_section_v3">
                <div className="container">
                    {/* Heading */}
					<div className="base-header">
                        <h3><span className="light">Enjoy the versatility of</span> <span className="drak">Elizah’s portfolios</span></h3>
                        <p>TheGem is a versatile wp theme with modern creative design. Made as an ultimate toolbox of design elements, styles &amp; features, it helps people to build impressive beautiful high-performant websites of any scope in minutes. Without touching a line of code. Creative agencies, businesses of any kind, online stores, freelancers, bloggers etc. – TheGem delivers everything to cover needs of any website. You will never miss anything in this theme. Don’t waste time  on coding, enjoy your creativity!</p>
                    </div>
					{/* End: Heading */}
                    
                    <div className="projects-list">  
        
                        <Tab.Container defaultActiveKey="all">
                            <Nav variant="pills" className="acount__nav justify-content-center nav nav-pills">
                            <Nav.Item>
                                    <Nav.Link eventKey="all">all projects</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="office">Graphic</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="pool">Development</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="carpet">Digital</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="house">Communication</Nav.Link>
                                </Nav.Item>
                            </Nav>

                            <Tab.Content>
                                <Tab.Pane eventKey="all">  

                                    { 
                                        GalleryData.reverse().slice(0, 8).map((gallery, i) => ( 
                                            <div className="col-md-4 col-sm-12" key={i}>
                                                <div className="single-project-item" style={{
                                                backgroundImage: `url(${require('../../assets/images/' + gallery.thumb)})`
                                                }}>
                                                    <div className="project-hover"> 
                                                        <h4><Link to={`${process.env.PUBLIC_URL + `/gallery/${gallery.title.split(' ').join('-').toLowerCase()}?id=${gallery.id} `}`}>{gallery.title}</Link></h4>
                                                        <span>{gallery.tag}</span>
                                                        <Link to={`${process.env.PUBLIC_URL + `/gallery/${gallery.title.split(' ').join('-').toLowerCase()}?id=${gallery.id} `}`} className="project-link"><i className="icon_link"></i></Link>
                                                    </div>
                                                </div> 
                                            </div>
                                        ))
                                    } 
                                    
                                </Tab.Pane>


                                <Tab.Pane eventKey="office">
                                    { 
                                    GalleryData.reverse().slice(0, 4).map((gallery, i) => ( 
                                        <div className="col-md-4 col-sm-12" key={i}>
                                            <div className="single-project-item" style={{
                                            backgroundImage: `url(${require('../../assets/images/' + gallery.thumb)})`
                                            }}>
                                                <div className="project-hover"> 
                                                    <h4><Link to={`${process.env.PUBLIC_URL + `/gallery/${gallery.title.split(' ').join('-').toLowerCase()}?id=${gallery.id} `}`}>{gallery.title}</Link></h4>
                                                    <span>{gallery.tag}</span>
                                                    <Link to={`${process.env.PUBLIC_URL + `/gallery/${gallery.title.split(' ').join('-').toLowerCase()}?id=${gallery.id} `}`} className="project-link"><i className="icon_link"></i></Link>
                                                </div>
                                            </div> 
                                        </div>
                                    ))
                                    } 
                                </Tab.Pane>

                                <Tab.Pane eventKey="house">
                                    { 
                                    GalleryData.reverse().slice(0, 6).map((gallery, i) => ( 
                                        <div className="col-md-4 col-sm-12" key={i}>
                                            <div className="single-project-item" style={{
                                            backgroundImage: `url(${require('../../assets/images/' + gallery.thumb)})`
                                            }}>
                                                <div className="project-hover"> 
                                                    <h4><Link to={`${process.env.PUBLIC_URL + `/gallery/${gallery.title.split(' ').join('-').toLowerCase()}?id=${gallery.id} `}`}>{gallery.title}</Link></h4>
                                                    <span>{gallery.tag}</span>
                                                    <Link to={`${process.env.PUBLIC_URL + `/gallery/${gallery.title.split(' ').join('-').toLowerCase()}?id=${gallery.id} `}`} className="project-link"><i className="icon_link"></i></Link>
                                                </div>
                                            </div> 
                                        </div>
                                    ))
                                    } 
                                </Tab.Pane>

                                <Tab.Pane eventKey="carpet">
                                    { 
                                    GalleryData.reverse().slice(0, 8).map((gallery, i) => ( 
                                        <div className="col-md-4 col-sm-12" key={i}>
                                            <div className="single-project-item" style={{
                                            backgroundImage: `url(${require('../../assets/images/' + gallery.thumb)})`
                                            }}>
                                                <div className="project-hover"> 
                                                    <h4><Link to={`${process.env.PUBLIC_URL + `/gallery/${gallery.title.split(' ').join('-').toLowerCase()}?id=${gallery.id} `}`}>{gallery.title}</Link></h4>
                                                    <span>{gallery.tag}</span>
                                                    <Link to={`${process.env.PUBLIC_URL + `/gallery/${gallery.title.split(' ').join('-').toLowerCase()}?id=${gallery.id} `}`} className="project-link"><i className="icon_link"></i></Link>
                                                </div>
                                            </div> 
                                        </div>
                                    ))
                                    } 
                                </Tab.Pane>

                                <Tab.Pane eventKey="pool">
                                    { 
                                    GalleryData.reverse().slice(0, 4).map((gallery, i) => ( 
                                        <div className="col-md-4 col-sm-12" key={i}>
                                            <div className="single-project-item" style={{
                                            backgroundImage: `url(${require('../../assets/images/' + gallery.thumb)})`
                                            }}>
                                                <div className="project-hover"> 
                                                    <h4><Link to={`${process.env.PUBLIC_URL + `/gallery/${gallery.title.split(' ').join('-').toLowerCase()}?id=${gallery.id} `}`}>{gallery.title}</Link></h4>
                                                    <span>{gallery.tag}</span>
                                                    <Link to={`${process.env.PUBLIC_URL + `/gallery/${gallery.title.split(' ').join('-').toLowerCase()}?id=${gallery.id} `}`} className="project-link"><i className="icon_link"></i></Link>
                                                </div>
                                            </div> 
                                        </div>
                                    ))
                                    } 
                                </Tab.Pane>



                            </Tab.Content>

                        </Tab.Container>

                    </div>  
                </div>
            </section>

  );
};


export default GalleryContent;


