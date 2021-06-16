import React from 'react';
import {Link} from 'react-router-dom';

 
const PromoItem = (props) => {

    return (
        
        <div className="col-md-4 col-sm-12"> 
            <div className="single_promo_box" style={{backgroundImage: `url(${require('../../assets/images/' + props.bgImg)})`}} >
                <i className={`${props.icon}`}></i> 
                <Link to="#/"> 
                    <h4>{props.title}</h4>
                </Link>
                <div className="hover">
                    <p>{props.text} </p>
                </div>
            </div>
        </div>  

    );
}

export default PromoItem;