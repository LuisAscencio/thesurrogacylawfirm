import React from 'react';
import SlickSlider from '../../UI/Carousel/slick'
import testimonialData from '../../../data/Testimonials/home-one'
import TestimonialItem from  './TestimonialItem'
import SectionTitle from "../../SectionTitles/SectionTitleTwo";

import testimonialBg from '../../../assets/images/testimonial2.jpg' 
 
 
    const Testimonials = () => {

        const settings = {
            dots: false,
            arrows:false,
            infinite: true, 
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            slidesToScroll: 2
          };

        return (

            <section className="testimonials-section testimonials_sec_v2" id="testimo" style={{backgroundImage: `url("${testimonialBg}")`}} > 
                <div className="container"> 
                    {/* Heading */} 
                    <SectionTitle 
                        smallTitle="Our testimonials" 
                        title="What clients Say" 
                    />
                    {/* End: Heading */ }   
                    <div className="row"> 
                        <div className="col-md-12 col-sm-12"> 

                            <SlickSlider settings={settings}>
                                {
                                    testimonialData.map(testimonial=> (
                                        <div key={testimonial.id}>
                                            <TestimonialItem 
                                                author={testimonial.author}
                                                authorThumb={testimonial.authorThumb} 
                                                quote={testimonial.quote} 
                                                designation={testimonial.designation} 
                                            />
                                        </div>
                                    ))
                                }
                            </SlickSlider>

                        </div>
                    </div>
                </div>
            </section>
        );
    };

export default Testimonials;