import React from 'react'; 

 
const WhyChooseItem = (props) => {

    return (
        
        <div className="why_chs_box col-md-6 col-sm-12"> 
			<span className="why_chs_icon"><i className={`${props.icon}`}></i></span>
			<h5>{props.title}</h5>
			<div className="why_chs_desc">
				<p>{props.text}</p>
			</div> 
        </div>  

    );
}

export default WhyChooseItem;