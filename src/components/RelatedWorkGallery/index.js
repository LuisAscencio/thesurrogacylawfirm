import React from 'react';  
import {Link} from 'react-router-dom'; 
import ServicesData from '../../data/Gallery/gallery' 
import SectionTitle from "../../components/SectionTitles/SectionTitle";


const RelatedWorkGallery = () => {
    return (

        <section className="work-section related_work">
            <div className="container"> 
                <div className="row">
                {/* Heading */} 
                <SectionTitle 
                    title="Related project"
                    subtitle="Subjects to ecstatic children he could ye leave up as built match. Dejection agreeable attention set suspected led offending dmitting an performed supposing by garden agreed matter ."
                />
                {/* End: Heading */ } 
                    
                {
                    ServicesData.reverse().slice(0, 4).map((gallery,i) => ( 
                        <div className="col-md-3 col-sm-12" key={i}>
                            <div className="single-project-item" 
                        style={{backgroundImage: `url(${require('../../assets/images/' + gallery.thumb)})` }}>
                                <div className="project-hover">
                                    <h4><Link to={`${process.env.PUBLIC_URL + `/gallery/${gallery.title.split(' ').join('-').toLowerCase()}?id=${gallery.id} `}`}>{gallery.title}</Link></h4>
                                    <span>{gallery.tag}</span>
                                    <Link to={`${process.env.PUBLIC_URL + `/gallery/${gallery.title.split(' ').join('-').toLowerCase()}?id=${gallery.id} `}`} className="project-link"><i className="icon_link"></i></Link>
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

export default RelatedWorkGallery;