import React, { Fragment } from "react"; 
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";  
import Gallery from "../components/Gallery/Gallery";
import PageHeader from '../components/PageHeader'

const galleryPage = () => {
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
			<PageHeader
				bgImg={require('../assets/images/page_bg.jpg')}
				title="Our Gallery" 
			/>

			<Gallery classes="work_page" />
			
		</LayoutOne>
	  </Fragment>
	);
  };
  
  export default galleryPage;



