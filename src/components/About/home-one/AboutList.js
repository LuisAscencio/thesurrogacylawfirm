import React from 'react';
 
const AboutItem = (props) => {

    return (
        
        <div className="col-md-6 col-sm-12"> 
            <div className="about_list">
              <div className= {`icon-fea  ${props.icon}`}></div>
              <h5>{props.title}</h5>
              <p className="about_para">{props.text}</p>
            </div>
        </div>  

    );
};

export default AboutItem;
