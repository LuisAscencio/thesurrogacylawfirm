import React from 'react';
import {Link} from 'react-router-dom';

const AboutItem = (props) => {

    return (
    
    <div className="col-md-4 col-sm-12 about_v2_list">
        <div className="about_img">
            <img src={require('../../../assets/images/' + props.thumb)} alt="about" />
        </div>
        <div className="about_v2__para">
            <Link to="#/">
                <h5>{props.title}</h5>
            </Link>
            <p>{props.text} </p>
            <Link to="#/" className="about_read" >read  more <span className="fa fa-angle-double-right"></span></Link>
        </div>
    </div> 

    );
};

export default AboutItem;
