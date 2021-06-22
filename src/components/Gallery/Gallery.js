import React from 'react';
import {Link} from 'react-router-dom';
import SectionTitle from "../SectionTitles/SectionTitle";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Accordion from "react-bootstrap/Accordion";
import Card from 'react-bootstrap/Card';

import GalleryData from '../../data/Gallery/gallery'

const GalleryContent  = ({classes}) => {
     
    return (
            <section className={`work-section ${classes}`} id="work">
                <div className="container">
                    {/* Heading */}
					<SectionTitle
						title="FAQ's" 
					/>
					{/* End: Heading */}
                    <div className="projects-list">  
        
                        <Tab.Container defaultActiveKey="all">
                            <Nav variant="pills" className="acount__nav justify-content-center nav nav-pills">
                                <Nav.Item>
                                    <Nav.Link eventKey="all">All FAQ's</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="office">Free Consultation FAQ's</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="pool">Surrogacy FAQ's</Nav.Link>
                                </Nav.Item>

                                {/* <Nav.Item>
                                    <Nav.Link eventKey="carpet">Digital</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="house">Communication</Nav.Link>
                                </Nav.Item> */}
                            </Nav>

                            <Tab.Content>
                                <Tab.Pane eventKey="all">  

                                    { 
                                        GalleryData.reverse().slice(0, 8).map((gallery, i) => ( 
                                            <div className=" projects-list" key={i}>
                                                {/* <div className="single-project-item" style={{
                                                backgroundImage: `url(${require('../../assets/images/' + gallery.thumb)})`
                                                }}> */}
                                                                 <Accordion defaultActiveKey="Accordion" >
                                                                    <Card>
                                                                        <Accordion.Toggle as={Card.Header} eventKey="0">
                                                                        Click me!
                                                                        </Accordion.Toggle>
                                                                        <Accordion.Collapse eventKey="0">
                                                                        <Card.Body>Hello! I'm the body</Card.Body>
                                                                        </Accordion.Collapse>
                                                                    </Card>
                                                                  
                                                                </Accordion>
                                                    {/* <div className="project-hover"> 
                                                        <h4><Link to={`${process.env.PUBLIC_URL + `/gallery/${gallery.title.split(' ').join('-').toLowerCase()}?id=${gallery.id} `}`}>{gallery.title}</Link></h4>
                                                        <span>{gallery.tag}</span>
                                                        <Link to={`${process.env.PUBLIC_URL + `/gallery/${gallery.title.split(' ').join('-').toLowerCase()}?id=${gallery.id} `}`} className="project-link"><i className="icon_link"></i></Link>
                                                    </div>
                                                </div>  */}
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

                    </div>  
                </div>
            </section>

  );
};


export default GalleryContent;


