import React from 'react';    
import SectionTitle from "../SectionTitles/SectionTitle";
import ProgressBar from 'react-bootstrap/ProgressBar'

const SkillSec = () => {
    return (
    <section className="our-skill section">
        <div className="container">
            {/* Heading */} 
            <SectionTitle 
                title="Our Skill" 
            />
            {/* End: Heading */ }
            <div className="row">
                <div className="col-lg-6 col-sm-12 col-xs-12">
                    <div className="skill-text">
                        <h2>How we work</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed dapibus enim sit amet pellentesque imperdiet nibh tortor fringilla tortor eu sodales leo augue eget justo. Phasellus id lectus id metus ornare sempereget rem ipsum dolor
                        sit amet consectetur adipiscing elit. Sed dapibus enim sit amet pellentesque imperdiet nibh tortor fringilla tortor </p>
                    </div>
                    <div className="about_pg_lst">
                        <ul>
                            <li>
                                <i className="fa fa-check"></i> Global Chain Solutions
                            </li>
                            <li>
                                <i className="fa fa-check"></i> 24 Hours - Technical Support
                            </li>
                            <li>
                                <i className="fa fa-check"></i> Mobile Shipment Tracking
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <i className="fa fa-check"></i> Global Chain Solutions
                            </li>
                            <li>
                                <i className="fa fa-check"></i> 24 Hours - Technical Support
                            </li>
                            <li>
                                <i className="fa fa-check"></i> Mobile Shipment Tracking
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="skill_wrap col-lg-6 col-sm-12 col-xs-12">
 
                    {/*  Single Skill */}
                    <div className="single-skill">
                        <div className="skill-info">
                            <h4>Finance</h4>
                        </div> 
                        <ProgressBar animated variant="success" now={70} /> 
                    </div>
                    {/*  End Single Skill */}
                    {/*  Single Skill */}
                    <div className="single-skill">
                        <div className="skill-info">
                            <h4>Marketings</h4>
                        </div> 
                        <ProgressBar animated variant="success" now={90} /> 
                    </div>
                    {/*  End Single Skill */}
                    {/*  Single Skill */}
                    <div className="single-skill">
                        <div className="skill-info">
                            <h4>Resource</h4>
                        </div> 
                        <ProgressBar animated variant="success" now={60} /> 
                    </div>
                    {/*  End Single Skill */}
                    {/*  Single Skill */}
                    <div className="single-skill">
                        <div className="skill-info">
                            <h4>Development</h4>
                        </div>
                        <ProgressBar animated variant="success" now={80} /> 
                    </div>
                    {/*  End Single Skill */}
                </div>
            </div>
        </div>
    </section>
    );
};

export default SkillSec;