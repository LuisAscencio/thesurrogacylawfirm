import React from 'react';  


function TestimonialItem(props) {
    return (
 
        <div className="item"> 
            <div className="testimonial-box">
 
                <div className="testimonial_content">  
                    <p>{props.quote}</p>
                </div>
                <div className="cus-title">
                    <span className="tes-nam">{props.author}</span>
                    <span className="tes-degree">{props.designation}</span>
                </div>
            </div>
        </div> 

    );
}

export default TestimonialItem;