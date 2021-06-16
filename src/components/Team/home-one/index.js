import React from 'react';
import SectionTitle from "../../SectionTitles/SectionTitle";
import TeamList from  './TeamList'
import teamData from '../../../data/Team/team'
 
  
function Services({classes }) {    
    return (
		<section className={`team_section ${classes}`}  id="team"> 
        	<div className="container">
				{/* Heading */} 
				<SectionTitle 
					title="Meet the team"
				/>
				{/* End: Heading */ }

				<div className="row"> 

					{
                        teamData.slice(0,4).map(team=>(
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

    );
}

export default Services;