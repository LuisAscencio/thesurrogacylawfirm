import React, { Fragment } from "react"; 
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne"; 
import PageHeader from '../components/PageHeader'
import Services from '../components/Services/home-one' 
import Funfact from '../components/FunFact/home-one'
import Testimonial from '../components/Testimonials/home-one'; 
import LogoContainer from '../components/BrandLogo';  

const servicePage = () => {
	return (
	  <Fragment>
		<MetaTags>
		  <title>Elizah | Home</title>
		  <meta
			name="description"
			content="Multipage Business  React JS Template."
		  />
		</MetaTags>
		<LayoutOne>
		<div className="service-page">
			<PageHeader
				bgImg={require('../assets/images/page_bg.jpg')}
				title="Our Services" 
			/>
			<Services /> 
			<Funfact classes="funfact_serv" /> 
			<Testimonial /> 
			<LogoContainer /> 
		</div>
		</LayoutOne>
	  </Fragment>
	);
  };
  
  export default servicePage;



