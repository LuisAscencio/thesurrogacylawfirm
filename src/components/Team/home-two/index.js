import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SectionTitle from "../../SectionTitles/SectionTitleTwo";
import teamData from '../../../data/Team/team'

export default () => (

    <section className="team_section team_section_v2" id="team"> 
        <div className="container">
            {/* Heading */} 
            <SectionTitle 
                smallTitle="Meet the team"
                title="Meet the team"
            />
            {/* End: Heading */ }

            <div className="row"> 
                <div className="col-12"> 

                    <Carousel autoPlay showArrows>
                    { 
                    teamData.slice(0, 6).map( (team, id) => (  
                        <div className="team_content" key={id}> 
                            <div className="team_content_wrap">
                                <div className="member_name">
                                    <h4>{team.name}</h4>
                                    <h5>{team.designation}</h5> 
                                </div>
                                <div className="team_social_link">
                                    <ul>
                                        <li>
                                        <a href={` ${team.twitterUrl} `}> <i className="fa fa-twitter"></i></a>
                                        </li>
                                        <li><a href={`${team.instagramUrl} `}> <i className="fa fa-instagram"></i></a>
                                        </li>
                                        <li><a href={`${team.linkedinUrl} `}> <i className="fa fa-pinterest"></i></a>
                                        </li>
                                        <li><a href={`${team.facebookUrl} `}> <i className="fa fa-dribbble"></i></a>
                                        </li>
                                    </ul>
                                </div>
                                <p>{team.text}</p> 
                            </div>

                            <img src={require('../../../assets/images/' + team.img)} alt="service" className="team_img" />

                        </div> 
                            
                    ))}
                    </Carousel>

                    </div>
				</div>
 
			</div>
		</section>

);
