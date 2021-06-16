import React from 'react';   
import ServicesData from '../../data/Services/service-one'
import SectionTitle from "../SectionTitles/SectionTitle";
import {Link} from 'react-router-dom'; 

const RelatedServices = () => {
    return (
    <section className="single_service_s2">
        <div className="container">
            {/* Heading */} 
            <SectionTitle 
                title="What we do for you" 
            />
            {/* End: Heading */ }
            <div className="row">
                {
                ServicesData.reverse().slice(0, 3).map((service, id) => ( 
                    <div className="col-md-4 col-sm-12" key={id}>
                        <div className="service_list">
                            <div className="service_img"> 
                                <img src={require('../../assets/images/' + service.thumb)} alt="service" />
                            </div>   
                            <div className="service_para">
                                <i className="icon_easel"></i> <h5> {service.title} </h5>
                                <p>{service.shortDesc}</p> 

                                <Link to={`${process.env.PUBLIC_URL + `/service/${service.title.split(' ').join('-').toLowerCase()}?id=${service.id} `}`} className="srvic_read">Read More <span className="fa fa-angle-double-right"></span></Link>
                            </div>
                        </div> 
                    </div>
                ))
                }
            </div>
        </div>
    </section>
    );
};

export default RelatedServices;