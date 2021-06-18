import React from 'react';   
import AboutList from "./AboutList"; 
import SectionTitle from "../../SectionTitles/SectionTitle";
import AboutData from "../../../data/About/about-one";

// About Image
import aboutImg from '../../../assets/images/babyhands.jpg'

const AboutContent = () => {

  return (
 
	<section className="about-section" id="about">
        <div className="container"> 
            <div className="row">
                <div className="col-md-6 col-sm-12 about_bottom_warp">
                    <div className="about_list">
                        {/* Start: Heading */}
                        <SectionTitle 
                        title=" Welcome to The Surrogacy Law Firm "  
                        />
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed dapibus enim sit amet pellentesque imperdiet nibh tortor fringilla tortor eu sodales leo augue eget justo. Phasellus id lectus id metus ornare sempereget vulputate urnorbi venenatis, ex a sollicitudin semper sed dapibus enim sit amet pellen tesque imperdiet nibh tortor fringilla tortor </p>
                     </div>

                    <div className="row about_list_warp"> 

                        {/*Start:   About List */} 
                        {AboutData.map(about=>(
                            <AboutList 
                                key={about.id} 
                                title={about.title} 
                                text={about.text}  
                                icon={about.icon}  
                            />
                        ))}
                        {/*End:  About List*/}
                        
                    </div>
                </div>

                {  /*Start: About Image  */} 
                <div className="col-md-6 col-sm-12"> 

                    { /*  About Right Image  */}
                    <img src={aboutImg} alt="" />

                </div> 
                {/*End: About Image  */}
            

            </div>
            {/* row */}
        </div>
        {/* container */}
    </section>


  );
};

export default AboutContent;
