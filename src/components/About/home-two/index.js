import React from 'react';   
import AboutList from "./AboutList"; 
import SectionTitle from "../../SectionTitles/SectionTitleTwo";
import AboutData from "../../../data/About/about-two";
 

const AboutContent = () => {

  return (
 
	<section className="about_section_v2" id="about">
        <div className="container"> 
            <div className="base-header2">
                {/* Start: Heading */}
                <SectionTitle 
                smallTitle=" Our Intro "  
                title=" About Company "  
                />
            </div>

            <div className="row">

                {/*Start:   About List */} 
                {AboutData.map(about=>(
                    <AboutList 
                        key={about.id} 
                        title={about.title} 
                        text={about.text}  
                        thumb={about.thumb}  
                    />
                ))}
                {/*End:  About List*/}
                         
            </div>
            {/* row */}
        </div>
        {/* container */}
    </section>


  );
};

export default AboutContent;
