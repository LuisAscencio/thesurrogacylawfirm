import React, { Fragment } from "react"; 
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne"; 
import PageHeader from '../components/PageHeader'
import SectionTitle from "../components/SectionTitles/SectionTitle";
import TeamList from  '../components/Team/home-one/TeamList'
import teamData from '../data/Team/team'


const TeamPage = ( ) => {
 
    return(
        <Fragment>
            <MetaTags>
              <title>Elizah | About</title>
              <meta
                name="description"
                content="Multipage Business  React JS Template."
              />
            </MetaTags>

            <LayoutOne>
            
                <PageHeader
                    bgImg={require('../assets/images/page_bg.jpg')}
                    title="Our Experts" 
                />
  
                <section className={`team_section team_page`}> 
                    <div className="container">
                        {/* Heading */} 
                        <SectionTitle 
                            title="Meet the team"
                        />
                        {/* End: Heading */ }

                        <div className="row"> 

                            {
                                teamData.slice(0,8).map(team=>(
                                    <TeamList
                                        key={team.id}  
                                        img={team.img}
                                        name={team.name}
                                        designation={team.designation}
                                        facebookUrl={team.facebookUrl} 
                                        twitterUrl={team.twitterUrl} 
                                        linkedinUrl={team.linkedinUrl} 
                                    />
                                ))
                            }
            
                        </div>
        
                    </div>
                </section>
        
            </LayoutOne>
        </Fragment>
            
    ); 
};

export default TeamPage;   