import React from 'react';  


function TestimonialItem(props) {
    return (
 
        <div className="item"> 
            <div className="testimonial-box">

                <div className="testi_images"> 
                    <img src={require('../../../assets/images/' + props.authorThumb)} alt="testimonial"/>
                </div>
                <div className="testimonial_content">  
                    <p>{props.quote}</p>
                </div>
                <div className="cus-title">
                    <span className="tes-nam">{props.author}</span>
                    <span className="tes-degree">{props.designation}</span>
                    <i className="icon_star"></i>
                    <i className="icon_star"></i>
                    <i className="icon_star"></i>
                    <i className="icon_star"></i>
                    <i className=" icon_star-half_alt"></i>
                </div>
            </div>
        </div> 

    );
}

export default TestimonialItem;