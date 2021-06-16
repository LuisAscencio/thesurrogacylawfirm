import React from 'react';
import {Link} from 'react-router-dom';
import SectionTitle from "../SectionTitles/SectionTitleTwo";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import GalleryData from '../../data/Gallery/gallery'

const GalleryContent  = () => {
    
    return (
            <section className="work-section work_section_v2" id="work">
                <div className="container-fluid">
                    {/* Heading */}
					<SectionTitle
						smallTitle="Our Work" 
						title="Latest project" 
					/>
					{/* End: Heading */}
                    <div className="projects-list">  
        
                        <Tab.Container defaultActiveKey="all">
                            <Nav variant="pills" className="acount__nav justify-content-center nav nav-pills">
                                <Nav.Item>
                                    <Nav.Link eventKey="all">all projects</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="office">Marketing </Nav.Link>
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
                                            <div className="col-md-3 col-sm-12" key={i}>
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
                                        <div className="col-md-3 col-sm-12" key={i}>
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
                                        <div className="col-md-3 col-sm-12" key={i}>
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
                                        <div className="col-md-3 col-sm-12" key={i}>
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
                                        <div className="col-md-3 col-sm-12" key={i}>
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

                        <div className="text-center"> 
                            <Link to={`${process.env.PUBLIC_URL + "/gallery"}`} className="more-link"> order now </Link>
                        </div>

                    </div>  
                </div>
            </section>

  );
};


export default GalleryContent;


