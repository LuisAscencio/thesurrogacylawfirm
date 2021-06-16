import React from 'react';
import { Link } from "react-router-dom";


function ServiceItem(props) {
    const serviceURL = `/service/${props.title.split(' ').join('-').toLowerCase()}?id=${props.id}`
    return (

        <div className="col-md-4 col-sm-12">
            <div className="serv_item_v2">
                <div className={`icon-serv2 ${props.icon}`}></div>
                <Link to={`${process.env.PUBLIC_URL + serviceURL}`}>
                    <h5 className="serv2-left">{props.title}</h5>
                </Link>
                <p>{props.shortDesc}</p>
            </div>
        </div>


    );
}

export default ServiceItem;

