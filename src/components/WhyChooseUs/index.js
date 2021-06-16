import React from "react";  
import ChooseUsList from "./ChooseUsList";  
import WhyChoosData from '../../data/WhyChooseUs/why-choose'  
import SectionTitle from "../SectionTitles/SectionTitle";

/*Baclground Image*/
import videoBg from '../../assets/images/why_choos.jpg' 


const ChooseUs = () => {
  return (
    
	<section 
    className="why_choos_section" id="quote" style={{backgroundImage: `url("${videoBg}")`}} >
	    <div className="container"> 
			<div className="row">  
				<div className="col-md-8 col-sm-12 why_chs">
					{/* Heading */}
					<SectionTitle
						title="Why Choosing us?" 
					/>
					{/* End: Heading */}

					{/*Start:   About List */} 
					{WhyChoosData.map(choose=>(
						<ChooseUsList 
							key={choose.id} 
							title={choose.title} 
							text={choose.text}  
							icon={choose.icon}  
						/>
					))}
					{/*End:  About List*/}

				</div> 
			</div> 
        </div> 
	</section>  

  );
};

export default ChooseUs;
